// DOM
const main = document.querySelector("main");

// vars
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let holiday1;
let holiday2;


function start() {
    months.forEach(month => {
        switch (month) {
            case "January":
                holiday1 = "New Years Day";
                holiday2 = "Martin Luther King Jr. Day";
                break;
            case "February":
                holiday1 = "Valentines Day";
                holiday2 = "Presidents Day";
                break;
            case "March":
                holiday1 = "St. Patrick\'s Day";
                holiday2 = "Mardi Gras";
                break;
            case "April":
                holiday1 = "April Fool\'s Day";
                holiday2 = "Easter Day";
                break;
            case "May":
                holiday1 = "Mother\'s Day";
                holiday2 = "Memorial Day";
                break;
            case "June":
                holiday1 = "Father\'s Day";
                holiday2 = "Juneteeth";
                break;
            case "July":
                holiday1 = "Independence Day";
                holiday2 = "National Hot Dog Day";
                break;
            case "August":
                holiday1 = "National Girlfriend Day";
                holiday2 = "Lammas Day";
                break;
            case "September":
                holiday1 = "Labor Day";
                holiday2 = "Patriot Day";
                break;
            case "October":
                holiday1 = "Indigenous Day";
                holiday2 = "Halloween";
                break;
            case "November":
                holiday1 = "Veteran\'s Day";
                holiday2 = "National Vegan Month";
                break;
            case "December":
                holiday1 = "Hanukkah";
                holiday2 = "Christmas";
                break;
            default:
                holiday1 = "error";
                holiday2 = "error";
        }

        // print to the page
        main.innerHTML += (
            "<div class='month'><h2>" + month + 
            "</h2><p class='holiday'>" + holiday1 + 
            "</p><br><p class='holiday'>" + holiday2 + "</p></div>"
        );
    });
}

window.addEventListener("onload", start());