pipeline {
      agent any

      tools {nodejs "airbnb"}

      parameters{
          string(name: 'SPEC', defaultValue:"cypress/integration/airbnbSearch.spec.js", description: "Enter the cypress script path that you want to execute")
          choice(name: 'BROWSER', choices:['electron'], description: "Select the browser to be used in your cypress tests")
      }

      stages {
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
                                    npm i
                                    pm2 restart start''',
                                    execTimeout: 1200000,
                                    flatten: false,
                                    makeEmptyDirs: false,
                                    noDefaultExcludes: false,
                                    patternSeparator: '[, ]+',
                                    remoteDirectory: '',
                                    remoteDirectorySDF: false,
                                    removePrefix: '',
                                    sourceFiles: '**/*')],
                        usePromotionTimestamp: false,
                        useWorkspaceInPromotion: false,
                        verbose: true)])
            }
        }
        stage('Run automated tests'){
            steps {
                sh 'npm prune'
                sh 'npm cache clean --force'
                sh 'npm ci'
                sh 'npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator'
                sh 'rm -f mochawesome.json'
                sh 'npm run cypress:headless --config baseUrl="http://34.163.103.107:3000" --browser ${BROWSER} --spec ${SPEC} --reporter mochawesome'
                sh 'npx mochawesome-merge cypress/results/*.json -o mochawesome-report/mochawesome.json'
                sh 'npx marge mochawesome-report/mochawesome.json'
            }
            post {
                success {
                    publishHTML (
                        target : [
                            allowMissing: false,
                            alwaysLinkToLastBuild: true,
                            keepAll: true,
                            reportDir: 'mochawesome-report',
                            reportFiles: 'mochawesome.html',
                            reportName: 'My Reports',
                            reportTitles: 'The Report'])

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
