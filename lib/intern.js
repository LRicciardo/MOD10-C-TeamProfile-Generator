const Employee = require("./employee");

// Defines Intern
class Intern extends Employee {
    constructor (id, name, email, schoolName){
        super(id, name, email);
        this.schoolName = schoolName
    }
    getSchool(){return this.schoolName;}
    getRole(){return "Intern";}
}    
    
module.exports = Intern