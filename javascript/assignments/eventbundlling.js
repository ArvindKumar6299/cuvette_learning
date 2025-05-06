//event bubbling

// Event Bubbling is a concept in the DOM  
// we use e.stopPropagation() 
// to stop propagation to targeted element to parent and ancestor 
// elements in the DOM  tree until it gets to the root (HTML) element.

//Event Delegation
// Event Delegation is a technique used in javascript to handle events
//  efficiently, espeially when dealing with multiple Elements.

div.addEventListner('click',(event)=>{
        if(event.target.tagName === "BUTTON"){
            console.log("something");
        }
        if(event.target.id === "button1"){
            console.log(event.target.innerText);
        }
})


const jhon ={
    name:"jhon",
    detail:"someting"
}
const karen ={
    name:"karen",
    detail:"someting"
}

function description(male,jaipur){
    console.log(`soething${name}, ${male} ,,,${jaipur} and ${detail}`);
}

// const johnDesh = description.bind(jhon);
// johnDesh();

description.apply(jhon,[male, jaipur])