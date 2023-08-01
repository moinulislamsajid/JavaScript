function Max_Array(){
    var max = number[0]
    for(var i =1;i<number.length;i++){
        if(max < number[i]){
            max = number[i];
        }
    }
    return max;

}

var number = [23,54,67,34,23,77,98]
var final_max = Max_Array(number);
console.log("Maximum number is : "+final_max)
