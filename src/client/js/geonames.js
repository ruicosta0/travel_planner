/* Global Variables */

// Variables to build geoname url request
const placeURL = 'q='
const usernameURL = '&maxRows=1&username='

//geoname API request place name coords
async function retrieveGeoname(){
    const dest = document.getElementById('dest').value;
    // Async GET from geonames api
    const response = await fetch('http://localhost:8081/geo');
    try {
        //credentials returned from server
        const credentials = await response.json();
        //build url
        let url = credentials.geoname_url + placeURL + dest + usernameURL + credentials.username;
        //fetch request
        let geonameRequest = await fetch(url);
        let geoResponse = await geonameRequest.json();
        return geoResponse;   
    } catch (error) {
        console.log("error", error);
    }
}

export { retrieveGeoname }