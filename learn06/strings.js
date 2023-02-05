function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Parker Binnet";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home."
    document.querySelector("#length").innerHTML = myString.length;


    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    document.querySelector("#escape").innerHTML = "The \"Big Dog\" was in the kennel\\house";


    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    let name = "Parker Sal Binnet";
    // Use the JavaScript slice function to display your first name to first paragraph
    document.querySelector("#first").innerHTML = name.slice(0,6);


    // Use the Javascript substring Method to display your middle name to the middle paragraph
    document.querySelector("#middle").innerHTML = name.substring(7, 10);

    // Use the JavaScript subst Method to display your last name to the last paragraph
    document.querySelector("#last").innerHTML = name.substr(11,6);


    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College";
    document.querySelector("#major").innerHTML = major.replace("Physical Therapy", "Computer Science");


    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"
    document.querySelector("#upper").innerHTML = myText.toUpperCase();

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    document.querySelector("#trim").innerHTML = trimText.trim();

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    document.querySelector("#index").innerHTML = months.indexOf("May");

    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let first = "Parker";
    let last = "Binnet";
    document.querySelector("#greeting").innerHTML = `My name is ${first} ${last}`;

    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph
}