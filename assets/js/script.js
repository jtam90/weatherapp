document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "2978d905caace5941764d19fe81c213f";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".location-text");
    const searchBtn = document.getElementById("searchBtn");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});