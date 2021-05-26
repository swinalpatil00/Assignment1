var dob=window.prompt("Please enter your birth date in this format DD/MM/YYYY");
var date= Number(dob.substr(0,2));
var month= Number(dob.substr(3,2))-1;
var year= Number(dob.substr(6,4));

var today= new Date();
var age=today.getFullYear()-year;
if(today.getMonth()<month||(today.getMonth()==month && today.getDate()<day)){
	window.location="https://selfregistration.cowin.gov.in";
}
else{
	document.write("you are not appoint for vaccine");
}
