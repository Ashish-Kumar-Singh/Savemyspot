
// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        // db.collection("notes").doc(user.uid).collection('posts').get().then(function(querySnapshot){
        //     querySnapshot.forEach(function(doc){
        //         console.log(doc.id)
        //     });
        // });
      db.collection('notes').doc(user.uid).collection('posts').onSnapshot(snapshot => {
        setupGuides(snapshot.docs);
      }, err => console.log(err.message));
    } else {
         window.location = 'index.html';
    }
  });
 

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
    db.collection('notes').doc(auth.currentUser.uid).collection('posts').add({
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

// sList all notes
const guideList = document.querySelector('.guides');
function setupGuides(data){
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const post = doc.data();
          const li = `
          <li>
            <div class="collapsible-header  grey lighten-4"> ${post.title} | ${post.Module}</div>
            <div class="collapsible-body  white">${post.content}</div>
          </li>
        `;
        html += li;

    });
    guideList.innerHTML = html
  } else {
    guideList.innerHTML = '<h5 class="center-align">No Notes</h5>';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});
// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});