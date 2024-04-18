let search = document.querySelector(".search");
let searchIcon = document.querySelector(".search-icon");
let weatherConditionIcon = document.querySelector(".weather-condition-icon");
let weatherTemp = document.querySelector(".temp");
let weatherCondition = document.querySelector(".weather");
let humidityLevel = document.querySelector(".humidity-level");
let windSpeed = document.querySelector(".Wind-speed");
let city = document.querySelector(".City")

cityName = "Dumka";

let getWeatherData = async (cityName) => {
    let apiIdKey = "8ba79e53c609ebb193de3b553f07d83c";
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiIdKey}&units=metric`
    let fetchData = await fetch(apiLink);
    let mainData = await fetchData.json();
    console.log(mainData);
    let { main, name, weather, wind, sys } = mainData;
    weatherTemp.innerHTML = `${Math.round(main.temp)}<span>°c</span>`;
    humidityLevel.innerHTML = `${main.humidity}%`;
    windSpeed.innerHTML = `${wind.speed}Km/h`;
    weatherCondition.innerHTML = `${weather[0].description}`;
    city.innerHTML = name;

    switch (weather[0].main) {
        case "Clear":
            weatherConditionIcon.src = "./images/clear.png";
            document.body.style.backgroundImage = "url('./images/clearbg.webp')"
            break;
        case "Rain":
            weatherConditionIcon.src = "./images/rain.png";
            break;
        case "Snow":
            weatherConditionIcon.src = "./images/snow.png";
            break;
        case "Clouds":
            weatherConditionIcon.src = "./images/cloud.png";
            break;
        case "Mist":
            weatherConditionIcon.src = "./images/mist.png";
            break;

        default:
            weatherConditionIcon.src = "./images/clear.png";
    }

}



searchIcon.addEventListener("click", () => {
    getWeatherData(search.value);

})

getWeatherData(cityName);