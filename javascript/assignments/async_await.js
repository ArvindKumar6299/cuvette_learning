//Promise
const promisefun = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Helllo");
    },2000);
});



promisefun.then((message)=>{
    console.log(message);
})


//async/await example

async function fetchData(){
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);

}

fetchData();





















// let data = {
//     name:"Arvind Yadav",
//     age:23,
//     email:"arvindkumar6299697165@gmail.com"
// }

// let arvind = (data)=>{
//      const {name,age,email} = data;
//      console.log(`This data belongs to Mr. ${data.name}`);
//      console.log(name,age,email);
//      return data;
// }
// // arvind(data);


// async function Goals(){
//     let info = await arvind(data);
//     console.log(info);
// }
// Goals();





// let projects = (x,y)=>{
//     return x*y;
// }
// // projects(23,8);

// async function projectData(){
//    let details =   await projects(23,9);
//    console.log(details);
// }

// projectData();