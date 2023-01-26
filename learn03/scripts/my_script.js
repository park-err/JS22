// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  edited
// 
var name1 = "Parker";

const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {
    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var name = "Beba";
    var firstName = "Doctor";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    let firstName = "Parker";
    let newTaxRate = .08
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHTML = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    document.getElementById("new-tax").innerHTML = newTaxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog1 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Ory"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    dogs[0] = "Ollie Bear";
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("doggos").innerHTML = dogs;
    document.getElementById("new-doggos").innerHTML = breed;
}

function myMath() {
    // create statements demonstrating the use of each operator
    let x = 8, y = 4, z;
    z = x + y;
    document.getElementById("addition").innerHTML = "8 + 4 = " + z;
    z = x - y;
    document.getElementById("subtraction").innerHTML = "8 - 4 = " + z;
    z = x * y;
    document.getElementById("multiplication").innerHTML = "8 * 4 = " + z;
    z = x / y;
    document.getElementById("division").innerHTML = "8 / 4 = " + z;
    z = x % y;
    document.getElementById("modulus").innerHTML = "8 % 4 = " + z;
    document.getElementById("increment").innerHTML = "Increment 8 = " + ++x;
    document.getElementById("decrement").innerHTML = "Decrement 9 = " + --x;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10
    document.getElementById("equals").innerHTML = "x = 10" + "x = " + x;
    x += 1;
    document.getElementById("plus-equals").innerHTML = "x += 1" + "x = " + x;
    x -= 1;
    document.getElementById("minus-equals").innerHTML = "x -= 1" + "x = " + x;
    x *= 2;
    document.getElementById("times-equals").innerHTML = "x *= 1" + "x = " + x;
    x /= 4;
    document.getElementById("divide-equals").innerHTML = "x /= 1" + "x = " + x;
    x %= 2;
    document.getElementById("modulus-equals").innerHTML = "x %= 1" + "x = " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const cats = ["Siamese", "American Shorthair", "Tabby"]
    const car = {
        make:"Kia", 
        model:"Soul", 
        color:"red"
    };
    document.getElementById("array").innerHTML = cats;
    document.getElementById("object").innerHTML = car.color + car.make + car.model;

}