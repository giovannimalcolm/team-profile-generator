const fs = require('fs'); //add fs to the library

//HTML portions to later be put together
const endHTML = `
       </container>
       <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
       integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
       crossorigin="anonymous"></script>
       <script src="/index.js" async defer></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
       </body>
       </html>
       `


const baseHTML = `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>My Team</title>
        <meta name="description" content="Professional Team Profiles">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
       <header class ="header">My Team</header>
       <container class = 'cards'>`

//initial array to store HTML pieces and declaration of variables to use to insert inputs in respective employee cards 
const fullHTML = [baseHTML];
employeeName = ''
idNum = ``
email = ``
officeNumber = ``

//function to render employee cards. takes object array of all inputted employee information and loops thru to identify each object, 
//extract its values, and input them into the respective card for HTML use
var renderCard = (answers) => {

  for (i = 0; i < answers.length; i++) {

    var employeeName = answers[i].name
    var { id } = answers[i]
    var { email } = answers[i]

    if (answers[i].constructor.name == 'Manager') {
      var { officeNumber } = answers[i]

      const managerCard = `
        <div class="card" style="width: 18rem;">
                 <div class="card-body">
                   <h5 class="card-title">Manager</h5>
                   <p class="card-text">
                     <i class="fas fa-mug-hot"></i>
                     ${employeeName}
                   </p>
                 </div>
                 <div class = 'list-container'>
                 <ul class="list-group details">
                   <li class="list-group-item">ID: ${id}</li>
                   <li class="list-group-item">Email: ${email}</li>
                   <li class="list-group-item">Office Number: ${officeNumber}</li>
                 </ul>
                </div>
                </div>`

      fullHTML.push(managerCard)

    }
    else if (answers[i].constructor.name == 'Intern') {
      var { school } = answers[i]

      const internCard = `

      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <p class="card-text">
          <i class="fas fa-user-graduate"></i>
             ${employeeName}
        </p>
      </div>
      <div class = 'list-container'>
      <ul class="list-group details">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">School: ${school}</li>
      </ul>
      </div>
      </div>
      `

      fullHTML.push(internCard)
    }
    else if (answers[i].constructor.name == 'Engineer') {
      var { github } = answers[i]

      const engineerCard = `

    <div class="card" style="width: 18rem;">
             <div class="card-body">
               <h5 class="card-title">Engineer</h5>
               <p class="card-text">
                 <i class="fas fa-glasses"></i>
                ${employeeName}
               </p>
             </div>
             <div class = 'list-container'>
             <ul class="list-group details">
               <li class="list-group-item">ID: ${id}</li>
               <li class="list-group-item">Email: ${email}</li>
               <li class="list-group-item">Github: ${github}</li>
             </ul>
            </div>
            </div>`

      fullHTML.push(engineerCard)
    }
  }
  fullHTML.push(endHTML)
  finalHTML = fullHTML.join('')
  fs.writeFileSync('./dist/index.html', finalHTML, (err) => { err ? console.error(err) : console.info(`Something went wrong`) }) //create HTML file and give error if needed
}

module.exports = renderCard;
