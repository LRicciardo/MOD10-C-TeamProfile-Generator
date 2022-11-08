const Employee = require("../employee");
test("getRole", () => {
    it("should create an object with a name and age if provided valid arguments", () => {
      const employee = new Employee("Sarah", 3);

      expect(employee.name).toEqual("Sarah");
      expect(Employee.age).toEqual(3);
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Employee();

      expect(cb).toThrow();
    });

    it("should throw an error if not provided an age", () => {
      const cb = () => new Employee("Sarah");
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Employee(3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is not a number", () => {
      const cb = () => new Employee("Sarah", "2");
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is less than 0", () => {
      const cb = () => new Employee("Sarah", -1);
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      expect(cb).toThrowError(err);
    });
  });
});