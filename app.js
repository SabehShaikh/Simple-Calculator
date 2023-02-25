// SIMPLE CALCULATOR 
var num1 = +prompt("Enter your num")
var opt = prompt("Enter opt")

var num2 = +prompt("Enter your num")

var result;

if (opt == "+") {
    result = num1 + num2;

}
if (opt == "-") {
    result = num1 - num2;
}
if (opt == "*") {
    result = num1 * num2;
}
if (opt == "/") {
    result = num1 / num2;
}
alert(result);




// if(false){
// console.log("working")
// }