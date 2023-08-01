// IIFE(Immediately Invokeable FUnction Expression)  >>> Auto matic called the function
(function display(){
    console.log("Hello");
})();

(function Addition(num1,num2){
    var res = num1+num2;
    console.log(res)
})(10,20);