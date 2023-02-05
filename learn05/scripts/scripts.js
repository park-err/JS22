// Functions, objects, and events

// Dog objects

const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket"
};

const dog2 = {
    heading: "Sun Bather",
    image: "images/gold-dog.jpg",
    caption: "Sitting in the sun",
    altTag: "Gold puppy"
};

const dog3 = {
    heading: "Santa's Little Helper",
    image: "images/snow-dog.jpg",
    caption: "Helping out a snowman",
    altTag: "Snow Dog"
};

const dog4 = {
    heading: "Mother's Love",
    image: "images/white-dogs.jpg",
    caption: "A mother kissing her pup",
    altTag: "White dogs"
};

function chooseDog(dog) {
    if (dog == 1) {
        loadMe(dog1, 1);
        const load1 = document.getElementById("load1");
        load1.style.display = "none";
    }
    else if (dog == 2) {
        loadMe(dog2, 2);
        const load2 = document.getElementById("load2");
        load2.style.display = "none";
    }
    else if (dog == 3) {
        loadMe(dog3, 3);
        const load3 = document.getElementById("load3");
        load3.style.display = "none";
    }
    else {
        loadMe(dog4, 4);
        const load4 = document.getElementById("load4");
        load4.style.display = "none";
    }
}

function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute("alt", dog.altTag);
}