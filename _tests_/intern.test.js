const Intern = require("../lib/intern");

const intern = new Intern(12345, "Test Name", "Name.Test@co.org","Test U");
test("test Intern constructor values", () => {
  expect(intern.id).toBe(12345);
  expect(intern.name).toBe("Test Name");
  expect(intern.email).toBe("Name.Test@co.org");
  expect(intern.schoolName).toBe("Test U");
});
describe("getSchool", () => {
  const intern = new Intern(12345, "Test Name", "Name.Test@co.org","Test U");
  expect(intern.getSchool()).toBe("Test U");
});
describe("getRole", () => {
  const intern = new Intern(12345, "Test Name", "Name.Test@co.org","Test U");
    expect(intern.getRole()).toBe("Intern");
});