// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 

for (let i = 99; i > 0; i--) {
    document.querySelector("#beer").innerHTML += (i + " bottles of beer on the wall<br>");
}


//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
months.forEach(month => {
    document.querySelector("#for-in").innerHTML += (month + "<br>");
});

// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

let word = "Three";

for (const i of word) {
    document.querySelector("#for-of").innerHTML += i;
}

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

let i = 1;
while (i < 51) {
    document.querySelector("#while").innerHTML += (i + "<br>");
    i++;
}