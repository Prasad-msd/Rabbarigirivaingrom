/*
console.log("Hello!");
alert("Yooo! Yoo...");
//alert("hi"); comment

//variables
var b="Prasad";
console.log(b);

var num=45;
console.log(num);

age=prompt("Enter ur age...");
name=prompt("Enter name");

document.getElementById("heading").innerHTML = "Hi, "+age+" years old!";

//increment and decrement
num=num+1;
num++;
num--;
num+=3;
console.log(num);

//create
function fun(n) {
    alert("Hi, " + name);
}

fun(name);
*/
function my()
{
    var txt;
    if(confirm("Click something!"))
    {
        txt="confirm";
    }
    else
    {
        txt="cancel";
    }
    document.getElementById("H1").innerHTML = txt;
}