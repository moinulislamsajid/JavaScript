function highestScore() {
var max = scores[0];
for(var i = 1; i<scores.length;i++){
    if(max<scores[i]){
        max = scores[i];
    }

}
return max;

   
}

var scores = [23,12,45,67,89,23,44]
var maxScore = highestScore(scores)
console.log("Maximum value is : "+maxScore);

