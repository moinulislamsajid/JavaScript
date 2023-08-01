var names = new Array(3);

names[0] = "Mojibur Rahman";
names[1] = "Ayman sajid";
names[2] = "Samiur Rahman sakib";

//console.log(names[0]);

// When print all the element of arrays
console.log(names);
console.log(names.length)

// Array Initialization and declaring in one step

var names2 = ["Rebeka Sultana Pakhi","Mujibur Rahman","Rasida Akther","Habibur Rahman",10];
console.log(names2);
// Adding Element For Array
names2.push("Moinul Islam Sajid");
console.log(names2);

//remove the element in Array
names2.pop();  // remove last index element
console.log(names2);

// Adding two array in concat function
var final_value = names.concat(names2);
console.log(final_value);


