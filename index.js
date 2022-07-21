const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/employee")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const employeeArray = []
// Initial Function that allows you to pick a team template
pickYourTeam();
function pickYourTeam () {
  inquirer
    .prompt ([
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
      internTemplate ();
    } else {
      buildYourTeam()
    }
    })
};
// Manager template function
function managerTemplate() {
  inquirer
    .prompt ([
      {
        type: 'input',
        message: 'What is managers name?',
        name: 'manager-name'
      },
      {
        type: 'input',
        message: 'What is managers id?',
        name: 'manager-id'
      },
      {
        type: 'input',
        message: 'What is managers email?',
        name: 'manager-email'
      },
      {
        type: 'input',
        message: 'What is managers office number?',
        name: 'manager-office-number'
      },
      // getRole???
    ])

    .then((data) => {
    console.log(data)
    // Console log: 'manager-name': '1','manager-id': '2','manager-email': '3','manager-office-number': '4'
    // How do i put inquerer data to new manager?

    // const newManager = new Manager(???)
    // employeeArray.push(newManager)

    // right synthax?
    return pickYourTeam();

    })
    }
// Engineer Template Function
function engineerTemplate() {
  inquirer
    .prompt ([
      {
        type: 'input',
        message: 'What is engineers name?',
        name: 'engineer-name'
      },
      {
        type: 'input',
        message: 'What is engineers id?',
        name: 'engineer-id'
      },
      {
        type: 'input',
        message: 'What is engineers email?',
        name: 'engineer-email'
      },
      {
        type: 'input',
        message: 'What is engineers GitHub?',
        name: 'engineer-github'
      },
      // getGithub???
    ])

    .then((data) => {
    console.log(data)
    // Console log: 'engineer-name': '1','engineer-id': '2','engineer-email': '3','engineer-github': '4'
    // How do i put inquerer data to new engineer?

    // const newEngineer = new Engineer(???)
    // employeeArray.push(newEngineer)

    // right synthax?
    return pickYourTeam();

    })
    }
// Intern template function
  function engineerTemplate() {
    inquirer
      .prompt ([
        {
          type: 'input',
          message: 'What is interns name?',
          name: 'intern-name'
        },
        {
          type: 'input',
          message: 'What is interns id?',
          name: 'intern-id'
        },
        {
          type: 'input',
          message: 'What is interns email?',
          name: 'intern-email'
        },
        {
          type: 'input',
          message: 'What is interns school?',
          name: 'intern-school'
        },
        // getSchool???
      ])
  
      .then((data) => {
      console.log(data)
      // Console log: 'intern-name': '1','intern-id': '2','intern-email': '3','intern-school': '4'
      // How do i put inquerer data to new intern?
  
      // const newIntern = new Intern(???)
      // employeeArray.push(newIntern)
  
      // right synthax?
      return pickYourTeam();
  
      })
      }
// Put it all together function
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function buildYourTeam(){
// HOW DO I TAKE INFORMATION FROM EMPLOYEEARRAY AN STICK IT INSIDE MY HTML TEMPATES. DO I NEED 1 TEMPLATE OR MORE? dO I HARD CODE TEPLATES OR MAKE DYNAMIC?

// .then((data) => {
//   console.log(data)

//   fs.writeFile('index.html', (createReadme(data)), (err) =>
//   err ? console.log(err) : console.log("Success!")
//   )
//     });

}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Create Html function

function createHtml(data) {
  return  `
  HTML TEMPLATE
  `
};