// create a function
function square(){
    var num = 10;
    var res = num*num;
    document.write(res+"<br/>");
}

// called the function
 square();

 // create function with parameter

 function Shape(base,height){
    var res = 0.5 * base * height;
    document.write(res+"<br/>");
 }

 // calling a function with parameter
 Shape(40,20);

 // create a function with parameter and return keyword

 function Addition(num1,num2){
    var res1 = num1+num2;
    return res1;
 }

 // calling a function with parameter and resurn keyword
var x = Addition(20,20); // create a variable to print the return value
document.write(x);
