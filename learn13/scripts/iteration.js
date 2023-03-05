/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/



function iteration(list) {
    const shows = ["Glee", "You", "Arthur", "Dora the Explorer", "Blue's Clues"];

    for (const i of shows) {
        list.innerHTML += (i + "<br>");
    }
}

/*
JS Sets 

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/


// add two more songs to the set then display in the set2 paragraph


function sets(set1, set2) {
    const songs = new Set(["Hidden Moon", "Sticks and Stones", "Well Thought Out Twinkles", "Melatonin", "Lazy Eye"]);

    // set 1
    songs.forEach(function(i) {
        set1.innerHTML += (i + "<br>");
    })

    // set 2
    songs.add("Three Seed");
    songs.add("Latchkey Kids");

    songs.forEach(function(i) {
        set2.innerHTML += (i + "<br>");
    })

}



/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

function maps(maps1, maps2, maps3) {
    const directory = new Map([
        ["Vivienne Vermina", "vvermina@gmail.com"],
        ["Veronica Vermina", "veronicarulez@gmail.com"],
        ["Marvin Schultz", "mschultz@gmail.com"],
        ["Michelle Norman", "mnorman@gmail.com"],
        ["Bobert Stooly", "bobstool@gmail.com"]
    ]);

    directory.forEach(function(email, name) {
        maps1.innerHTML += (name + "\'s email is " + email + "<br>");
    })
    // add two new names and emails and display in map2 use the forEach() method

    directory.set("Parker Binnet", "pb@gmail.com");
    directory.set("Mya Whelpley", "myaw@gmail.com");
    directory.forEach(function(email, name) {
        maps2.innerHTML += (name + "\'s email is " + email + "<br>");
    })

    // get and display the email of one person, display in map3
    map3.innerHTML = "Marvin\'s email is " + directory.get("Marvin Schultz");
}



// main function
function startup() {
    // DOM
    const LIST = document.getElementById("list");
    const SET1 = document.getElementById("set1");
    const SET2 = document.getElementById("set2");
    const MAP1 = document.getElementById("map1");
    const MAP2 = document.getElementById("map2");
    const MAP3 = document.getElementById("map3");
    
    iteration(LIST);
    sets(SET1, SET2);
    maps(MAP1, MAP2, MAP3);
}

window.addEventListener("onload", startup());