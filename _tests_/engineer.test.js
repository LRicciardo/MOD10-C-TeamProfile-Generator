const Engineer = require("../engineer");

const engineer = new Engineer(12345, "Test Name", "Name.Test@co.org", "TestGithub");
test("test Engineer constructor values", () => {
  expect(engineer.id).toBe(12345);
  expect(engineer.name).toBe("Test Name");
  expect(engineer.email).toBe("Name.Test@co.org");
  expect(engineer.github).toBe("TestGithub");
  expect(getRole(engineer)).toBe("Engineer");
});