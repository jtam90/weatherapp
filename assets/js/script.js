document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "2978d905caace5941764d19fe81c213f";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".location-text");
    const searchBtn = document.getElementById("searchBtn");
    const weatherIcon = document.getElementById("weather-icon");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    
        if (data.Weather[0].main == "Cloudy"){
            weatherIcon.src = "/assets/images/cloudy.png";
        }
        else if(data.Weather[0].main == "Foggy"){
            weatherIcon.src = "/assets/images/foggy.png";
        }
        else if(data.Weather[0].main == "Rain"){
            weatherIcon.src = "/assets/images/rain.png";
        }
        else if(data.Weather[0].main == "Snow"){
            weatherIcon.src = "/assets/images/snow.png";
        }
        else if(data.Weather[0].main == "Sunny"){
            weatherIcon.src = "/assets/images/sunny.png";
        }
        else if(data.Weather[0].main == "Stormy"){
            weatherIcon.src = "/assets/images/stormy.png";
        }

    
    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});