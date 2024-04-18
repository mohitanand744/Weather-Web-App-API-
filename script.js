let search = document.querySelector(".search");
let searchIcon = document.querySelector(".search-icon");
let weatherConditionIcon = document.querySelector(".weather-condition-icon");
let weatherTemp = document.querySelector(".temp");
let weatherCondition = document.querySelector(".weather");
let humidityLevel = document.querySelector(".humidity-level");
let windSpeed = document.querySelector(".Wind-speed");
let minTemp = document.querySelector(".min-temp")
let maxTemp = document.querySelector(".max-temp")
let city = document.querySelector(".City")
let preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.style.display = "none";
});

cityName = "Dumka";

let getWeatherData = async (cityName) => {
    let apiIdKey = "8ba79e53c609ebb193de3b553f07d83c";
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiIdKey}&units=metric`
    let fetchData = await fetch(apiLink);
    let mainData = await fetchData.json();
    console.log(mainData);
    let { main, name, weather, wind, cod } = mainData;


    if (cod == '404') {
        document.querySelector(".warn").innerHTML = "Please Enter a valid city name ";
        document.querySelector(".container-404").style.display = "block";
        document.querySelector(".container-404 img").style.transform = "translateY(0)";
        document.querySelector(".w-d-c").style.display = "none"
    } else {
        document.querySelector(".container-404").style.display = "none";

    }

    weatherTemp.innerHTML = `${Math.round(main.temp)}<span>°c</span>`;
    humidityLevel.innerHTML = `${main.humidity}%`;
    windSpeed.innerHTML = `${wind.speed}Km/h`;
    weatherCondition.innerHTML = `${weather[0].description}`;
    city.innerHTML = name;
    minTemp.innerHTML = `Min Temp : ${main.temp_min}°c`;
    maxTemp.innerHTML = `Max Temp : ${main.temp_max}°c`;


    switch (weather[0].main) {
        case "Clear":
            weatherConditionIcon.src = "./images/clear.png";
            document.body.style.backgroundImage = "url('./images/clearbg.webp')"
            break;
        case "Rain":
            weatherConditionIcon.src = "./images/rain.png";
            document.body.style.backgroundImage = "url('./images/rain.jpg')"
            break;
        case "Snow":
            weatherConditionIcon.src = "./images/snow.png";
            document.body.style.backgroundImage = "url('./images/snowbg.jpg')"
            break;
        case "Clouds":
            weatherConditionIcon.src = "./images/cloud.png";
            document.body.style.backgroundImage = "url('./images/Clouds.jpg')"
            break;
        case "Mist":
            weatherConditionIcon.src = "./images/mist.png";
            document.body.style.backgroundImage = "url('./images/mist.jpg')"
            break;

        default:
            weatherConditionIcon.src = "./images/clear.png";
    }
}


search.addEventListener("click", () => {
    searchIcon.classList.add("move");
})


searchIcon.addEventListener("click", () => {
    if (search.value === "") {
        document.querySelector(".warn").innerHTML = "Please Inter Any City Name...";
        document.querySelector(".w-d-c").style.display = "none"
    } else {
        getWeatherData(search.value.trim());
        document.querySelector(".w-d-c").style.display = "block"
        document.querySelector(".warn").innerHTML = "";
    }
    searchIcon.classList.remove("move");

})

