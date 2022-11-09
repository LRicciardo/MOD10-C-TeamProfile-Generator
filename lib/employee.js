//  Define an employee

class Employee {
    constructor (id, name, email) {
        this.id = id,
        this.name = name,
        this.email = email
    }

    getRole() {return "Employee"}
}

module.exports = Employee