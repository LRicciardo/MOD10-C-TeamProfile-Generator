const Manager = require("../lib/manager");

const manager = new Manager(12345, "Test Name", "Name.Test@co.org", "999-999-9999");
test("test Manager constructor values", () => {
  expect(manager.id).toBe(12345);
  expect(manager.name).toBe("Test Name");
  expect(manager.email).toBe("Name.Test@co.org");
  expect(manager.officeNumber).toBe("999-999-9999");
});
describe("getPhone", () => {
  const manager = new Manager(12345, "Test Name", "Name.Test@co.org", "999-999-9999");
  expect(manager.getPhone()).toBe("999-999-9999");
});
describe("getRole", () => {
  const manager = new Manager(12345, "Test Name", "Name.Test@co.org", "999-999-9999");
    expect(manager.getRole()).toBe("Manager");
});