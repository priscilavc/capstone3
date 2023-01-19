// /* Posts Page JavaScript */

// "use strict";

// function GetAllPost() {
//   let displayPosts = document.getElementById('displayPost');
//   let loginData = getLoginData();

//   var myHeaders = new Headers();
//   myHeaders.append("accept", "application/json");
//   myHeaders.append("Authorization", 
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3NDA2ODI4MywiZXhwIjoxNjc0MTU0NjgzfQ.NhlmBFNUn4be5nXWZmOTluYDF2rlGVqm9LcZ-qkmvz0" + loginData.token);

//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
//   };

//   fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
    
//   }
// GetAllPost();



// Pre-made code from starter template of project provided by REmsey
// let myHeaders = new Headers();
//   myHeaders.append(
//     "Authorization",
//     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3MzM3Mjc1NiwiZXhwIjoxNjczNDU5MTU2fQ.4i8jrN6NXBa3C_9YUTCaYz6Fkz8kkKLUFNnNCLQPhFY"
//   );
//   myHeaders.append("Content-Type", "application/json");

//   let raw = JSON.stringify({
//     text: "This is a post about JavaScript",
//   });

//   let requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//   };

//   let myresults = document.getElementById("results");
//   fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
//     .then((response) => response.text())
//     .then((result) => (myresults.innerHTML += result))
//     .catch((error) => console.log("error", error));



function createApost() {
  const token = getLoginData()
  console.log(token.token)
  /*Causious */
  let myHeaders = newHeaders();
  myHeaders.append("Authorization", "bearer", + token.token);
  myHeaders.append("Content-type", "Application/json");


  let raw = JSON.stringify({
    text:document.getElementById("postArea").value
  });
  console.log(raw)

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}

