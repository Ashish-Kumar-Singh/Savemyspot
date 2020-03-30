
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCvBERMdzRZe-mJKO3Qch2fsqX_ea-2EKM",
  //   authDomain: "savemy-spot.firebaseapp.com",
  //   databaseURL: "https://savemy-spot.firebaseio.com",
  //   projectId: "savemy-spot",
  //   storageBucket: "savemy-spot.appspot.com",
  //   messagingSenderId: "992890459850",
  //   appId: "1:992890459850:web:8ee35a0e8cb7c728718633",
  //   measurementId: "G-43CWYBLZS6"
  // };
  // firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  //Get Elements
  const user_email = document.getElementById('email');
  const user_password = document.getElementById('password');

      const email = user_email.value;
      const pass  = user_password.value;


      const create  = auth.createUserWithEmailAndPassword(email, pass);
      create.catch( e => console.log(e.message));
