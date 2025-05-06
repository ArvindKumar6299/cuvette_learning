const feature_flag = document.querySelector("#feature-flag");
const textarea = document.querySelector("#textarea");

// firstLoad is a function that runs when the page first loads.
const firstLoad = ()=>{
   if(window.localStorage.getItem("auto-saveData")){
    textarea.value = window.localStorage.getItem("auto-saveData");
   }
   savedatatoLocalStorage();
}

firstLoad();

function savedatatoLocalStorage(){
    setInterval(()=>{
        let inputData = textarea.value;
        if(feature_flag.checked){
            window.localStorage.setItem("auto-saveData",inputData);
        }
    },1000);
}

