function isLeapYear(year){
    const remainder = year % 4;
    if(remainder == 0){
        console.log('Your year is leap year',year);
     }
    else{
        console.log('Your year is not a leap year',year);
     }
 }
isLeapYear(1933);


// function isLeapYear(year){
//     const remainder = year % 4;
//     if(false){
//       return true;
//     }
//     else{
//         return false;
//     }
// }
// const isMyYearLeapYear = isLeapYear(1933);
// console.log('my year:', isMyYearLeapYear);

// const isherYearLeapYear = isLeapYear(1960);
// console.log('my year:', isherYearLeapYear);