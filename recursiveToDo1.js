// Write a recursive function that given a number returns the sum of integers
//  from 1 to that number
function rSigma(num){
    if(num === 1)
        return 1;
     return num + rSigma(num - 1);

}
num = 5;
console.log(rSigma(num))

function rFact(num){
    if(num === 1)
        return 1;
     return num * rFact(num - 1);

}
num = 3;
console.log(rFact(num))