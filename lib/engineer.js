const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        this.github = github;
        super(name, id, email);
    }

    getGithub(){
        console.log(this.github);
        return `${github}`;
    }

    getRole(){
        console.log('Engineer')
        return `Engineer`
    }

}