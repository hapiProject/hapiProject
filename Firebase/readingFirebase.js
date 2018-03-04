
var b_arr = [];

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCBEE5Jz0LAcOexH3RIi-5bxQj3jrG30x4",
    authDomain: "web-quickstart-3acfd.firebaseapp.com",
    databaseURL: "https://web-quickstart-3acfd.firebaseio.com",
    projectId: "web-quickstart-3acfd",
    storageBucket: "web-quickstart-3acfd.appspot.com",
    messagingSenderId: "1045924432344"
  };
  firebase.initializeApp(config);


var array = []; //an array to capture the elements in the snap references

var p = "Patients";   //just used a variable to find the reference point in firebase




var userinput;
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
    var id;    //attributes that will be displayed as part of person change
    var name; 
    var blood;
    var condition  
  this.userinput = userinput;

  var rootRef = firebase.database().ref().child('Patients').child(userinput); //reference to part of firebase

  rootRef.on('value',snap => {


  objectId.innerHTML = snap.val().ID;
  objectName.innerHTML = snap.val().name;
  objectAddress.innerHTML = snap.val().address;
  objectBlood.innerHTML = snap.val().blood;
  objectCondition.innerHTML = snap.val().condition;



   });

}

function dayChange(userSpecDay) {

  
    var rootRefRec = firebase.database().ref().child('Patients').child(userinput).child('Records').child(userSpecDay); 

    rootRefRec.on('value',snap => {

    recordBlood.innerHTML =snap.val().Blood;
    recordBreath.innerHTML = snap.val().Breath;
    recordPain.innerHTML = snap.val().Pain;

    var recordDay = document.getElementById('day');
    recordDay.innerHTML=userSpecDay;


  //$('#recordTable').append("<tr><td>"+showBlood+ "</td><td>"+showBreath+"</td><td>"+showPain+"</td></tr>");
});



  }

  function send (){
    var rootRefRec = firebase.database().ref().child('Patients').child(userinput).child('Records').child('Day1');

    var breathForm = document.getElementById('breath');
    var painForm = document.getElementById('pain');
    var updateBreath = breathForm.value;
    var updatePain = painForm.value;

  
    rootRefRec.push().set(messageBreath,updatePain);

  }

