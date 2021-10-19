const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const inquirer = require('inquirer');
const fs = require("fs");
let manager;
let team = [];

function getManager(){
    inquirer
    .prompt([
        {
        type: 'input',
        message: `What is your manager's name?`,
        name: 'manName',
        },
        {
        type: 'input',
        message: `What is your manager's id?`,
        name: 'id',
        },
        {
        type: 'input',
        message: `What is your manager's email?`,
        name: 'email',
        },
        {
        type: 'input',
        message: `What is your manager's office number?`,
        name: 'officeNum',
        },
    ])
    .then((response) => {
        manager = new Manager(response.manName, response.id, response.email, response.officeNum);
        mainMenu();
    });
}

function mainMenu(){
    function createIntern(){
    inquirer
    .prompt([
        {
        type: 'input',
        message: `What is your intern's name?`,
        name: 'manName',
        },
        {
        type: 'input',
        message: `What is your intern's id?`,
        name: 'id',
        },
        {
        type: 'input',
        message: `What is your intern's email?`,
        name: 'email',
        },
        {
        type: 'input',
        message: `What is your intern's school?`,
        name: 'school',
        },
    ])
    .then((response) => {
        team.push(new Intern(response.manName, response.id, response.email, response.school));
        mainMenu();
        return;
    });
    }

    function createEngineer(){
    inquirer
    .prompt([
        {
        type: 'input',
        message: `What is your engineer's name?`,
        name: 'manName',
        },
        {
        type: 'input',
        message: `What is your engineer's id?`,
        name: 'id',
        },
        {
        type: 'input',
        message: `What is your engineer's email?`,
        name: 'email',
        },
        {
        type: 'input',
        message: `What is your engineer's github?`,
        name: 'github',
        },
    ])
    .then((response) => {
        team.push(new Intern(response.manName, response.id, response.email, response.github));
        mainMenu();
        return;
    });
    }

    function createPage(){
        var teamSec;
        for(var i = 0; i < team.length; i++){
            if(team[0].getRole() == "Engineer"){
                teamSec += 
                `<section class="member">
                    <h1>Engineer</h1>
                    <h1>Name: ${team[i].name}</h1>
                    <h2>id: ${team[i].id}</h2>
                    <h2>Email: ${team[i].email}</h2>
                    <h2>Github: ${team[i].github}</h2>
                </section>`
            }
            else{
                teamSec += 
                `<section class="member">
                    <h1>Intern</h1>
                    <h1>Name: ${team[i].name}</h1>
                    <h2>id: ${team[i].id}</h2>
                    <h2>Email: ${team[i].email}</h2>
                    <h2>School: ${team[i].school}</h2>
                </section>`
            }
        }
        var skelly = 
        `<html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Team Generator</title>
        </head>
        <body>
            <section class="member">
                <h1>${manager.name}</h1>
                <h2>${manager.id}</h2>
                <h2>${manager.email}</h2>
                <h2>${manager.officeNumber}</h2>
            </section>`+teamSec+`</body>
      </html>`


        fs.writeFile('index.html', skelly, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
        );
    }
    inquirer
    .prompt([
        {
            type: "list",
            name: "decision",
            message: "Who would you like to add now?",
            choices: ["Intern", "Engineer", "My team is finished"],
        },
    ])
    .then((response) => {
        switch(response.decision) {
            case "Intern":
                createIntern();
                return;
            case "Engineer":
                createEngineer();
                return;
            case "My team is finished":
                createPage();
                return;
        }
    });
}
getManager();
