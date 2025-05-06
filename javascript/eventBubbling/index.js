const test = ()=>{
  console.log(this);
}
test();

const book ={
    name:"workalohic",
    authour:"arvind kumar yadav",
    
}
const book2 ={
    name:"book2",
    authour:"arvind yadav",
    description: function(){
        console.log(`The name of the book is ${this.name} and its authour is ${this.authour}`);
    }
}

function details(){
       console.log(`The name of the book is ${this.name} and its authour is ${this.authour}`);

}


const book1 = details.bind(book);
book1();
















// const button = document.querySelector("button");
// const span = document.querySelector("span");
// const div = document.querySelector("div");

// button.addEventListener("click", (e) => {
//      e.stopPropagation()
//      button.innerHTML = "Arvind already submitedd your form"
//     console.log("button clicked");
// })

// span.addEventListener("click",()=>{
//     console.log("span clicked");
    
// })

