// DOM
const image = document.querySelector("#image");
const bee = document.querySelector("#bee");
const dog = document.querySelector("#dog");
const space = document.querySelector("#space");
const text = document.querySelector("#par");
const changeText = document.querySelector("#change-text");
const beeImage = "./img/bee.jpg";
const dogImage = "./img/dog.jpg";
const spaceImage = "./img/space.jpg";

// event listeners
bee.addEventListener("click", function() {
    console.log("working...........");
    image.src = beeImage;
    bee.style.backgroundColor = "darkblue";
    dog.style.backgroundColor = "blue";
    space.style.backgroundColor = "blue";
});
dog.addEventListener("click", function() {
    console.log("working...........");
    image.src = dogImage;
    bee.style.backgroundColor = "blue";
    dog.style.backgroundColor = "darkblue";
    space.style.backgroundColor = "blue";
});
space.addEventListener("click", function() {
    console.log("working...........");
    image.src = spaceImage;
    bee.style.backgroundColor = "blue";
    dog.style.backgroundColor = "blue";
    space.style.backgroundColor = "darkblue";
});
changeText.addEventListener("click", function() {
    console.log("working...........");
    text.innerHTML = "You changed the text. How did you do that?";
})