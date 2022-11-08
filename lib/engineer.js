const Employee = require("./employee");

// Defines Engineer
class Engineer extends Employee {
    constructor (id, name, email, github){
        super(id, name, email,);
        this.role = "Engineer";
        this.github = github
        
    }
    
    getGithub() {return this.github;}

    getRole() {return this.role;}
}
module.exports = Engineer