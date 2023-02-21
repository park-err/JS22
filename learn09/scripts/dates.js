/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph

let basic = new Date();
document.getElementById("basic").innerHTML = basic;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)

let today = new Date(2023, 02, 17);
document.getElementById("today").innerHTML = today;

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph

let bday = new Date("2002-01-14");
document.getElementById("birthday").innerHTML = bday;

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph

document.getElementById("iso").innerHTML = basic.toISOString();

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs

let date1 = new Date("2023-02-17");
let date2 = new Date("02/17/2023");
let date3 = new Date("17 Feb 2023");

document.getElementById("date1").innerHTML = date1;
document.getElementById("date2").innerHTML = date2;
document.getElementById("date3").innerHTML = date3;

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs

document.getElementById("get1").innerHTML = basic.getFullYear();
document.getElementById("get2").innerHTML = basic.getDate();
document.getElementById("get3").innerHTML = basic.getTime();
document.getElementById("get4").innerHTML = basic.getDay();

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs

document.getElementById("set1").innerHTML = basic.setFullYear(2013);
document.getElementById("set2").innerHTML = basic.setDate(4);
document.getElementById("set3").innerHTML = basic.setMonth(4);
document.getElementById("set4").innerHTML = basic.setHours(22);