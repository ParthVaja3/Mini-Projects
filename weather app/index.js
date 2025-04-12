const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIkey = '37118a4f1f1c1cd18a8af865b918337b';
    const city = document.querySelector('.search-box input').value; // 🔹 Fixed `.Value` (should be `.value`)

    if (city === '') return;

    // 🔹 Correct API URL using city name instead of lat/lon
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`)
        .then(response => response.json())
        .then(json => {
            
            // 🔹 Fix error handling (OpenWeather API returns `cod: 404` for invalid locations)
            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn'); // 🔹 Ensuring fadeIn class works
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn'); // 🔹 Fix fadeIn usage (class name must be a string)

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature'); // 🔹 Fix class selector
            const description = document.querySelector('.weather-box .description'); // 🔹 Fix class selector
            const humidity = document.querySelector('.weather-details .humidity span'); // 🔹 Fix class selector
            const wind = document.querySelector('.weather-details .wind span'); // 🔹 Fix class selector

            // 🔹 Fix weather condition images
            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = "images/clear.png";
                    break;
                case 'Rain':
                    image.src = "images/rain.png";
                    break;
                case 'Snow':
                    image.src = "images/snow.pnd";
                    break;
                case 'Clouds':
                    image.src = "images/clouds.png";
                    break;
                case 'Haze':
                    image.src = "images/haze.png";
                    break;
                default:
                    image.src =  "images/default.png";
            }

            // 🔹 Fix template string syntax
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>℃</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)} km/h`;

            weatherBox.style.display = 'block';
            weatherDetails.style.display = 'block';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';
        })
        .catch(error => console.error('Error fetching weather data:', error)); // 🔹 Add error handling
});
