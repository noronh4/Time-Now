pipeline {
    agent any

    
    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
                
            }
        }
        stage('create arq') {
                steps {
                    sh "touch arq.txt"
                }
            }
        stage('edit arq') {
               steps {
                    echo 'Hello World > arq.txt'
                }
            }
        stage('show arq') {
                steps {
                    sh 'cat arq.txt'
                }
            }
        stage('build') {
            steps {
                echo 'building project'
            }
        }
        stage('deploy') {
            steps {
                echo 'deploy project'
            }
        }
    }
    post {
        always {
            echo 'done!'
    }
}
}


