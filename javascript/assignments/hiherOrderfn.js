//Write a JavaScript code snippet to double each number in the given array and log the resulting array to the console

let digits = [1,2,3,4,5];

// using map methods

let newContainer = digits.map((digit)=>{
    return digit*2;
})
console.log(newContainer);

// //filter testing - return only those elements on conditon applicable
// let numbers = [2,9,3,7,4,1];
// let testing2 = numbers.filter((number)=>{
//     return number>5;
// })
// console.log(testing2);

// //reduce to add all array elemnts and return into new array

// let testing3 = numbers.reduce((total,number)=>{
//    return total+=number;
// })

// console.log(testing3);