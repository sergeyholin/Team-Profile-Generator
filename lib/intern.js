const Employee = require('./employee')
// const inquirer = require('inquirer');
// const fs = require('fs');

class Intern extends Employee {
    constructor (name,id,email,school) {
        super(name,id,email);
        this.shool = school;
    }
   
    getRole() {
        return "Intern";
    }
    
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;