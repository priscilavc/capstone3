const form = document.getElementById('registrationForm');

function registerUser(event) {
    const usernameInput = document.getElementById('username').value;
    const fullNameInput = document.getElementById('fullname').value;
    const passwordInput = document.getElementById('password').value;
    const cpasswordInput = document.getElementById('cpassword').value;

    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "username": usernameInput,
      "fullName": fullNameInput,
      "password": passwordInput,
      "cpassword": cpasswordInput,
        });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://microbloglite.herokuapp.com/api/users", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        window.location.replace("login.html")
      })
      .catch(error => console.log('error', error));


}

form.addEventListener('submit', registerUser);