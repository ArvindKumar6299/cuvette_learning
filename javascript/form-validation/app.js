const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");


// on clicking the submit button form data will be submitted

form.addEventListener('submit',(e)=>{
    
     const nameValue = name.value.trim();    //trim() --  using to remove empty spaces
     console.log(nameValue);
     const emailValue = email.value.trim();
     const phoneValue = phone.value.trim();
     const passwordValue = password.value.trim();
     if(nameValue==""){
        e.preventDefault();
        alert("please prove name!");
        name.focus();
        return false;  //if this block is getting executed and go out of this block
     }
     if(!isNaN(nameValue)){
        e.preventDefault();
        alert("please prove valid name!");
        name.focus();
        return false;  //if this block is getting executed and go out of this block
     }
     if(emailValue==""){
        e.preventDefault();
        alert("Please provide an email!");
        email.focus();
        return false;
     }
     if(phoneValue==""){
        e.preventDefault();
        alert("Enter phone no.");
        phone.focus();
        return false;
     }
     if(phoneValue.length < 10  || phoneValue.length > 10){
         e.preventDefault();
         alert("please provide valid phone no.");
         phone.focus();
         return false;
     }
     if(passwordValue==""){
        e.preventDefault();
        alert("please enter password");
        password.focus();
        return false;
     }
     if(passwordValue.length <5){
        e.preventDefault();
        alert("password cannot be of only five digit");
        return false;
     }

     alert("data entered successfully")
})