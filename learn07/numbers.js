function start() {

    // DOM
    const add = document.querySelector("#add");
    const toString = document.querySelector("#to-string");
    const exponent = document.querySelector("#exponent");
    const fixed = document.querySelector("#fixed");
    const precision = document.querySelector("#precision");
    const float = document.querySelector("#float");
    const int = document.querySelector("#int");
    const equals = document.querySelector("#equals");
    const logic = document.querySelector("#logic");
    const switchPar = document.querySelector("#switch");
    const ternary = document.querySelector("#ternary");

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Your Name Here"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    add.innerHTML = 3 + "7";

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let num = 7;
    let newNum = 3240000000;
    toString.innerHTML = num.toString();

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    exponent.innerHTML = newNum.toExponential(4);

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    fixed.innerHTML = num.toFixed(2);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    precision.innerHTML = num.toPrecision();

    // Demonstrate the use of parseFloat() and print to the float paragraph
    float.innerHTML = parseFloat("7878 marbles");

    // Demonstrate the use of parseInt() and print to the int paragraph
    int.innerHTML = parseInt("80 marbles");


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    equals.innerHTML = "The == operator checks if the values are the same and returns a boolean value." +
                        "The === operator checks if the values and data types are the same and returns a boolean value.";

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    logic.innerHTML = "&& operators mean that both conditions " +
        "must be true for the function to proceed, || operators " + 
        "mean that only one of the condiitions must be true for" +  
        "the function to proceed";


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474

    
    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
    
    switch(num) {
        case 4:
            switchPar.innerHTML = num + 8;
            break;
        case 7:
            switchPar.innerHTML = num + 3;
            break;
        default:
            switchPar.innerHTML = "No num";
    }


    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    let isTrue = true;
    ternary.innerHTML = (isTrue ? "True" : "False");
}