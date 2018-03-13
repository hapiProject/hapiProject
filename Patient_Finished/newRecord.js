var config = {
    apiKey: "AIzaSyAE_uR792SUX30lHlcDVfCEiBlvuyc1OFI",
    authDomain: "hapi-ae003.firebaseapp.com",
    databaseURL: "https://hapi-ae003.firebaseio.com",
    projectId: "hapi-ae003",
    storageBucket: "hapi-ae003.appspot.com",
    messagingSenderId: "863055207384"
  };
  firebase.initializeApp(config);


function sendNewRecord(Day) {
var idVal = document.getElementById('userId').value;
 var day = "Day"+document.getElementById('Day').value;

 var bloodLevel = document.getElementById('BPL').value;
 var dateLevel = document.getElementById('Day').value;

 var painLevel = document.getElementById('PL').value;
 var comments= document.getElementById('Comments').value;

  var ref = firebase.database().ref().child('Patients').child(idVal).child("Records").child(day);

   ref.update({

   BloodPressureLevels:bloodLevel,
   Date:dateLevel,
   PainLevels:painLevel,
   Comments:comments


  });

}