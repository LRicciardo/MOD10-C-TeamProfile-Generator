const Intern = require("../intern");

const intern = new Intern(12345, "Test Name", "Name.Test@co.org","Test U");
test("test Intern constructor values", () => {
  expect(intern.id).toBe(12345);
  expect(intern.name).toBe("Test Name");
  expect(intern.email).toBe("Name.Test@co.org");
  expect(intern.schoolName).toBe("Test U");
  expect(getRole(intern)).toBe("Intern");
});