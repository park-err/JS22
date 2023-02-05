// objects
song1 = {
    name: "Shape of You",
    artist: "Ed Sheeran",
    album: "Divide",
    genre: "Pop",
    streams: 3307042661
};

song2 = {
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    genre: "R&B/Soul",
    streams: 3285156792
}

song3 = {
    name: "Dance Monkey",
    artist: "Tones and I",
    album: "Dance Monkey",
    genre: "Elctropop",
    streams: 2707855088
}

song4 = {
    name: "Someone You Loved",
    artist: "Lewis Capaldi",
    album: "Someone You Loved",
    genre: "Alternative",
    streams: 2564964399
}

song5 = {
    name: "rockstar",
    artist: "Post Malone, 21 Savage",
    album: "rockstar",
    genre: "Trap",
    streams: 2556338647
}

function songs() {
    const song = [song1, song2, song3, song4, song5];

    for (var i = 0; i < song.length; i++) {
        document.querySelector(`#song${i+1} h2.name`).innerHTML = `${song[i].name}`;
        document.querySelector(`#song${i+1} h3.artist`).innerHTML = `${song[i].artist}`;
        document.querySelector(`#song${i+1} p.album`).innerHTML = `${song[i].album}`;
        document.querySelector(`#song${i+1} p.genre`).innerHTML = `${song[i].genre}`;
        document.querySelector(`#song${i+1} p.streams`).innerHTML = `${song[i].streams}`;
    }
}

document.querySelector("body").addEventListener("onload", songs());