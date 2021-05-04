pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/david-cung/firstNodejsCI.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'node index.js'
            }
        }
    }
}
