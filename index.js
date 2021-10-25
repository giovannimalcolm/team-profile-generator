const inquirer = require("inquirer");
const fs = require("fs");
const { inherits } = require("util");


var promptUser = () => {
     new Promise((resolve,reject) => {
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
        if (answers.length != 5){
            reject(new Error('Something went wrong'));
        }
        else {
            renderCard(answers)
            resolve(answers.employeeType)
        }
    });
};

const addEngineer = () => {
     new Promise((resolve,reject) => {
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
     new Promise((resolve,reject) => {
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

var pickEmployee = (employeeType) => {
    if(employeeType = 'Engineer'){
        addEngineer();
    }
    else if (employeeType = 'Intern'){
        addIntern();
    }
    else{
        return;
    }

}

promptUser()
.then(() => {
    pickEmployee(answers.employeeType);
    return 
})
.catch((err) => {
    console.log(err);
});



var renderCard = (answers) => {
    if (employeeType = 'Manager'){
        var box = $.create("container")
        box.addClass('cards')
        $.append(box)

        var managerCard = $.create('div')
        managerCard.addClass('card')
        managerCard.attr('style', 'width: 18rem')
        var cardBody = $.create('div')
        cardBody.addClass('card-body')

        cardBody.append(managerCard);

        var managerName = $.create('h5')
        managerName.addClass('card-title')
        managerName.append(cardBody)
        var employeeRole = $.create('p')
        employeeRole.addClass('card-text')
        employeeType.append(cardBody)

        var icon = $.create('i');
        icon.addClass('fas fa-mug-hot');
        icon.append(employeeRole);

        var detailsContainer = $.create('div')
        detailsContainer.addClass('list-container')
        detailsContainer.append(managerCard)
        var details = $.create('ul')
        details.addClass('list-group details')
        details.append(detailsContainer)

        var detail1 =$.create('li')
        var detail2 =$.create('li')
        var detail3 =$.create('li')

        detail1.append(details)
        detail2.append(details)
        detail3.append(details)

    }

    else if(employeeType = 'Engineer'){
        //create elements, set values, append etc etc 
    }
    else if (employeeType = 'Intern'){
        //create elements, set values, append etc etc 
    }
    return;

}


init();

var init = () =>{
    promptUser();
}