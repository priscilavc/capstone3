/* Posts Page JavaScript */

"use strict";

function SendPost() {

  let loginData = getLoginData();

  let myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", 
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3MzcxODUxNCwiZXhwIjoxNjczODA0OTE0fQ.znjss6C2dROfoAPWxUayRbEuoh45gxDrIXfhiB3ppUc",
loginData.token);

let raw = JSON.stringify({
  text: document.getElementById("getPost").value,
});

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

function GetAllPost() {
  let displayPost = document.getElementById('displayPost');
  let loginData = getLoginData();

  let myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", 
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3MzcxODUxNCwiZXhwIjoxNjczODA0OTE0fQ.znjss6C2dROfoAPWxUayRbEuoh45gxDrIXfhiB3ppUc"
  + loginData.token);

  let raw = "";

  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://microbloglite.herokuapp.com/api/posts?limit=1000&offset=0", requestOptions)
    .then(response => response.json())
    .then(result => {
      for(let i = 0; i < result.length; i++) {
        let postInfo = `${result[i].username} <br> ${result[i].createdAt} <br> ${result[i].text} <br>`;
        Element.innerHTML += postInfo + "<br>";
      }
    })
    
  }
GetAllPost();


//Pre-made code from starter template of project provided by REmsey
// let myHeaders = new Headers();
  // myHeaders.append(
  //   "Authorization",
  //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3MzM3Mjc1NiwiZXhwIjoxNjczNDU5MTU2fQ.4i8jrN6NXBa3C_9YUTCaYz6Fkz8kkKLUFNnNCLQPhFY"
  // );
  // myHeaders.append("Content-Type", "application/json");

  // let raw = JSON.stringify({
  //   text: "This is a post about JavaScript",
  // });

  // let requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  // };

  // let myresults = document.getElementById("results");
  // fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => (myresults.innerHTML += result))
  //   .catch((error) => console.log("error", error));