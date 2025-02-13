/* auth.js provides LOGIN-related functions */

"use strict";

const api = "https://microbloglite.herokuapp.com";


// You can use this to get the login data of the logged-in user (if any). 
// Returns either an object including the username and token,
// or an empty object if the visitor is not logged in.
function getLoginData () {
    return JSON.parse(window.localStorage.getItem("login-data")) || {};
}


// You can use this to see whether the current visitor is logged in. 
// Returns either `true` or `false`.
function isLoggedIn () {
    const loginData = getLoginData();
    return Boolean(loginData.token);
}


// This function is already being used in the starter code for the
// landing page, in order to process a user's login. READ this code,
// and feel free to re-use parts of it for other `fetch()` requests
// you may need to write.
function login (loginData) {
    // POST /auth/login
    const options = { 
        method: "POST",
        headers: {
            // This header specifies the type of content we're sending.
            // This is required for endpoints expecting us to send
            // JSON data.
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    };

    return fetch(api + "/auth/login", options)
        .then(response => response.json()
        )
        .then(loginData => {
            console.log(loginData);
            window.localStorage.setItem("login-data", JSON.stringify(loginData));
            window.location.assign("/posts.html");  // redirect
        });
}


// This is the `logout()` function you will use for any logout button
// which you may include in various pages in your app. Again, READ this
// function and you will probably want to re-use parts of it for other
// `fetch()` requests you may need to write.
function logout () {
    const loginData = getLoginData();

    // GET /auth/logout
    const options = { 
        method: "GET",
        headers: { 
            // This header is how we authenticate our user with the
            // server for any API requests which require the user
            // to be logged-in in order to have access.
            // In the API docs, these endpoints display a lock icon.
            Authorization: `Bearer ${loginData.token}`,
        },
    };

    fetch(api + "/auth/logout", options)
        .then(response => response.json())
        .then(data => console.log(data))
        .finally(() => {
            // We're using `finally()` so that we will continue with the
            // browser side of logging out (below) even if there is an 
            // error with the fetch request above.

            window.localStorage.removeItem("login-data");  // remove login data from LocalStorage
            window.location.assign("/");  // redirect to landing page
        });
}
