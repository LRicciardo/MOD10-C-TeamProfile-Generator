const Employee = require("./employee");

// Defines Intern
class Intern extends Employee {
    constructor (id, name, email, schoolName){
        super(id, name, email);
        this.role = "Intern";
        this.schoolName = schoolName
    }

    getSchool(){return this.schoolName;}

    getRole(){return this.role;}
}    
    
module.exports = Intern