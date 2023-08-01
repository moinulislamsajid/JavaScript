// create a object with initialization
var student1 = {

    name : "Ayman Sajid",
    age  : 20,
    cgpa : 4,
    lang : ["Java","javaScript","python"]
}

console.log(student1.name)

// Adding constructor

function Student_info(name,age,cgpa,lang){
   this.name = name;
   this.age = age;
   this.cgpa = cgpa;
   this.lang = lang;
   // constructor ar modda function ar body
   this.display = function(){
    console.log(this.name)
    console.log(this.age)
    console.log(this.cgpa)
    console.log(this.lang)
   }
}



var student3 = new Student_info("Ayman Sajid",20,4,["java","Js"]);
student3.display();

