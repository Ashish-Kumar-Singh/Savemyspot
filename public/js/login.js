// listen for auth status changes
auth.onAuthStateChanged(user => {
  ver = user.emailVerified;
    if (user) {
      if(ver){
        window.location = 'home.html';
      }
      else{
        document.getElementById("result").innerHTML = "Please verify your email";
      }
    } else {
        // window.location = 'index.html';
        document.getElementById("result").innerHTML = "Please verify your email";
    }
  });

// login
try{
  const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // get user info
  var email = loginForm['login-email'].value;
  var password = loginForm['login-password'].value;
  try{
      // log the user in
  auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    document.getElementById("result").innerHTML = "EmailId/Password Incorrect"
    var errorCode = error.code;
    console.log(error.Message);
  });
  }
  catch(err){}
});
}
catch(err){
  console.log(err);
}