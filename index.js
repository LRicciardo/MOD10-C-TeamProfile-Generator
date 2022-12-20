const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const fs = require("fs");
// const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const renderHtml = require("./src/html");

// Team array will hold the team Members
let teamName = null;
let teamPurpose = null;
let team = [];
let empId = [];

const startQuery = [
  {
    type: "input",
    name: "teamName",
    message: "What is the name of the Team?"
  },
  {
    type: "input",
    name: "teamPurpose",
    message: "What is the purpose of the Team?"
  }
];
const startBuild = async () => {
  return await inquirer
    .prompt(startQuery)
    .then((answers) => {
      teamName = answers.teamName;
      teamPurpose = answers.teamPurpose;
      buildTeam();
    })
    .catch((err) =>
      err ? console.log(err) : console.log(`Successful startBuild`)
    );
};
const choices = ["Manager", "Engineer", "Intern", "DONE"];
let empRole = null;

const roleQuery = [
  {
    type: "list",
    name: "role",
    message:
      "What Team Member do you want to add? (Select 'DONE' when finished)",
    choices: choices
  }
];

const displayDone = () => {
  console.log("(**************************************)");
  console.log("(* Finished entering the team members *)");
  console.log("(*    Building the HTML page          *)");
  console.log("(**************************************)");
}

const buildTeam = async () => {
  return await inquirer
    .prompt(roleQuery)
    .then((answers) => {
      if (answers.role === "DONE") {
        displayDone();
        writeToFile(
          "./dist/index.html",
          `${renderHtml(team, teamName, teamPurpose)}`
        );
      } else {
        empRole = answers.role;
        // takes "Manager" out of choices
        if (answers.role === "Manager") {
          choices.shift();
        }
        buildEmployee();
      }
    })
    .catch((err) =>
      err ? console.log(err) : console.log(`Successful buildTeam`)
    );
};

const employeeQuery = [
  {
    type: "input",
    name: "name",
    message: "Enter Employee Name:"
  },
  {
    type: "input",
    name: "id",
    message: "Enter 5-digit Employee Id :",
    validate(value) {
      const pass = value.match(
        /^(\d{5})$/
      );
      if (pass) {
        let idx = empId.indexOf(value);
        if (idx == -1) {
          empId.push(value);
          return true;
        };
        return "Please enter a unique 5-digit employee id";
      };
      return "Please enter a 5-digit employee id";
    }
  },
  {
    type: "input",
    name: "email",
    message: "Enter Employee Email:",
    validate(value) {
      const pass = value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (pass) {
        return true;
      }
      return "Please enter a valid email";
    }
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter Team Manager Office Number:",
    when(answer) {
      return empRole === "Manager";
    },
    validate(value) {
      const pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass) {
        return true;
      }
      return "Please enter a valid office number";
    }
  },
  {
    type: "input",
    name: "github",
    message: "Enter Engineer GitHub user name:",
    when(answer) {
      return empRole === "Engineer";
    }
  },
  {
    type: "input",
    name: "schoolName",
    message: "Enter Intern school name:",
    when(answer) {
      return empRole === "Intern";
    }
  }
];

const buildEmployee = async () => {
  console.log("  ");
  console.log(` >>>>>  Enter ${empRole} Team Member <<<<<`);
  return await inquirer
    .prompt(employeeQuery)
    .then((answer) => {
      if (empRole === "Manager") {
        const { id, name, email, officeNumber } = answer;
        let manager = new Manager(id, name, email, officeNumber);
        team.push(manager);
      }
      if (empRole === "Engineer") {
        const { id, name, email, github } = answer;
        let engineer = new Engineer(id, name, email, github);
        team.push(engineer);
      }
      if (empRole === "Intern") {
        const { id, name, email, schoolName } = answer;
        let intern = new Intern(id, name, email, schoolName);
        team.push(intern);
      }
      buildTeam();
    })
    .catch((err) =>
      err ? console.log(err) : console.log(`Successful runQuery`)
    );
};

const writeToFile = async (fileName, data) => {
  return await writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log(`Successfully created ${fileName}`)
  );
};
const init = () => {
  startBuild();
};

// Function call to initialize app
init();
