// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        window.location = 'home.html';
    } else {
        // window.location = 'index.html';
    }
  });

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password-1'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(error.Message);
  });
});