let btn =document.querySelector(".icon");
let icon=btn.querySelector(".fa-bars")
let x = document.getElementById("myLinks");
let menu= false;

btn.onclick=function (){
    if (x.style.display === "block") {
      x.style.display = "none";
      icon.classList.replace("fa-times","fa-bars");
    } else {
      x.style.display = "block";
      icon.classList.replace("fa-bars","fa-times")
    }
   };
     
btn.addEventListener('click', () => {
    if(!menuOpen) {
      icon.classList.replace("fa-times","fa-bars");
      menu = true;
    } else {
      icon.classList.replace("fa-bars","fa-times")
      menu = false;
     }
   });