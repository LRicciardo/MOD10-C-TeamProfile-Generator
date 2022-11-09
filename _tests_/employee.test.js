const Employee = require("../employee");

const employee = new Employee(12345, "Test Name", "Name.Test@co.org");
test("test Employee constructor values", () => {
  expect(employee.id).toBe(12345);
  expect(employee.name).toBe("Test Name");
  expect(employee.email).toBe("Name.Test@co.org");
  expect(getRole(employee)).toBe("Employee");
});
