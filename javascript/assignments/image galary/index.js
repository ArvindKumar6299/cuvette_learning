const thumbnails = document.querySelectorAll(".thumbnail");
const fullsize = document.querySelector(".fullsize");
const expandView = document.querySelector("#expandedView");
const expandImg = document.querySelector("#expandedImg")


thumbnails.forEach((thumbnail)=> {
    thumbnail.addEventListener("click",()=>{
       expandView.style.display = 'block';
       expandImg.src = thumbnail.src;
        
    })
});


// clicking on  the image takes close

expandView.addEventListener('click',()=>{
    expandView.style.display = "none";
})