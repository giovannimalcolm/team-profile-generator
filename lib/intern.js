const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        this.school = school;
        super(name, id, email);
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