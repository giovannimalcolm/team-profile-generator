var renderCard = (answers) => {

    if (answers.officeNumber){
        ///add the manager card 
    }
    

   

}

module.exports = renderCard;



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
        `


const managerCard = ` 
<container class = 'cards'>
<div class="card" style="width: 18rem;">
 <div class="card-body">
   <h5 class="card-title">Manager</h5>
   <p class="card-text">
     <i class="fas fa-mug-hot"></i>
        ${answers.name}
   </p>
 </div>
 <div class = 'list-container'>
 <ul class="list-group details">
   <li class="list-group-item">ID:${answers.ID} </li>
   <li class="list-group-item">Email:${answers.email}</li>
   <li class="list-group-item">Office Number:${answers.officeNumber}</li>
 </ul>
</div>
</div>
`


const engineerCard = `

<<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Manager</h5>
  <p class="card-text">
    <i class="fas fa-mug-hot"></i>
       ${answers.name}
  </p>
</div>
<div class = 'list-container'>
<ul class="list-group details">
  <li class="list-group-item">ID:${answers.ID} </li>
  <li class="list-group-item">Email:${answers.email}</li>
  <li class="list-group-item">Office Number:${answers.officeNumber}</li>
</ul>
</div>
</div>
`

const internCard = `

<div class="card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">Manager</h5>
           <p class="card-text">
             <i class="fas fa-mug-hot"></i>
                ${answers.name}
           </p>
         </div>
         <div class = 'list-container'>
         <ul class="list-group details">
           <li class="list-group-item">ID:${answers.ID} </li>
           <li class="list-group-item">Email:${answers.email}</li>
           <li class="list-group-item">Office Number:${answers.officeNumber}</li>
         </ul>
        </div>
        </div>
`