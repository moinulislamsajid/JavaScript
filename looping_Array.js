var number = [12,32,14,54,32]
for(var i = 0;i<5;i++){
    console.log(number[i]);
}


// Array Sum

var num = new Array();
var num1 = parseInt(prompt("How many number : "));
for(var k = 0;k<num1;k++){
    num1[k] = parseInt(prompt("Enter number : "))
}
var sum = 0;
for(var k = 0;k<5;k++){
    sum = sum + num1[k];
}
console.log("Sum of number : "+sum);