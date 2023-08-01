// create a constructor
function student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa= cgpa;
    this.lang= lang;
// for print adding function 
    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }

}

// create an objects
var student1 = new student("Ayman Sajid",20,4,["java","javaScript","c"])
student1.display();