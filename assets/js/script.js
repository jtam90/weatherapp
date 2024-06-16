document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "2978d905caace5941764d19fe81c213f";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".location-text");
    const searchBtn = document.getElementById("searchBtn");
    const weatherIcon = document.querySelector(".weather-icon");
    const errorElement = document.querySelector(".error p");
    const weatherQuote = document.querySelector(".quote");

    const weatherQuotes = {
        "Clouds": "One misty, moisty morning,\nwhen cloudy was the weather...",
        "Fog": "One misty, moisty morning, when cloudy was the weather...",
        "Mist": "One misty, moisty morning, when cloudy was the weather...",
        "Haze": "One misty, moisty morning, when cloudy was the weather...",
        "Rain": "It's raining, it's pouring, the old man is snoring...",
        "Drizzle": "It's raining, it's pouring, the old man is snoring...",
        "Snow": "When the North Wind doth blow, we shall have snow...",
        "Clear": "The sun has got his hat on, hip-hip-hip hooray!",
        "Thunderstorm": "I hear thunder, I hear thunder... Hark don't you? Hark don't you?",
        "Wind": "Rock-a-bye baby, in the treetop... When the wind blows, the cradle will rock."
    };

    async function checkWeather(city) {
        try {
            const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

            if (!response.ok) {
                errorElement.style.display = "block";
                document.querySelector(".weather").style.display = "none";
                return;
            }

            const data = await response.json();

            errorElement.style.display = "none";
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

            const weatherMain = data.weather[0].main;
            console.log("Weather condition:", weatherMain);

            if (weatherMain === "Clouds") {
                weatherIcon.src = "/assets/images/cloudy.png";
            } else if (weatherMain === "Fog" || weatherMain === "Mist" || weatherMain === "Haze") {
                weatherIcon.src = "/assets/images/foggy.png";
            } else if (weatherMain === "Rain" || weatherMain === "Drizzle") {
                weatherIcon.src = "/assets/images/rain.png";
            } else if (weatherMain === "Snow") {
                weatherIcon.src = "/assets/images/snow.png";
            } else if (weatherMain === "Clear") {
                weatherIcon.src = "/assets/images/sunny.png";
            } else if (weatherMain === "Thunderstorm") {
                weatherIcon.src = "/assets/images/stormy.png";
            } else if (weatherMain === "Wind") {
                weatherIcon.src = "/assets/images/windy.png";
            } else {
                weatherIcon.src = "/assets/images/default.png";
            }

            if (weatherQuotes.hasOwnProperty(weatherMain)) {
                weatherQuote.innerHTML = weatherQuotes[weatherMain];
            } else {
                weatherQuote.innerHTML = "There is no such thing as bad weather, only bad clothing.";
            }

            document.querySelector(".weather").style.display = "block";

        } catch (error) {
            console.error("Error fetching the weather data:", error);
            errorElement.style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
    }

    searchBtn.addEventListener("click", () => {
        const city = searchBox.value.trim(); // Get the trimmed city name
        if (city) { // Check if the city name is not empty
            checkWeather(city); // Proceed with fetching weather data
        }
    });

    searchBox.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const city = searchBox.value.trim(); // Get the trimmed city name
            if (city) { // Check if the city name is not empty
                checkWeather(city); // Proceed with fetching weather data
            }
        }
    });
});








