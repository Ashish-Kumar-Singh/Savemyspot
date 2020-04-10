"use strict";
// login
try {
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    var email = loginForm['login-email'].value;
    var password = loginForm['login-password'].value;
    if (email != null && password != null) {
      try {
        // log the user in
        auth.signInWithEmailAndPassword(email, password).then(function (user) {
          auth.onAuthStateChanged(user => {
            var ver = user.emailVerified;
            if (user) {
              if (ver) {
                window.location = 'home.html';
              }
              else {
                document.getElementById("result").innerHTML = "Please verify your email";
              }
            } else {
              // window.location = 'index.html';
              document.getElementById("result").innerHTML = "Please verify your email";
            }
          })
        }).catch(function (error) {
          // Handle Errors here.
          document.getElementById("result").innerHTML = "EmailId/Password Incorrect"
          var errorCode = error.code;
        })
      }
      catch (err) {document.getElementById("result").innerHTML = "Error Logging in" }
    }
    else {
      document.getElementById("result").innerHTML = "EmailId/Password field Empty"
    }
  });
}
catch (err) {
  document.getElementById("result").innerHTML = "Error Logging in"
}