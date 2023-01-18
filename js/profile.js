"use strict";

function CreateAPost() {

  let loginData = getLoginData();
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Authorization", 
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3NDA4MTAzMCwiZXhwIjoxNjc0MTY3NDMwfQ.kct8CBZoZATqP1b5TVBpLXA0De5p006BmfA4Cjm4eu0" +
  loginData.token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    text: document.getElementById("getPost").value
  });

  var requestOptions = {
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
CreateAPost();
