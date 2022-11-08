const inquirer = require("inquirer");
// const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// Team array will hold the team Members
let teamName = null;
let team = [];

const startQuery = [{
    type: "input", 
    name: "team",
    message: "What is the name of the Team?",
    
}];
const startBuild = async () => {
    return await inquirer
    .prompt(startQuery)
    .then((answers)=> {
        teamName = answers.team;
        console.log("teamName");
        console.log(teamName);
        console.log(typeof teamName);
        buildTeam();
           })
    .catch((err) =>
    err ? console.log(err) : console.log(`Successful startBuild`))  
}
const choices = ["Manager","Engineer","Intern","DONE"];
let teamIsDone = false;
let teamRole = null;
     
const roleQuery = [{
        type: "list", 
        name: "role",
        message: "What Team Member do you want to add? (Select 'DONE' when finished)",
        choices: choices,
    }];
const buildTeam = async () => {
    return await inquirer
        .prompt(roleQuery)
        .then((answers)=> {
            if (answers.role === "DONE"){
                teamIsDone = true;
                createTeamPage();
            } else { 
                teamRole = answers.role;
                teamIsDone = false;
                if(answers.role === "Manager") {
                 
                    choices.shift();
                }
                buildEmployee(); 
            }
        } )
        .catch((err) =>
        err ? console.log(err) : console.log(`Successful startBuild`))  
    }

   
const employeeQuery = [{
        type: "input", 
        name: "name",
        message: "Enter Employee Name:",
        
    },
    {
        type: "input", 
        name: "id",
        message: "Enter Employee Id:",

    },
    {
        type: "input", 
        name: "email",
        message: "Enter Employee Email:",
    },
    {
        type: "input", 
        name: "phone",
        message: "Enter Team Manager Office Number:",
        when(answer) {
            console.log(answer, "line 83")
            return (teamRole === "Manager")
        },
        validate(value) {
            const pass = value.match(
              /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
            );
            if (pass) {
              return true;
            }
            return 'Please enter a valid phone number';
        },
    },
    {
        type: "input", 
        name: "github",
        message: "Enter Engineer GitHub user name:",
        when(answer) {
            return (teamRole === "Engineer")
        },
    },
    {
        type: "input", 
        name: "schoolName",
        message: "Enter Intern school name:",
        when(answer) {
            return (teamRole === "Intern")
        },
    },
]

const buildEmployee = async() => {
    return await inquirer
    .prompt(employeeQuery)
    .then((answer) => { 
        // console.log("line 119");
        // console.log(answer);
        // console.log(typeof answer);
        if (teamRole === "Manager") {
            const {id, name, email, phone} = answer;
            let manager = new Manager(id, name, email, phone);
            team.push(manager);
        }
        if (teamRole === "Engineer") {
            const {id, name, email, github} = answer;
            let engineer = new Engineer(id, name, email, github);
            team.push(engineer);
        }
        if (teamRole === "Intern") {
            const {id, name, email, schoolName} = answer;
            let intern = new Intern(id, name, email, schoolName);
            team.push(intern);
        }
        console.log("line 137 team array");
        console.log(team);
        buildTeam();
    })
    .catch((err) =>
    err ? console.log(err) : console.log(`Successful runQuery`))

}

function writeToFile(fileName,data) {
    writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log(`Successfully created $(fileName)`)
  );
}

const testTeam = [{
    Engineer: {
      id: '362',
      name: 'Eng Human',
      email: 'Human.Eng@co.org',
      role: 'Engineer',
      github: 'EHuman'
    }},{
    Manager: {
      id: '123',
      name: 'Manager Person',
      email: 'Person.Mgr@co.org',
      role: 'Manager',
      phone: '1234567890'
    }},{
    Engineer: {
      id: '442',
      name: 'Eng Thinker',
      email: 'Thinker.Eng@co.org',
      role: 'Engineer',
      github: 'EThinker'
    }},{
    Intern: {
      id: '989',
      name: 'Intern Doer',
      email: 'Doer.Int@co.org',
      role: 'Intern',
      schoolName: 'Georgia Tech'
    }}
  ]

const createTeamPage = () => {
    for (member of team) {
        console.log(member)
    }
}

const init = () => {
    // startBuild();
    team = testTeam;
    createTeamPage();
  };
  
  // Function call to initialize app
  init();