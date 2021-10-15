import { retrieveWeatherbit } from "./weather.js";
import { retrieveGeoname } from "./geonames.js";
import { updateWeatherDetails } from "./weatherDetails.js";
import { pixabayRequest } from "./image.js";
import { saveButton } from "./saveButton.js";
import { createSavedTrips } from "./createSavedTrips";
import { showTrip } from "./retrieveTripDetails";
import { removeTrip } from "./removeTrip"

// addEventListeners only after DOM has loaded
function dom() {
    const button = document.createElement('button');
    button.innerHTML = 'Search';
    button.id = 'search';
    button.type = 'submit';
    const addBtn = document.getElementById('btn');
    addBtn.appendChild(button);
    //retrieve saved trips on server end point
    createSavedTrips();
    //addEventListeners for function buttons
    document.getElementById('find').addEventListener('click', showTrip);
    document.getElementById('remove').addEventListener('click', removeTrip);
    document.getElementById('search').addEventListener('click', performAction);
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', dom);
} else {
    dom();
}

// Initiate functions
const performAction = () => {
    retrieveGeoname()
    .then(retrieveWeatherbit)
    .then(updateWeatherDetails)
    .then(pixabayRequest)
    .then(saveButton)
}

export { performAction }