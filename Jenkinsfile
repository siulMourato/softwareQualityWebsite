pipeline {
      agent any

      tools {nodejs "airbnb"}

      parameters{
          string(name: 'SPEC', defaultValue:"**/*.{spec.js,feature,features}", description: "Enter the cypress script path that you want to execute")
          choice(name: 'BROWSER', choices:['electron'], description: "Select the browser to be used in your cypress tests")
      }
      stages {

            stage('Deploy and performance'){
                parallel {
                    
                                stage('Build/Deploy app to staging') {
                                    steps {
                                        sshPublisher(
                                            publishers: [
                                                sshPublisherDesc(
                                                    configName: 'staging',
                                                    transfers: [
                                                        sshTransfer(
                                                            cleanRemote: false,
                                                            excludes: 'node_modules/',
                                                            execCommand: '''
                                                            cd ../../airbnb
                                                            npm i
                                                            npm run build
                                                            pm2 restart next''',
                                                            execTimeout: 1200000,
                                                            flatten: false,
                                                            makeEmptyDirs: false,
                                                            noDefaultExcludes: false,
                                                            patternSeparator: '[, ]+',
                                                            remoteDirectory: '../../airbnb',
                                                            remoteDirectorySDF: false,
                                                            removePrefix: '',
                                                            sourceFiles: '**/*')],
                                                usePromotionTimestamp: false,
                                                useWorkspaceInPromotion: false,
                                                verbose: true)])
                                    }
                               }

                               stage('Performance') {
                                    //    triggers { cron('0 15 * * 1') }
                                   steps {
                                    sh "/home/luiscmsousa/apache-jmeter-5.4.3/bin/jmeter -n -t /var/lib/jenkins/workspace/airbnb/jmeter/testCase.jmx"
                                   }
                               }
                            }
            }



        stage('Run Tests') {
            parallel {
                stage('Run automated tests'){
                    steps {
                        sh 'npm prune'
                        sh 'npm cache clean --force'
                        sh 'npm i'
                        sh 'npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator'
                        sh 'rm -f mochawesome-report/mochawesome.json'
                        sh 'npm run cypress'
                        sh 'npx mochawesome-merge cypress/results/*.json -o mochawesome-report/mochawesome.json'
                        sh 'npx marge mochawesome-report/mochawesome.json -f report -o mochawesome-report'
                    }

                        post {
                            success {
                                publishHTML (
                                    target : [
                                        allowMissing: true,
                                        alwaysLinkToLastBuild: true,
                                        keepAll: true,
                                        reportDir: 'mochawesome-report',
                                        reportFiles: 'report.html',
                                        reportName: 'My Reports',
                                        reportTitles: 'The Report'])
                            }
                        }
                    }

                    stage('Static Analysis') {
                        environment{ 
                            SCANNER_HOME = tool 'Sonar-scanner'; 
                        }
                        steps{
                            withSonarQubeEnv('sonarQube'){
                                sh "${SCANNER_HOME}/bin/sonar-scanner"
                            }
                        }
                    }
                }
            }


            stage('Perform manual testing...'){
                steps {
                    timeout(activity: true, time: 5) {
                        input 'Proceed to production?'
                    }
               }
            }

           stage('Release to production') {
               steps {

               // similar procedure as in the 'Build/ Deploy to staging' stage, suppressed here for cost saving purposes
                   echo "Deploying app in production environment"
              }
           }
        }

}
