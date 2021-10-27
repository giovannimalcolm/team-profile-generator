const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        console.log('${school)')
        return `${school}`
    }
    getRole(){
        console.log('Intern')
        return `Intern`
    }

}

module.exports = Intern