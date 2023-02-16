//reserved word
pipeline{
    //alwasys specify agent
    agent any
    parameters{
        string(name: 'SPEC', defaultValue: "cypress/integration/**/**",
            description: "Enter the script path that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'],
            description: "the browsers to execute your scripts")
        
    }

    options{
        ansiColor('xterm')
    }


    stages{
        stage(Building){
            echo "Building the application"
        }
        stage(Testing){
            bat "npm i"
            bat "npx cypress open --browse ${BROWSER} --spec ${SPEC}"
        }
        stage(Deploying){
             echo "Deploy the application"
        }
    }

    post{
        always{
            publishHTML([allowMissing:false, alwasysLinkToLastBuild:false, keepAll:true,
            reportDir:'cypress/report',reportFiles:'index.html',
            reportName: 'HTML Report', reportTitles:''])
        }
    }
}