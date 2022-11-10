const Employee = require("./employee");

//  All Manager employees have these elements
class Manager extends Employee {
    constructor (id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber
    }
    getPhone() {return this.officeNumber;}
    getRole() {return "Manager";}
}
module.exports = Manager