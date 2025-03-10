
function toggleMenu(){
let menu = document.querySelector("#mobile-menu");

if(menu.style.display === "block"){
    menu.style.display = "none";
} 
else {
    menu.style.display = "block"
}
}

let menuIcone = document.querySelector("#menu");
let closeIcone = document.querySelector("#close");

menuIcone.addEventListener("click", function(){
    toggleMenu();
})
closeIcone.addEventListener("click", function(){
    toggleMenu();
})





