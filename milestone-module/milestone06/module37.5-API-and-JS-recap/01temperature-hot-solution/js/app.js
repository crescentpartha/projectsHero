
// 37.5.1 Get API key and load temperature data by city name

const API_KEY = `723a18053ef7f48f45406ac8e74c5c42`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = temperature => {
    console.log(temperature);
}

