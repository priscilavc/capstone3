const form = document.getElementById('registrationForm');

function registerUser(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;

    event.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImlhdCI6MTY3MzYzNjQwMywiZXhwIjoxNjczNzIyODAzfQ.UqiYDT72durosYvJAPLiEEPGWArDEhsBNlbd-Wjkcfc");

    let raw = JSON.stringify({
    "username": username,
    "fullname": password,
    "password": cpassword,
    });

    let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://microbloglite.herokuapp.com/api/users", requestOptions)
    .then(response => response.text())
    .then(result => 
        {
            alert(result);
            console.log(result);
        })
        
    }
    form.addEventListener('submit' , registerUser)