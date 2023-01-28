// sandwiches
const cheezeburger = document.querySelector("#cheezeburger").value;
const veganGyro = document.querySelector("#vegan-gyro").value;
const veganBLT = document.querySelector("#vegan-blt").value;
const veganClub = document.querySelector("#vegan-club").value;
const veganReuben = document.querySelector("#vegan-reuben").value;

// drinks
const water = document.querySelector("#water").value;
const tea = document.querySelector("#tea").value;
const soda = document.querySelector("#soda").value;
const boba = document.querySelector("#boba").value;
const juice = document.querySelector("#juice").value;

// desserts
const shake = document.querySelector("#vegan-shake").value;
const iceCream = document.querySelector("#veg-ice-cream").value;
const cake = document.querySelector("#vegan-cake").value;
const brownie = document.querySelector("#vegan-brownie").value;
const oreos = document.querySelector("#oreos").value;

// summary
const submit = document.querySelector("#submit");
const numBurgs = document.querySelector("#num-burgs");
const numGyros = document.querySelector("#num-gyros");
const numBlts = document.querySelector("#num-blts");
const numClubs = document.querySelector("#num-clubs");
const numReubens = document.querySelector("#num-reubens");
const numWaters = document.querySelector("#num-waters");
const numTeas = document.querySelector("#num-teas");
const numSodas = document.querySelector("#num-sodas");
const numBobas = document.querySelector("#num-bobas");
const numJuices = document.querySelector("#num-juices");
const numShakes = document.querySelector("#num-shakes");
const numIceCreams = document.querySelector("#num-ice-creams");
const numCakes = document.querySelector("#num-cakes");
const numBrownies = document.querySelector("#num-brownies");
const numOreos = document.querySelector("#num-oreos");

// display
const displayBurgs = document.querySelector("#display-burgers");
const displayGyros = document.querySelector("#display-gyros");
const displayBlts = document.querySelector("#display-blts");
const displayClubs = document.querySelector("#display-clubs");
const displayReubens = document.querySelector("#display-reubens");
const displayWaters = document.querySelector("#display-waters");
const displayTeas = document.querySelector("#display-teas");
const displaySodas = document.querySelector("#display-sodas");
const displayBobas = document.querySelector("#display-bobas");
const displayJuices = document.querySelector("#display-juices");
const displayShakes = document.querySelector("#display-shakes");
const displayIceCreams = document.querySelector("#display-ice-creams");
const displayCakes = document.querySelector("#display-cakes");
const displayBrownies = document.querySelector("#display-brownies");
const displayOreos = document.querySelector("#display-oreos");

// objects
const Cheezeburger = {
    item: cheezeburger,
    num: numBurgs,
    display: displayBurgs,
    price: 14.99
}

const Gyro = {
    item: veganGyro,
    num: numGyros,
    display: displayGyros,
    price: 14.99
}

const Blt = {
    item: veganBLT,
    num: numBlts,
    display: displayBlts,
    price: 14.99
}

const Club = {
    item: veganClub,
    num: numClubs,
    display: displayClubs,
    price: 12.99
}

const Reuben = {
    item: veganReuben,
    num: numReubens,
    display: displayReubens,
    price: 14.99
}

const Water = {
    item: water,
    num: numWaters,
    display: displayWaters,
    price: 1.99
}

const Tea = {
    item: tea,
    num: numTeas,
    display: displayTeas,
    price: 1.99
}

const Soda = {
    item: soda,
    num: numSodas,
    display: displaySodas,
    price: 1.99
}

const Boba = {
    item: boba,
    num: numBobas,
    display: displayBobas,
    price: 4.99
}

const Juice = {
    item: juice,
    num: numJuices,
    display: displayJuices,
    price: 4.99
}

const Shake = {
    item: shake,
    num: numShakes,
    display: displayShakes,
    price: 12.99
}

const IceCream = {
    item: iceCream,
    num: numIceCreams,
    display: displayIceCreams,
    price: 8.99
}

const Cake = {
    item: cake,
    num: numCakes,
    display: displayCakes,
    price: 5.99
}

const Brownie = {
    item: brownie,
    num: numBrownies,
    display: displayBrownies,
    price: 4.99
}

const Oreo = {
    item: oreos,
    num: numOreos,
    display: displayOreos,
    price: 4.99
}

// functions
function checks(item, num, display) {
    num.innerHTML = item;
    display.style.display = "block";
}

submit.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Working........");
    let sandwichSub = 0; let drinkSub = 0; let dessertSub = 0;
    var sandwiches = [Cheezeburger, Gyro, Blt, Club, Reuben];
    var drinks = [Water, Tea, Soda, Boba, Juice];
    var desserts = [Shake, IceCream, Cake, Brownie, Oreo];
    for (let i = 0; i < sandwiches.length; i++) {
        if (sandwiches[i].item > 0 && !!sandwiches[i].item) {
            sandwichSub += (sandwiches[i].item * sandwiches[i].price);
            checks(sandwiches[i].item, sandwiches[i].num, sandwiches[i].display);
        }
    }
    for (let i = 0; i < drinks.length; i++) {
        if (drinks[i].item > 0 && !!drinks[i].item) {
            drinkSub += (drinks[i].item * drinks[i].price);
            checks(drinks[i].item, drinks[i].num, drinks[i].display);
        }
    }
    for (let i = 0; i < desserts.length; i++) {
        if (desserts[i].item > 0 && !!desserts[i].item) {
            dessertSub += (desserts[i].item * desserts[i].price);
            checks(desserts[i].item, desserts[i].num, desserts[i].display);
        }
    }

    //display subtotals
    document.querySelector(".show-sub-sandwiches").innerHTML = "$" + sandwichSub;
    document.querySelector(".show-sub-drinks").innerHTML = "$" + drinkSub;
    document.querySelector(".show-sub-desserts").innerHTML = "$" + dessertSub;
})