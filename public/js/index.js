firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location = 'home.html'; //After successful login, user will be redirected to home.html
  }
});
function signup(){
  var user_email = document.getElementById('email').value;
  var user_password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(user_email, user_password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}
