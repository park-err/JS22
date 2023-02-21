function start() {
    const round = document.querySelector("#round");
    const ceil = document.querySelector("#ceil");
    const floor = document.querySelector("#floor");
    const trunc = document.querySelector("#trunc");
    const sign = document.querySelector("#sign");
    const pow = document.querySelector("#pow");
    const min = document.querySelector("#min");
    const random = document.querySelector("#random");
    const random2 = document.querySelector("#random2");
    const comparisons = document.querySelector("#comparisons");
    
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    round.innerHTML = Math.round(90.222349329);
    ceil.innerHTML = Math.ceil(20.4568);
    floor.innerHTML = Math.floor(55.999999);
    trunc.innerHTML = Math.trunc(79.333333333333);
    sign.innerHTML = Math.sign(-4);
    pow.innerHTML = Math.pow(6, 2);
    min.innerHTML = Math.min(2, 5, 6, 7, 4, 2, 7, 8, 9, 0);
    random.innerHTML = Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    random2.innerHTML = Math.floor(Math.random() * 101);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph

    comparisons.innerHTML = "The == operator will compare two values and return a boolean value so 4 == '4' will equal " + (4 == "4")
        + " The === operator will compare two values and their data types and return a boolean value so 4 === '4' will equal " + (4 === "4"); 

    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}