//Way1
let year = prompt("How old are you?");
let city = prompt("What city do you live in?");
let sport = prompt("What is your favorite sport?");

let capitalCities = {
    "Kyiv": "Ukraine",
    "Washington": "the United States",
    "London": "Great Britain"
};

let sportsChampions = {
    "Football": "Lionel Messi",
    "Basketball": "LeBron James",
    "High jump": "Yaroslava Mahuchikh"
};

if (!year) {
    year = "Sorry, you didn’t want to enter your age.";
} else {
    year = `Your age: ${year}.`;
}

if (!city) {
    city = "Sorry, you didn’t want to enter your city.";
} else if (capitalCities[city]) {
    city = `You live in the capital of ${capitalCities[city]} in ${city}.`;
} else {
    city = `You live in ${city} city.`;
}

if (!sport) {
    sport = "Sorry, you didn’t want to enter your favorite sport.";
} else if (sportsChampions[sport]) {
    sport = `Cool! Do you want to become like ${sportsChampions[sport]} in ${sport}?`;
} else {
    sport = "Wow! I’m sure you’ll be great at this sport!";
}

alert(`${year} \n${city} \n${sport}`);