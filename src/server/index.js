const dotenv = require('dotenv');
dotenv.config();

//geoname

const geoname_username = process.env.geoname_username;
console.log(`Your geoname username is ${process.env.geoname_username}`);

//weather
const weatherAPI = process.env.weatherbit_API;

//pixabay images
const pixabayAPI = process.env.pixabay_API;

// Setup empty JS array to act as endpoint
let tripData = [];

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors({
   origin: "*"
})
);

// Initialize the main project folder
app.use(express.static('dist'));

console.log(__dirname);

module.exports = app;

//Set up GET route
app.get("/all", (req, res) => {
    // convert object to array
    const savedEntries = Object.values(tripData);
    // Return array to app
    res.send(savedEntries);
});

// POST: add the trip details to end point
app.post('/add', (req,res) => {
    newData = req.body;
    // Add posted data to tripData array
    let trip = {
        destination: newData.destination,
        date: newData.date,
        duration: newData.duration
    };
    tripData.push(trip);
    console.log(tripData);
});

// POST: remove the trip details
app.post('/remove', (req,res) => {
    newData = req.body;
    // Add posted data to tripData array
    let trip = {
        destination: newData.destination,
    };
    //create new array to find position of trip to remove
    let tripDestinations = tripData.map((trip) => {
        return trip.destination;
    });
    let position = tripDestinations.indexOf(trip.destination);
    //remove trip from server end point
    tripData.splice(position,1);
});


//variables for get requests
const geoname_url = 'http://api.geonames.org/searchJSON?';
const weather_url ='https://api.weatherbit.io/v2.0/forecast/daily?';
const pixabay_url = 'https://pixabay.com/api/?';

// route to pass geoname credentials to client side
app.get('/geo', (req, res) => {
    res.send({
        'username' : geoname_username,
        'geoname_url' : geoname_url
    });
});

// route to pass weatherbit credentials to client side
app.get('/weather', (req, res) => {
    res.send({
        'weatherbit_API' : weatherAPI,
        'weather_url' : weather_url
    });
});

// route to pass pixabay credentials to client side
app.get('/image', (req, res) => {
    res.send({
        'pixabay_API' : pixabayAPI,
        'pixabay_url' : pixabay_url
    });
});
