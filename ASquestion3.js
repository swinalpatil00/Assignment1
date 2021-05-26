function ftoc(fahrenheit){
var ftempt=fahrenheit;
ctempt=(ftempt-32)*5/9
document.write("fahrenheit to celsius temperatue is :"+ctempt);
document.write("<br>")
}
function ctof(celsius){
var ctempt=celsius;
ftempt=9*ctempt/5+32
document.write("celsius  to fahrenheit temperatue is :"+ftempt);
}

ftoc(window.prompt("Enter fahrenheit value :"));
ctof(window.prompt("Enter celsius value :"));