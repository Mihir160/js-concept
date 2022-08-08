 function getSumarray(numbers){
     let sum = 0;
     for(let i=0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
     }
     return sum;
 }


// odd number find

function getOddnumber(numbers){
      const oddNumbers = [];
        for(let i=0; i< numbers.length; i++){
            const index = i;
            const element =  numbers[index];
            if(element % 2 !== 0){
                console.log(index,element);
                oddNumbers.push(element);
                
            }
        }
        return oddNumbers;
}

const myNumber = [12, 65, 45, 78, 32, 45, 91];
// getSumarray(myNumber);
const oddNumbers = getOddnumber(myNumber);
console.log(oddNumbers);
const oddnumbersum =  getSumarray(oddNumbers);
console.log('odd number sum:',oddnumbersum);