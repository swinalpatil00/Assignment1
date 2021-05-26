var message="hello world";
var split=message.split("");
var reverse=split.reverse();
var join=reverse.join("");
document.write(join);
document.write("<br>");

if(message == join){
document.write("Given string is palindrome");

}
else{
	document.write("Given string is not palindrome");
}