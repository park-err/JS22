var Cat = class {
    constructor(name, breed, hair, tail) {
        this.name = name;
        this.breed = breed;
        this.hair = hair,
        this.tail = tail;
    }

    catStats() {
        return `${this.name} is a ${this.breed} ${this.hair} with a ${this.tail} tail`
    }
}

var cat1 = new Cat('Veronica', 'American', 'Shorthair', 'long');
var cat2 = new Cat('Duke', 'Maine Coon', 'Longhair', 'short');
var cat3 = new Cat('Simone', 'British', 'Shorthair', 'long');
var cat4 = new Cat('Robert', 'Ragdoll', 'Longhair', 'long');

document.getElementById("cat1").innerHTML = cat1.catStats();
document.getElementById("cat2").innerHTML = cat2.catStats();
document.getElementById("cat3").innerHTML = cat3.catStats();
document.getElementById("cat4").innerHTML = cat4.catStats();