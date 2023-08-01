function heightValue(names){
var high_Score = [0][0];
var high_Score = [0][1];
for(var i =1;i<names.length;i++){
    if (high_Score<names[i][1]) {
        high_Score = names[i][1];
        high_Score = names[i][0];
        
    }
}
return high_Score;

}

var names = [
    ["Ayman Sajid",10],
    ["Samiur Sakib",20],
    ["Mohi",25],  
    ["Mojibur Rahman",45]

]
var name = heightValue(names);
console.log(name)
