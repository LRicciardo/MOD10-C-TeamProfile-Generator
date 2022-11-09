//  this holds the html literals needed to build the html


  const htmlMgr = `
              <div class="card bg-light border-danger mx-2">
                <h3 class="card-title bg-danger text-light text-center">
                  <i class="fa-solid fa-puzzle-piece"></i>
                  ${role}
                </h3>
                <div class="card-body">
                  <p class="card-text">
                    <i class="fa-solid fa-user"></i>
                    Name: 
                    <span>${name}</span>
                  </p>
                  <p class="card-text">
                    <i class="fa-solid fa-hashtag"></i>
                    EID: 
                    <span>${id}</span>
                  </p>
                  <p class="card-text">
                    <i class="fa-regular fa-at"></i> 
                    Email: 
                    <span>${email}</span>
                  </p>
                  <p class="card-text">
                    <i class="fa-solid fa-square-phone"></i> 
                    Office Number: 
                    <span>${phone}</span>
                  </p>
                </div>
               </div>
            `

const htmlEng = `            
            <div class="card bg-light border-primary mx-2">
            <h3 class="card-title bg-primary text-light text-center">
                <i class="fa-solid fa-puzzle-piece"></i>
                Engineer
            </h3>
            <div class="card-body">
                <p class="card-text">
                <i class="fa-solid fa-user"></i>
                Name: 
                <span>${name}</span>
                </p>
                <p class="card-text">
                <i class="fa-solid fa-hashtag"></i>
                EID: 
                <span>${id}</span>
                </p>
                <p class="card-text">
                <i class="fa-regular fa-at"></i> 
                Email: 
                <span>${email}</span>
                <span><a href="mailto:${email}">${email}</a></span>
                </p>
                <p class="card-text">
                <i class="fa-brands fa-github"></i>
                GitHub username: 
                <span><a href="https://github.com/${github}?tab=repositories">${github}</a></span>
                </p>
            </div>
            </div>
        `

const htmlInt = `            
            <div class="card bg-light border-warning mx-2">
                <h3 class="card-title bg-warning text-light text-center">
                    <i class="fa-solid fa-puzzle-piece"></i>
                    Intern
                </h3>
                <div class="card-body">
                    <p class="card-text">
                    <i class="fa-solid fa-user"></i>
                    Name: 
                    <span>${name}</span>
                    </p>
                    <p class="card-text">
                    <i class="fa-solid fa-hashtag"></i>
                    EID: 
                    <span>${id} </span>
                    </p>
                    <p class="card-text">
                    <i class="fa-regular fa-at"></i> 
                    Email: 
                    <span>${email}</span>
                    </p>
                    <p class="card-text">
                    <i class="fa-solid fa-chalkboard-user"></i> 
                    SchoolName: 
                    <span id="intSchool">${school}</span>
                    </p>
                </div>
            </div>
        `
const renderMainHtml = (team, teamName, teamPurpose) => {
    return 
`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    />
    <!-- <link rel="icon" type="x-icon" href="./assets/images/clockface.png"> -->
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>Team Profile</title>
  </head>
  
  <body>
    <div class="jumbotron bg-success text-center text-white">

      <h1 class="display-4 font-weight-bold">${teamName} Profile Page</h1>
      <p class="display-5 font-weight-bolder font-italic">${teamPurpose}</p>
    </div>
    <div class="container-fluid d-flex">
      <div class="container justify-content-center">
          <div class="row">    
            ${renderTeamCards(team)}
         </div>
      </div>
    </div>   
    <!-- <script src="./assets/js/homepage.js"></script> -->
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.5/dayjs.min.js"></script>
    <script src="./assets/js/script.js"></script>
  </body>
</html>
`}
module.exports = htmlBase