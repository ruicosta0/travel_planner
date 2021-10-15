
let updateWeatherDetails = (weather) => {
    let temp = document.getElementById('temperature')
    let rain = document.getElementById('rain')
    let desc = document.getElementById('description')
    temp.innerHTML = 'Temperature: ' + weather.temperature + 'C'
    rain.innerHTML = 'Chance of rain: ' + weather.rain + '%'
    desc.innerHTML = 'Description: ' + weather.description
}

export { updateWeatherDetails }