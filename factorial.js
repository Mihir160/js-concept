// function sumofNumbers(number){
//     let sum = 0;
//     for(let i = 1; i<= number; i++){
//         sum = sum + i;
//         console.log(i,sum);
//     }
//    return sum;
// }

// sumofNumbers(7);

// multiplication

// function multiplicationofNumbers(number){
//     let sum = 1;
//     for(let i = 1; i<= number; i++){
//         sum = sum * i;
//         console.log(i,sum);
//     }
//    return sum;
// }
// multiplicationofNumbers(7);

//decrememting 
function factorial(number){
    let result = 1;
    for(let i= number; i>=1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}

const number = 6;
const fact =  factorial(number);
console.log('factorial of:', number ,fact);