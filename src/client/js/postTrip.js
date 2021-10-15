//save trip details to end point on clicking save

const url = 'http://localhost:8081/add';

let postTrip = () => {
    const destination = document.getElementById('dest').value;
    const date = document.getElementById('dateField').value;
    const duration = document.getElementById('counter').value;
    let dropDown = document.getElementById('plannedTrips');
    
    // add destination as option on dropdown
    let optionElement = document.createElement('option');
    dropDown.appendChild(optionElement);
    //set trip name
    optionElement.innerHTML = destination;
    optionElement.id = destination;

    //collate trip details to send to server end point
    let data = { destination : destination, date: date, duration: duration};
    postRequest(url, data);
}

//send trip detils to server side end point
let postRequest = async (url = '', data = {}) => {
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

export { postTrip }
export { postRequest }
