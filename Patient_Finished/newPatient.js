var config = {
    apiKey: "AIzaSyAE_uR792SUX30lHlcDVfCEiBlvuyc1OFI",
    authDomain: "hapi-ae003.firebaseapp.com",
    databaseURL: "https://hapi-ae003.firebaseio.com",
    projectId: "hapi-ae003",
    storageBucket: "hapi-ae003.appspot.com",
    messagingSenderId: "863055207384"
  };
  firebase.initializeApp(config);


function sendNewPatient(userID) {
var idVal = document.getElementById('userId').value;

 var nameVal = document.getElementById('Name').value;
 var addressVal = document.getElementById('Address').value;
  var bloodVal= document.getElementById('Blood').value;
  var conditionVal = document.getElementById('Condition').value;
 var DOBVal = document.getElementById('DOB').value;
  var ref = firebase.database().ref().child('Patients').child(idVal).child("Patient Information");

   ref.update({

   	Name:nameVal,
  	UserId:idVal,
  	Address:addressVal,
  	BloodType:bloodVal,
  	Condition:conditionVal,
  	DOB:DOBVal

  });









// var query = firebase.database().ref().child("Patient Information").orderByKey();
// query.once("value")
//   .then(function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
       
        
        
//       // key will be "ada" the first time and "alan" the second time
//       var key = childSnapshot.key;
//       // childData will be the actual contents of the child
//       var childData = childSnapshot.val();
//       var name_val = childSnapshot.val().Name;//the value eoin
//       console.log(name_val);

   
//   });
// });
}