//retrieve trip details

const url = 'http://localhost:8081/all';

//obtain destination name
let showTrip = () => {
    let retrieveDestination = document.getElementById('plannedTrips');
    let destinationName = retrieveDestination.value;
    fetchTrip(url, destinationName);
}

//retrieve destination details from end point
let fetchTrip = async (url, destinationName) => {
    let response = await fetch(url)
    let destinationData = await response.json();
    try {
        let foundDestination = destinationData.find((name) => {
            return name.destination === destinationName;});
            //publish to UI
            document.getElementById('savedDestination').innerHTML = ("Where: " + foundDestination.destination);
            document.getElementById('savedDate').innerHTML = ("When: " + foundDestination.date);
            document.getElementById('savedDuration').innerHTML = ("Duration: " + foundDestination.duration + " days");
    } catch(error) {
        console.log("error", error);
    }
} 

export { showTrip }
export { fetchTrip }