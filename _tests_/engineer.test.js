const Engineer = require("../lib/engineer");

test("test Engineer constructor values", () => {
  const engineer = new Engineer(12345, "Test Name", "Name.Test@co.org", "TestGithub");
  expect(engineer.id).toBe(12345);
  expect(engineer.name).toBe("Test Name");
  expect(engineer.email).toBe("Name.Test@co.org");
  expect(engineer.github).toBe("TestGithub");
});
describe("getGithub", () => {
  const engineer = new Engineer(12345, "Test Name", "Name.Test@co.org", "TestGithub");
  expect(engineer.getGithub()).toBe("TestGithub");
});
describe("getRole", () => {
  const engineer = new Engineer(12345, "Test Name", "Name.Test@co.org");
    expect(engineer.getRole()).toBe("Engineer");
});