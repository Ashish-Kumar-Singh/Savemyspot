// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        window.location = 'home.html';
    } else {
        // window.location = 'index.html';
    }
  });

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(error.Message);

  });

});
  
