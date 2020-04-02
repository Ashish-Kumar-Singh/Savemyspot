// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        // window.location = 'home.html';
    } else {
        window.location = 'index.html';
    }
  })


// logout
function logout(){
    auth.signOut();
}
