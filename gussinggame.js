var number_of_won=0;
var number_of_lost=0;
for(var i =1;i<=5;i++){
    var guss_number = parseInt(prompt("Enter any number 1 to 10 : "))
var random_num = Math.floor(Math.random()*10)+1;
if(guss_number==random_num){
    console.log("We Have won the game!");
    number_of_won++;
}
else{
    console.log("We Have loss the game this time");
    console.log("Random number is : "+random_num)
    number_of_lost++;

}
}
document.write("Number of won : "+number_of_won);
document.write("<br>")
document.write("Number of lost : "+number_of_lost);
