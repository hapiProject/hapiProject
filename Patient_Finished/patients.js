var config = {
    apiKey: "AIzaSyAE_uR792SUX30lHlcDVfCEiBlvuyc1OFI",
    authDomain: "hapi-ae003.firebaseapp.com",
    databaseURL: "https://hapi-ae003.firebaseio.com",
    projectId: "hapi-ae003",
    storageBucket: "hapi-ae003.appspot.com",
    messagingSenderId: "863055207384"
  };
  firebase.initializeApp(config);

  var Day = "Day";
  var i = 2;

  var patientCounter=2;
  var patientId = "000"+patientCounter;

  

  var array = []; //an array to capture the elements in the snap references

  var p = "Patients";   //just used a variable to find the reference point in firebase
  
  var userinput;
  var userSpecDay;
  const objectName = document.getElementById('name');
  const objectAddress = document.getElementById('address');
  const objectId = document.getElementById('id');
  const objectBlood = document.getElementById('blood');
  const objectCondition = document.getElementById('condition');
  
  
  const recordBlood = document.getElementById('recordBlood');
  const recordBreath = document.getElementById('recordBreath');
  const recordPain = document.getElementById('recordPain');
  
  
  /*
  * how this function works:
  it takes in a user input which is a string that defines
  where the rootRef stops within the database. ex, if userinput
  is 0001, it will find the child 0001 and the variable will
  start at this point of the database. (line 54). We can 
  display the values through the 'on' function of this reference. (line 56)
  the following lines snap the values into a table.
  */
  
  
  function personChange (userinput) {
      var Address;    //attributes that will be displayed as part of person change
      var Name; 
      var Blood;
      var Condition  ;

      var DOB;
    this.userinput = userinput;
  
    var rootRef = firebase.database().ref().child('Patients').child(userinput).child('Patient Information'); //reference to part of firebase
  
    rootRef.on('value',snap => {
  
  
    objectId.innerHTML = snap.val().DOB;
    objectName.innerHTML = snap.val().Name;
    objectAddress.innerHTML = snap.val().Address;
    objectBlood.innerHTML = snap.val().BloodType;
    objectCondition.innerHTML = snap.val().Condition;
  
     });
  
  }
  
  function dayChange(userSpecDay) {
  
    this.userSpecDay = userSpecDay;
      var rootRefRec = firebase.database().ref().child('Patients').child(userinput).child('Records').child(userSpecDay); 
  
      rootRefRec.on('value',snap => {
  
      recordBlood.innerHTML =snap.val().BloodPressureLevels;
      recordBreath.innerHTML = snap.val().Comments;
      recordPain.innerHTML = snap.val().PainLevels;
  
      var recordDay = document.getElementById('day');
      recordDay.innerHTML=userSpecDay;
  
  
    //$('#recordTable').append("<tr><td>"+showBlood+ "</td><td>"+showBreath+"</td><td>"+showPain+"</td></tr>");
  });
    }
  
  /*
    Just need to figure out how to get the userSpecDay to this function
  */
    function sendRecord (){
      var rootRefRec = firebase.database().ref().child('Patients').child(userinput).child('Records').child(userSpecDay);
  
      var breathForm = document.getElementById('breath');
      var painForm = document.getElementById('pain');
      var updateBreath = breathForm.value;
      var updatePain = painForm.value;
  
      console.log(userSpecDay);
    
      rootRefRec.push().set({
        Breath :updateBreath,
        Pain   :updatePain
      });
      
  
  
    }
  
    function newRecord () {
       var rootRefRec = firebase.database().ref().child('Patients').child(userinput).child('Records');
       rootRefRec.push().set({
        Blood: "N/A",
        Pain:"N/A"
  
  
       })
 
  
       //need to append the html to show a new day
       //
  
    }

    function createDay() {
        i++;
        var rootRefRec = firebase.database().ref().child('Patients').child(userinput).child('Records');
        rootRefRec.child("Day" + i).push("");
        
    }

    function createPatient () {

      var rootRefRec = firebase.database().ref().child('Patients');
    
      

      this.patientCounter = patientCounter;
      patientId= "000"+patientCounter;
      console.log(patientId);
      rootRefRec = firebase.database().ref().child('Patients').child(patientId);
     // rootRefRec.child("Patient Information");
      rootRefRec.child("Patient Information").set({
        UserId : patientId,
        Address: "N/A",
        BloodType:"N/A",
        DOB: "N/A",
        Condition: "N/A",
        Name: "N/A"

      });
      rootRefRec.child("Records").child("Day1").set({
        BloodPressureLevels:"",
        Comments:"",
        Date:"",
        PainLevels:""

      });


patientCounter++;

    }

function createRecord() {
  var i = 10;
      var rootRefRec = firebase.database().ref().child('Patients').child(userinput).child('Records');
       rootRefRec.child("Day"+i).set({
        BloodPressureLevels:"",
        Comments:"",
        Date:"",
        PainLevels:""

      });

}











//   firebase.auth().onAuthStateChanged(firebaseUser => {
//     if(firebaseUser){
//       //the user is logged in
//       var user = firebase.auth().currentUser;
    
//     }
//   });

