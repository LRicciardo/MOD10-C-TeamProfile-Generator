const Employee = require("../lib/employee");

test("test Employee constructor values", () => {
  const employee = new Employee(12345, "Test Name", "Name.Test@co.org");
  expect(employee.id).toBe(12345);
  expect(employee.name).toBe("Test Name");
  expect(employee.email).toBe("Name.Test@co.org");
});
describe("getRole", () => {
  const employee = new Employee(12345, "Test Name", "Name.Test@co.org");
    expect(employee.getRole()).toBe("Employee");
});