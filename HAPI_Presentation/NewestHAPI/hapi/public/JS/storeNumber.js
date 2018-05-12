function sendPhone(userinput){
  

var rootRef = firebase.database().ref().child('Patients').child(userinput).child('Patient Information').child('Contact');


rootRef.on('value',snap => {

  var phone = snap.val().NextOfKinPhone;


  
 
  var num = document.getElementById('number');
  goGlobal(phone);

  //
  var testObject = { 'phone': phone};


  });
  


}
function sendEmail(userinput){

	// sendPhone(userinput);
  

var rootRef = firebase.database().ref().child('Patients').child(userinput).child('Patient Information').child('Contact');


rootRef.on('value',snap => {


  var email = snap.val().NextOfKinEmail;
  var phone = snap.val().NextOfKinPhone;
  var name = snap.val().NextOfKinName;
  
  
 
  var num = document.getElementsByName('email');

  goGlobalEmail(name,email,phone);




  });
  


}

function goGlobal(phone){
  


 localStorage.setItem("phone",phone);



}
function goGlobalEmail(name,email,phone){
	localStorage.setItem('Kin-name',name);
	localStorage.setItem('Kin-email',email);
	localStorage.setItem('Kin-phone',phone);
  console.log(name);
  console.log(email);
  console.log(phone);
}

