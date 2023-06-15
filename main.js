const API_KEY = "013dfea73fc1fc9f34d25b0b43e37ced"
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const helper = "&appid="
const degree = document.querySelector("#degree")
let cityName = document.querySelector("#city-name")
const searchEl = document.querySelector("#search-el")
const searchBtn = document.querySelector("#search-btn")
const weatherIcon = document.getElementById("weather-img")


async function checkWeather(city) {
    const response = await fetch(API_URL + city + helper + API_KEY)
    var data = await response.json()
    console.log(data)

    degree.innerHTML = Math.round(data.main.temp) + "°C"
    cityName.innerHTML = data.name

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "snow.png"
    }
}
searchBtn.addEventListener("click", () =>{
  checkWeather(searchEl.value)
  resetState()
  
})
function resetState() {
    searchEl.value = ""
}
checkWeather()

