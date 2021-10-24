const inquirer = require("inquirer");
const fs = require("fs");


var promptUser = () => {
    return new Promise((resolve,reject) => {
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
        if (answers){
            renderCard();
            resolve(answers);
        }
        else{
            reject(Error("Something went wrong!"))
        }
       
    });
};

const addEngineer = () => {
    return new Promise((resolve,reject) => {
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
        renderCard();
        
    });
};


const addIntern = () => {
    return new Promise((resolve,reject) => {
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
                name: 'github',
                message: 'What is the intern\'s github?',
            },
            {
                type: 'list',
                name: 'employeeType',
                message: 'Which type of team member would you like to add?',
                choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
            }
        ])
        renderCard();
    });
};

promptUser()
.then((employeeType) => {
    renderCard();
    return addEngineer();
})
.then((employeeType) => {
    return addIntern();
})
.catch((err) => {
    console.log(err);
});