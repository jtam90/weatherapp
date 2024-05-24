        const apiKey = "2978d905caace5941764d19fe81c213f";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=london";

        async function checkWeather(){
            const response = await fetch(apiUrl + `&appid=${apiKey}`);
            var data = await response.json();

            console.log(data);
        }

        checkWeather();
    