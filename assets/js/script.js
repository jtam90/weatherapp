        const apiKey = "2978d905caace5941764d19fe81c213f";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=london";

        async function checkWeather(){
            const response = await fetch(apiUrl + `&appid=${apiKey}`);
            var data = await response.json();

            console.log(data);
        }

        function loadLottieAnimation(animationPath = '/assets/animations') {
            const animationContainer = document.getElementById('lottie-animation');
            animationContainer.innerHTML = 'sunny.json'; 
        
            lottie.loadAnimation({
                container: animationContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: animationPath = '/assets/animations/sunny.json)'
            });
        }
        
        function updateWeatherAnimation(weather) {
            const weatherCondition = weather.weather[0].main;
        
            let animationPath;
            switch (weatherCondition) {
                case 'Sunny':
                    animationPath = '/assets/animations/sunny.json';
                    break;
                case 'Rain':
                    animationPath = '/assets/animations/rain.json';
                    break;
                case 'Wind':
                    animationPath = '/assets/animations/wind.json';
                    break;
                case 'Snow':
                    animationPath = '/assets/animations/snow.json';
                    break;
                case 'Cloudy':
                    animationPath = '/assets/animations/cloudy.json';
                    break;
                case 'Fog':
                    animationPath = '/assets/animations/fog.json';
                    break;
                case 'Sleet':
                    animationPath = '/assets/animations/sleet.json';
                    break;
                case 'Wind and Rain':
                    animationPath = '/assets/animations/wind-rain.json';
                    break;
                case 'Thunder and Lightning':
                    animationPath = '/assets/animations/thunder-lightning.json';
                    break;
                
                default:
                    animationPath = '/assets/animations/sunny.json';
                    break;
            }
        
            loadLottieAnimation(animationPath);
        }
        

        checkWeather();
        updateWeatherAnimation(weatherData);
    