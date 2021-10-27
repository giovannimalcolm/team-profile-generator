//library requirements

const inquirer = require("inquirer");
const fs = require("fs");
const renderCard = require("./utils/renderCard");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

//array to add all inputted employee information to use for render
employeesArr = []

//function to prompt user and begin app. begins with question about manager and manager only as that is the bare minimum for a team.
//answers are pushed to employeesArr. same concept for addIntern/Engineer.
var promptUser = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your team manager\'s name?',
            },
            {
                type: 'input',
                name: 'ID', 
                message: 'What is your team manager\'s ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your team manager\'s email?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your team manager\'s office number?',
            },
            {
                type: 'list',
                name: 'employeeType',
                message: 'Which type of team member would you like to add?',
                choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
            }
        ])
        .then((answers) => {
            module.exports = answers;
            var manager1 = new Manager (answers.name, answers.ID, answers.email, answers.officeNumber);
            employeesArr.push(manager1);
           return pickEmployee(answers.employeeType)
          
        })
        .catch((err) => {
        err ? console.error(err) : console.info(`Something went wrong`)
    })
};

const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the engineer\'s name?',
            },
            {
                type: 'input',
                name: 'ID',
                message: 'What is the engineer\'s ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the engineer\'s email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the engineer\'s github?',
            },
            {
                type: 'list',
                name: 'employeeType',
                message: 'Which type of team member would you like to add?',
                choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
            }
        ])
        .then((answers) => {
            var newEngineer = new Engineer(answers.name, answers.ID, answers.email, answers.github)
            employeesArr.push(newEngineer)
           return pickEmployee(answers.employeeType)

        })
        .catch((err) => {
            err ? console.error(err) : console.info(`Something went wrong`)
        })
    
        
};


const addIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the intern\'s name?',
            },
            {
                type: 'input',
                name: 'ID',
                message: 'What is the intern\'s ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the intern\'s email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the intern\'s school?',
            },
            {
                type: 'list',
                name: 'employeeType',
                message: 'Which type of team member would you like to add?',
                choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
            }
        ])
        .then((answers) => {
            var newIntern = new Intern(answers.name, answers.ID, answers.email, answers.school)
            employeesArr.push(newIntern)
           return pickEmployee(answers.employeeType)
        })
        .catch((err) => {
            err ? console.error(err) : console.info(`Something went wrong`)
        })
};


//ran at the end of each of the three questioning functions to allow the user to move on to the next set of questions. 
//exits if the user pleases and moves on to rendering the content.
var pickEmployee = (employeeType) => {
    if(employeeType == 'Engineer'){
        addEngineer();
        return;
    }
    else if (employeeType == 'Intern'){
        addIntern();
        return;
    }   
    else{
        renderCard(employeesArr);
        return;
    }

}







//begin the app on run
var init = () =>{
    promptUser();
}

init();