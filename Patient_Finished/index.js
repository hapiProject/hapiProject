  
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAE_uR792SUX30lHlcDVfCEiBlvuyc1OFI",
    authDomain: "hapi-ae003.firebaseapp.com",
    databaseURL: "https://hapi-ae003.firebaseio.com",
    projectId: "hapi-ae003",
    storageBucket: "hapi-ae003.appspot.com",
    messagingSenderId: "863055207384"
  };
  firebase.initializeApp(config);

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnSignIn = document.getElementById('btnSignIn');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');



//attach a clickEvent to login button
btnSignIn.addEventListener('click', e => {
    //get email and password fields
    const email = txtEmail.value;
    const pass = txtEmail.value;
    const auth = firebase.auth();
    //Then sign in
   var promise =  auth.signInWithEmailAndPassword(email, pass);//send off to firebase authentication
   promise.catch(e => console.log(e.message));
    
});


//add click event to sign up button
btnSignUp.addEventListener('click', e => {
    //should check for email
    const email = txtEmail.value;
    const pass = txtEmail.value;
    const auth = firebase.auth();
    //Then sign in
   var promise =  auth.createUserWithEmailAndPassword(email, pass);//send off to firebase authentication
   promise.catch(e => alert(e.message));
    
    
});

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      //the user is logged in
      var user = firebase.auth().currentUser;
      var current = user.uid;
    var messagesRef = firebase.database().ref('Staff').child(current);
    // messagesRef.push(current);
    
    var email = txtEmail.value;
    saveMessage(email, email);

    function saveMessage(email, username){

        messagesRef.set({
         
          email: email,
          username: username
         
         
        });
    }


    }
  });

