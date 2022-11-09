const Employee = require("./employee");

//  Define an employee
class Manager extends Employee {
    constructor (id, name, email, phone) {
        super(id, name, email);
        this.phone = phone
        this.role = "Manager";
    }

    // getPhone() {return this.phone;}
    
    getRole() {return this.role;}
}
module.exports = Manager