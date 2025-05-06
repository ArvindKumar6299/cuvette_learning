
let clouser;
{
    let value ="xyz";
    
    clouser = ()=>{
        console.log(value);
    }
}
clouser();

let aka;
{
    let myobj = {
        name:"dfas",
        age:23,
    }
    aka=()=>{
        return myobj;
    }
}
console.log(aka());


function greeting(){
    let nummber = 131;
    function greetNo(){
        console.log(nummber);
    }
    return greetNo;
}
let totalgreeting = greeting();
totalgreeting();










// //map()
// const numbers = [2,3,4,1,4];

// const Num_Map = numbers.map((number)=>{
//     return number*number;
// })
// console.log(Num_Map);

// //filter()
// const filter_num = numbers.filter((number)=>{
//     return number%2==0;
// })
// console.log(filter_num);


// //reduce()
// const total = numbers.reduce((total,number)=>{
//     return total+=number;
// })

// console.log(total);

// //destructure object into variables


// const user = {
//     name:"xyz",
//     email:"xyz@gmail.com",
//     age:23
// }

// const {name,email,age} = user;

// console.log(name,email,age);

// //spread
// const arr = [2,4,5,2];

// let new_array = [...arr,23,11,99,88];
// console.log(new_array);