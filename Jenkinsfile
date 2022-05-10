pipeline{
    agent any
    stages {
        stage('staging') {
            steps {
                echo "staging"
      // One or more steps need to be included within the steps block.
      }
     }

  stage('production')
  {
    steps {
         echo "production"
      // One or more steps need to be included within the steps block.
    }
  }
  stage('Build/Deploy app to staging') {
    steps {
      sshPublisher(
        publishers: [
          sshPublisherDesc(
            configName: 'staging', 
            transfers: [
                sshTransfer(
                    cleanRemote: false,
                    excludes: '',
                    execCommand: 'echo ‘Replace me by your build/install scripts’',
                    execTimeout: 120000,
                    flatten: false,
                    makeEmptyDirs: false, 
                    noDefaultExcludes: false, 
                    patternSeparator: '[, ]+', 
                    remoteDirectory: '', 
                    remoteDirectorySDF: false, 
                    removePrefix: '', sourceFiles: '**/*'
                )
            ], 
            usePromotionTimestamp: false, 
            useWorkspaceInPromotion: false, 
            verbose: true
            )
          ]
        )
      }
    }
    stage('Perform manual testing') {
      steps {
        timeout(activity: true, time: 5) { input 'Proceed to production?'} 
      }
    }
  }
}

