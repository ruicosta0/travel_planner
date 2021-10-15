import { updateWeatherDetails } from './weatherDetails';

test('correctly publishes weather details to UI fields', () => {
    document.body.innerHTML = `
    <div class ="display weatherDetails">  
        <div class = "display" id="forecast">Weather Forecast</div>
        <div class = detail id = "temperature"></div> 
        <div class = detail id = "rain"></div>
        <div class = detail id = "description"></div>
    </div>`;
    const weather = {
        "temperature": 4,
        "rain": 95,
        "description": "Heavy rain"
    };
    updateWeatherDetails(weather);
    const temperature = document.getElementById('temperature');
    const rain = document.getElementById('rain');
    const description = document.getElementById('description');
    expect(temperature.innerHTML).toBe('Temperature: 4C');
    expect(rain.innerHTML).toBe('Chance of rain: 95%');
    expect(description.innerHTML).toBe('Description: Heavy rain');
});