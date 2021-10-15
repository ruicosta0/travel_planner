// create dropdown of saved trips

const url = 'http://localhost:8081/all';

let createSavedTrips = async () => {
    let response = await fetch(url);
    try {
        let savedTrips = await response.json();
        //loop through savedTrips & add to dropdown
        for (let i=0; i <= savedTrips.length; i++) {
            let plannedTrips = document.getElementById('plannedTrips');
            let optionElement = document.createElement('option');
            optionElement.innerHTML = savedTrips[i].destination;
            optionElement.id = savedTrips[i].destination;
            plannedTrips.appendChild(optionElement);
        }
    } catch {
        console.log("error", error);
    }
}

export { createSavedTrips }