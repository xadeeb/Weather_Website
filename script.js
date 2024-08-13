async function getWeather() {
    const apiKey = '98740f4ebc0d63bc0f8ba70090e5a091'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        document.getElementById('cityName').innerText = `Weather in ${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Condition: ${data.weather[0].description}`;
        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;

    } catch (error) {
        alert('Error fetching weather data');
    }
}
