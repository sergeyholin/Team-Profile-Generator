const Employee = require('./employee')
// const inquirer = require('inquirer');
// const fs = require('fs');

class Engineer extends Employee {
    constructor (name,id,email,github) {
        super(name,id,email);
        this.github = github;
    }
   
    getRole() {
        return "Engineer";
    }
    
    getGithub() {
        return this.gitub;
    }
}

module.exports = Engineer;