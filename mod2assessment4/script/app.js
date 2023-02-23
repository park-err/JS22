// DOM
const guess = document.querySelector("#guess");
const status = document.querySelector("#status");
const answer = Math.floor(Math.random() * 1001);
let lastGuess = 0;

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    let nextGuess = guess.value;
    let dif = Math.abs(nextGuess - answer);
    if (lastGuess == 0) {
        if (dif > 1) {
            status.innerHTML = "On Fire!";
            document.querySelector("body").style.backgroundColor = "darkred";
            document.querySelector("body").style.color = "white";
        }
        if (dif > 10) {
            status.innerHTML = "Warm";
            document.querySelector("body").style.backgroundColor = "orangered";
            document.querySelector("body").style.color = "black";
        }
        if (dif > 50) {
            status.innerHTML = "Cold";
            document.querySelector("body").style.backgroundColor = "blue";
            document.querySelector("body").style.color = "white";
        }
        if (dif > 100) {
            status.innerHTML = "Ice Cold";
            document.querySelector("body").style.backgroundColor = "steelblue";
            document.querySelector("body").style.color = "black";
        }
        if (dif > 250) {
            status.innerHTML = "Freezing";
            document.querySelector("body").style.backgroundColor = "lightblue";
            document.querySelector("body").style.color = "black";
        }
    } else {
        let hotOrCold = Math.sign(lastGuess - dif);
        if (hotOrCold > 0) {
            status.innerHTML = "Hotter";
            document.querySelector("body").style.backgroundColor = "red";
            document.querySelector("body").style.color = "white";
        }
        if (hotOrCold < 0) {
            status.innerHTML = "Colder";
            document.querySelector("body").style.backgroundColor = "steelblue";
            document.querySelector("body").style.color = "black";
        }
        if (hotOrCold > 0 && dif < 5) {
            status.innerHTML = "Burning!";
            document.querySelector("body").style.backgroundColor = "darkred";
            document.querySelector("body").style.color = "white";
        }
        if (hotOrCold > 0 && dif > 20) {
            status.innerHTML = "Warmer";
            document.querySelector("body").style.backgroundColor = "orangered";
            document.querySelector("body").style.color = "black";
        }
    }
    if (dif == 0) {
        status.innerHTML = "You Win!";
        document.querySelector("body").style.backgroundColor = "magenta";
        document.querySelector("body").style.color = "black";
    }
    lastGuess = dif;
    guess.value = "";
})