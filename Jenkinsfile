pipeline {
    agent {
        label 'docker-agent'
    }
    tools {
        nodejs 'Node16'
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo/my-fullstack-app.git'
            }
        }
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }
        stage('Build Docker Images') {
            steps {
                sh 'docker build -t my-web-app-frontend:latest ./frontend'
                sh 'docker build -t my-web-app-backend:latest ./backend'
            }
        }
        stage('Run Containers') {
            steps {
                sh '''
                    if [ "$(docker ps -a -q -f name=c_webapp)" ]; then
                        docker rm -f c_webapp
                    fi
                    if [ "$(docker ps -a -q -f name=c_frontend)" ]; then
                        docker rm -f c_frontend
                    fi
                    if [ "$(docker ps -a -q -f name=c_database)" ]; then
                        docker rm -f c_database
                    fi
                    docker-compose up -d
                '''
            }
        }
        stage('Test Endpoint') {
            steps {
                sh 'curl http://localhost:8090/hello'
                sh 'curl http://localhost:8080'
            }
        }
    }
    post {
        always {
            sh 'docker-compose down || true'
            sh 'docker rm -f c_webapp c_frontend c_database || true'
        }
    }
}