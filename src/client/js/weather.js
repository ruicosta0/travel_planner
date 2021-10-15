/* Global Variables */

// Variables to build weatherbit url request
const placeLat = '&lat='
const placeLon = '&lon='
const key_urlText = '&key='
const lang ='&lang=en'


//retrieve weather forecast - pass in geoname response to access long/lat
async function retrieveWeatherbit(geoResponse) {
    
    //extract geonames latitude & longitude
    let geoObject = geoResponse.geonames[0];
    let latitude = geoObject.lat;
    let longitude = geoObject.lng;
    let country = geoObject.countryName;
    let placeName = geoObject.name;
    console.log('lat: ' + latitude + ', long: ' + longitude + ' ' + placeName + ', '  + country);

    //calculate countdown days  
    
    let departureDate = document.getElementById('dateField').value;
    //get time of departure date in milliseconds
    let timeOfDeparture = new Date(departureDate).getTime();
    // Create a new date instance & convert to time in milliseconds
    let todayDate = new Date().getTime();
    //calculate time between departure and today in milliseconds & convert to days
    let daystoGoMilliseconds = timeOfDeparture - todayDate
    // convert milliseconds to days
    let daystoGoDays = daystoGoMilliseconds/(1000*60*60*24)
    //round days up
    let daystoGoFull = Math.ceil(daystoGoDays)
    //publish to UI
    let daystoGoValue = document.getElementById('count').value = daystoGoFull + ' days';
    document.getElementById('count').innerHTML = daystoGoValue

    // form weatherbit api request
    const response = await fetch('http://localhost:8081/weather');
    try {
        
        //apiDetails returned from server
        const weatherAPICredentials = await response.json();
        
        //request weather object
        let weather_url = weatherAPICredentials.weather_url + lang + placeLat + latitude + placeLon + longitude + key_urlText + 
                          weatherAPICredentials.weatherbit_API
        
        //fetch weather info
        let weatherRequest = await fetch(weather_url);
        let weatherResponse = await weatherRequest.json();
        console.log(weatherResponse)
        
        //return current weather if departure date is <7, return actual forecast if departure date is 8-16 days away, 
        //if departure date is beyond 16 days return weather forecast for day 16.
        
        let x;
        
        if (daystoGoFull > 0 &daystoGoFull <= 7) {
            x = 0;
        } else if (daystoGoFull > 15) {
            x = 15;
        } else if (daystoGoFull < 0) {
            alert("This date is in the past");
        } else {
            x = daystoGoFull;
        };
        
        let weatherData = weatherResponse.data[x]
        // split weather data into variables
        let temp = weatherData.temp
        let pop = weatherData.pop
        let desc = weatherData.weather.description

        //combine variables to object
        let weather = {
            temperature : temp,
            rain : pop,
            description : desc
        }
        console.log(weather)
        //return weather details to pass to next fn
        return weather;

    } catch (error){
        console.log("error",error);
    }
}

export { retrieveWeatherbit }