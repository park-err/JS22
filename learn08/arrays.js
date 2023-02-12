function start() {
    const may = document.querySelector("#may");
    const length = document.querySelector("#length");
    const months = document.querySelector("#months");
    const strings = document.querySelector("#string");
    const weekPar = document.querySelector("#week");
    const pop = document.querySelector("#pop");
    const fruits = document.querySelector("#fruits");
    const fruits2 = document.querySelector("#fruits2");
    const sorted = document.querySelector("#sorted");
    const reversed = document.querySelector("#reversed");
    const numSorted = document.querySelector("#num-sorted");

    /* Follow the directions in the comments to demonstrate the use of arrays */
    document.getElementById("name").innerHTML = "Parker Binnet";
    /* JavaScript Arrays:https://www.w3schools.com/js/js_arrays.asp */
    // write your name to the name h1

    // Create an array called months that holds all the months of the year
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // use the index to print the month May from the months array the may paragraph
    may.innerHTML = month[4];

    // print the length of the month array to the length paragraph
    length.innerHTML = month.length;

    // Loop through all of the months array and print each month to the months paragraph
    for (let i = 0; i < month.length; i++) {
        months.innerHTML += month[i];
    }

    //JS Array Methods:https://www.w3schools.com/js/js_array_methods.asp


    // convert the months array to a string and print to the string paragraph
    strings.innerHTML = month.toString();

    // create two new arrays - weekends and weekdays, add the appropriate days to each
    let weekends = ["Saturday", "Sunday"];
    let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    // join the two arrays into a new array - week
    let week = weekdays.concat(weekends);

    // print the contents of week to the week paragraph
    for (let i = 0; i < week.length; i++) {
        weekPar.innerHTML += week[i];
    }

    // use the pop method to remove the last element of the week array, then print
    // the week array to the pop paragraph
    week.pop();
    for (let i = 0; i < week.length; i++) {
        pop.innerHTML += week[i];
    }

    // use the push function to add two fruits to the array fruits print to the fruits paragraph
    let fruit = ["Apple", "Kiwi", "Mango"]
    fruit.push("Lemon");
    fruit.push("Orange");
    fruits.innerHTML = fruit.join(" ");

    // use the shift function to add a fruit to the front of the list and print to the fruits2 paragraph
    fruit.unshift("Peach");
    fruits2.innerHTML = fruit.join(" ");

    // JS Array Sort  https://www.w3schools.com/js/js_array_sort.asp

    languages = ["COBOL", "livescript", "C++", "Python", "JavaScript", "Lua", "Basic"]
        // sort the array languages and print to the paragraph sorted
        // reverse the array languages and print to the paragraph reversed
        sorted.innerHTML = languages.sort();
        reversed.innerHTML = languages.reverse();

    // use the compare function to sort the numbers  and print to the num-sorted paragraph
    numbers = [42, 23, 21, 50, 20, 6, 31, 9];
    numbers.sort(function(a, b){return a - b});
    numSorted.innerHTML = numbers;
    // Read the Array Iteration page https://www.w3schools.com/js/js_array_iteration.asp 
    // read the Array Const page https://www.w3schools.com/js/js_array_const.asp
}