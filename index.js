const inquirer = require('inquirer');
const fs = require('fs');
// const Employee = require("./lib/Employee")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
// An array that will contain all team member object data
const employeeArray = []
// Initial Function that allows you to pick a team template
pickYourTeam();
function pickYourTeam() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Pick your team.',
        name: 'team',
        choices: ['Manager', 'Engineer', 'Intern', 'I am done']
      }
    ])
    .then((data) => {
      console.log(data)

      if (`${data.team}` === 'Manager') {
        managerTemplate();
      } else if (`${data.team}` === 'Engineer') {
        engineerTemplate();
      } else if (`${data.team}` === 'Intern') {
        internTemplate();
      } else {
        buildYourTeam();
      }
    })
};
// Manager template function
function managerTemplate() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is managers name?',
        name: 'managerName'
      },
      {
        type: 'input',
        message: 'What is managers id?',
        name: 'managerId'
      },
      {
        type: 'input',
        message: 'What is managers email?',
        name: 'managerEmail'
      },
      {
        type: 'input',
        message: 'What is managers office number?',
        name: 'managerOfficeNumber'
      },
    ])

    .then((data) => {
      console.log(data)
// Creating new subclass NewManager, fill it with user input, and push object data into eployees array
      const newManager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber)
      employeeArray.push(newManager)
      console.log(employeeArray)
// Return to team picker function after all answers are finished
      return pickYourTeam();
    })
};
// Engineer Template Function
function engineerTemplate() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is engineers name?',
        name: 'engineerName'
      },
      {
        type: 'input',
        message: 'What is engineers id?',
        name: 'engineerId'
      },
      {
        type: 'input',
        message: 'What is engineers email?',
        name: 'engineerEmail'
      },
      {
        type: 'input',
        message: 'What is engineers GitHub?',
        name: 'engineerGithub'
      },
    ])

    .then((data) => {
      console.log(data)
// Creating new subclass NewEngineer, fill it with user input, and push object data into eployees array
const newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
employeeArray.push(newEngineer)
console.log(employeeArray)
// Return to team picker function after all answers are finished
      return pickYourTeam();
    })
};
// Intern template function
function internTemplate() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is interns name?',
        name: 'internName'
      },
      {
        type: 'input',
        message: 'What is interns id?',
        name: 'internId'
      },
      {
        type: 'input',
        message: 'What is interns email?',
        name: 'internEmail'
      },
      {
        type: 'input',
        message: 'What is interns school?',
        name: 'internSchool'
      },
    ])

    .then((data) => {
      console.log(data)
// Creating new subclass NewIntern, fill it with user input, and push object data into eployees array
const newIntern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
employeeArray.push(newIntern)
console.log(employeeArray)
// Return to team picker function after all answers are finished
      return pickYourTeam();
    })
}
// Put it all together function
function buildYourTeam() {
// This template loop will go through entire employeeArray and will append each team-mate subclass object to it's own HTML template
// htmlTemplate variable as an empty string
  var htmlTemplate = ""
// loop through entire array length
  for (var i = 0; i < employeeArray.length; i++) {
// for every object in the array "employeeArray[i]" insert template literal key value data from Employee class "name,id,email and get role method"
    htmlTemplate += `
    <div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${employeeArray[i].name}</li>
    <li class="list-group-item">ID: ${employeeArray[i].id}</li>
    <li class="list-group-item">Email: ${employeeArray[i].email}</li>
    <li class="list-group-item">Role: ${employeeArray[i].getRole()}</li>
  `
// On top of general Employee class properties, manager needs to have it's unique property added, "getOfficeNumber" method
    if (employeeArray[i].getRole() === "Manager") {
      htmlTemplate += `<li class="list-group-item">OfficeNumber:${employeeArray[i].getOfficeNumber()}</li>`
// On top of general Employee class properties, engineer needs to have it's unique property added, "getGithub" method
    } else if (employeeArray[i].getRole() === "Engineer") {
      htmlTemplate += `<li class="list-group-item">${employeeArray[i].getGithub()}</li>`
// On top of general Employee class properties, intern needs to have it's unique property added, "getSchool" method
    } else {
      htmlTemplate += `<li class="list-group-item">${employeeArray[i].getSchool()}</li>`
     }
    htmlTemplate += `</ul>
    </div>`}
// general HTML frame where templates will be inserted
    var html = `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
      </head>
      <body>
      <header class="bg-danger text-center">
        <h1>Hello, world!</h1>
        </header>
        <main class="container d-flex flex-wrap">
        ${htmlTemplate}

        </main>
      </body>
    </html>`
// Creating HTML file with fs module
    fs.writeFile('index.html', html, (err) =>
    err ? console.log(err) : console.log("Success!")
    )
};


