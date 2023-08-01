var names = ["Ayman Sajid","Samiur Rahman","Mojibur rahman","Rebeka Sultana Pakhi"];
console.log(names)


// shift is opposite of pop 
names.shift();
console.log(names)

// unshift oppsite of push
names.unshift("Ayman Sajid")
console.log(names)
// adding element for place
names.splice(2,0,"Sami","santho");
console.log(names);

// remove element for use splice

names.splice(1,2,3)
console.log(names)

// slice for element soriya neya jai

var new_array = names.slice(1);  // create new array for printing
console.log(new_array)

// sorting is also given an array

var sorted_name = names.sort();
names.reverse();
console.log(sorted_name)

// number sorted
var numbers = [23,56,73,22,56,34,67,76,45];
numbers.sort(function(a,b){
    return a-b;
});
console.log(numbers);
// number sorted

var num = [23,1,23,45,66,54,323,4,45,56]
num.sort(function(x,y){
    return x-y;
});
console.log(num);

// reverse

var reverse =[34,23,56,3,25,68,63,13,45,6]
reverse.sort(function(l,m){
    return m-l;
});
console.log(reverse);
