const main = document.querySelector("main");
const menu = document.querySelector(".menu");
const menuButton = document.querySelector("#menu-button");

menuButton.addEventListener("click", function(){
    main.style.display = "none";
    menu.style.display = "block";
})