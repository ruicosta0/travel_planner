//button removes trip from server end trip

const url = 'http://localhost:8081/remove';

//remove destination from drop down list DOM
let removeTrip = () => {
    let trip = document.getElementById('plannedTrips').value;
    let tripOption = document.getElementById(trip);
    tripOption.remove()
    let data = {destination: trip }
    postRemove(url, data)
}

//remove destination from server end point
let postRemove = async (url = '', data={}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
    }catch(error) {
        console.log("error", error);
    }
} 

export { removeTrip }
export { postRemove }