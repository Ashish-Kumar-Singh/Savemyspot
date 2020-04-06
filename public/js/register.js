// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
      user.sendEmailVerification().then(function() {
        // Email sent.
        document.getElementById("result").innerHTML = "Please check your email in order to verify"
      }).catch(function(error) {
        // An error happened.
      });
        
    } else {
        // window.location = 'index.html';
    }
  });
  function checkBreachedPassword() {
    var password = document.getElementById("signup-password-1").value;
    var passwordDigest = new Hashes.SHA1().hex(password);
    var digestFive = passwordDigest.substring(0, 5).toUpperCase();
    var queryURL = "https://api.pwnedpasswords.com/range/" + digestFive;
    var checkDigest = passwordDigest.substring(5, 41).toUpperCase();
    var result;
  
  $.ajax({
      url: queryURL,
      type: 'GET',
      async: false,
      success: function(res) {
        if (res.search(checkDigest) > -1){
          result = false;
          strength = false;
          document.getElementById("result").innerHTML = "Choose a stronger password"
        } else {
          result = true;
          strength = true;
          document.getElementById("result").innerHTML = ""
        }
      }
    });
    return result;
  }
  try{
    const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password_1 = signupForm['signup-password-1'].value;
  const password_2 = signupForm['signup-password-2'].value;
  strength = checkBreachedPassword();
  if(strength){
    if(password_1 == password_2){
      password=password_1
      try{
        
        // sign up the user
        auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.

          var errorCode = error.code;
          document.getElementById("result").innerHTML = "Unable to register"
          console.log(error.Message);
        });
    }
    catch(err){
      console.log(err);
      document.getElementById("result").innerHTML = "Unable to register"
    }
    }
    else{
      document.getElementById("result").innerHTML = "Passwords do not match"
    }
  }
  else{
    document.getElementById("result").innerHTML = "Please choose a stronger password"
  }


});
  }
  catch(err){
    console.log(err);
  }
