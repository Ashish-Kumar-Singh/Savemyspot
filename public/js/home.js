
// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        // window.location = 'home.html';
    } else {
        window.location = 'index.html';
    }
  });



// logout
function logout(){
    try{
        auth.signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }
    catch(err){
      console.log(err);
    }
    
}
