const Manager = require("../manager");

const manager = new Manager(12345, "Test Name", "Name.Test@co.org", "999/999-9999");
test("test Manager constructor values", () => {
  expect(manager.id).toBe(12345);
  expect(manager.name).toBe("Test Name");
  expect(manager.email).toBe("Name.Test@co.org");
  expect(manager.phone).toBe("999/999-9999");
  expect(getRole(manager)).toBe("Manager");
});