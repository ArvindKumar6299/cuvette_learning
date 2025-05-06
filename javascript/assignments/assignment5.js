// //1. Hoisting

// //Hoisting simply means calling a function or variable before declaring it.

// var numver;
// numver = 234;

// console.log(numver);
// arvind();

// numver = 234;

// function arvind(){
//     numver++;
//     console.log(numver);
// }

// //2. higher order function that atakes a callback function as an argument

// //passing function as arument
// function photograph(profile){
//   return profile();
// }
// photograph(()=>{
//  console.log("It's arvind profile image!")
// })

// //function taking another function as argument and parameter

// function fun1(){
//     return function(){
//         console.log("hello dude!")
//     }
// }
// let insidefun = fun1();
// insidefun();


// //3. create a closure that returns a function with access to its own scope.


// function arvind(){
//     let knowldgeSkills = ["HTML","CSS","JavaScript","Reactjs","Nodejs"];
//     function skills(){
//         console.log(knowldgeSkills);
//     }
//     return skills;
// }
// let learningSkills = arvind();
// learningSkills();







const arvind = (someone)=>{
    console.log("Hlllo mai aa gya gyes");
    someone();  //call function - which is passed in parameter 
}

const details = ()=>{
    console.log("just work hard mr.arvind!")
}

arvind(details);