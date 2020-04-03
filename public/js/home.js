
// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
      db.collection('notes').onSnapshot(snapshot => {
        setupGuides(snapshot.docs);
      }, err => console.log(err.message));
    } else {
         window.location = 'index.html';
    }
  });
 


// sList all notes
const guideList = document.querySelector('.guides');
function setupGuides(data){
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const guide = doc.data();
      const li = `
        <li>
          <div class="collapsible-header  grey lighten-4"> ${guide.title} | ${guide.Module}</div>
          <div class="collapsible-body  white">${guide.content}</div>
        </li>
      `;
      html += li;
    });
    guideList.innerHTML = html
  } else {
    guideList.innerHTML = '<h5 class="center-align">No Notes</h5>';
  }
}


const accountDetails = document.querySelector('.account-details');



//Create Notes
const createForm = document.querySelector('#create-note');
createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  var e = document.getElementById("option");
  var module = e.options[e.selectedIndex].value ;
  db.collection('notes').add({
    title: createForm.title.value,
    Module: module,
    User : auth.currentUser.uid,
    content: createForm.content.value
  }).then(() => {
    // close the create modal & reset form
    createForm.reset();
  }).catch(err => {
    console.log(err.message);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
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
