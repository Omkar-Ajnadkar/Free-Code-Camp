var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
            ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
            ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));
function updateRecords(id, prop, value) {
    var song = collection[id];
    if (prop !== "tracks" && value !=="")
        song[prop] = value;
    else if (prop === "tracks" && song.hasOwnProperty("tracks") === false){
        song["tracks"] = [];
        song["tracks"].push(value);
    }
    else if (prop === "tracks" && value !==""){
        song["tracks"].push(value);
    }
    else if(value === "")
        delete song[prop]
    return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "track no.1");
