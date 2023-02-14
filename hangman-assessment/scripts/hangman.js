// declare and initialize array
let game = ["NOTEBOOK", "LAMP", "MONITOR", "SKULL", "CAT", "SKYRIM", "TAMRIEL", "COOKIE", "NINE", "FORMULA"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let wrongAnswer = true;
let letterGuessed = false;
let lettersUsed = [];
const images = ["./images/02.png", "./images/03.png", "./images/04.png", "./images/05.png", "./images/06.png", "./images/07.png"];
const lettersUsedDisplay = document.querySelector(".letters");
// game setup works fine --steffen
function setup() {
    //alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}

// Add an array of used letters and make it show in the HTML


// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman


document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    letterGuessed = false;
    userLetter = document.getElementById("guess").value;

    // check if letter was already guessed
    for (let i = 0; i < lettersUsed.length; i++) {
        if (lettersUsed[i] == userLetter.toUpperCase()) {
            letterGuessed = true;
            window.alert("Letter already guessed");
        }
    }

    if (!letterGuessed) {
        let wrongAnswer = true;
        output = '';
        document.getElementById("guess").value = ''; //would this reset value to null
    
        for (let c = 0; c < answer.length; c++) {
            // alert(letters[c]);
            if (userLetter.toUpperCase() == letters[c]) {
                display[c] = userLetter.toUpperCase();
                win--;
                wrongAnswer = false;
            }
    
            output = output + display[c] + ' ';
        }
    
        if (wrongAnswer) {
            attemptsLeft--;
            document.getElementById("hangman").src = images[images.length - (attemptsLeft + 1)];
        }
        
        document.getElementById("word").innerHTML = output;
        output = '';
        if (win < 1) {
            document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
        } else if (attemptsLeft < 1) {
            document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
        } else {
            document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
        }

        // tracker of letters used
        lettersUsed.push(userLetter.toUpperCase());
        lettersUsedDisplay.innerHTML = lettersUsed.join(" ");
    }

})
//scirpt connected fine somereason the button and the script are not registering
