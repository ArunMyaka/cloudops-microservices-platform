pipeline {
  agent any

  stages {
    stage('Test Backend') {
      steps {
        dir('app/backend') {
          sh 'python3 -m venv .venv'
          sh '. .venv/bin/activate && pip install -r requirements.txt && pytest'
        }
      }
    }

    stage('Build Images') {
      steps {
        sh 'docker build -t cloudops-backend:${BUILD_NUMBER} app/backend'
        sh 'docker build -t cloudops-frontend:${BUILD_NUMBER} app/frontend'
      }
    }
  }
}

