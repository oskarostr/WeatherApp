const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_KEY = '&appid=0614c6ee1bc1e5131a38f423a070cef2'
const API_LINK_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?lat='
const API_LINK_GEOCODING = 'http://api.openweathermap.org/geo/1.0/direct?q='
const API_UNITS = '&units=metric'

const getWeather = () => {
    const city = input.value || 'Warszawa'
    const URL = API_LINK_GEOCODING + city + '&limit=1' + API_KEY

    axios.get(URL)
        .then(res => {
            const lat = res.data[0].lat
            const lon = res.data[0].lon
            const URL = API_LINK_WEATHER + lat + '&lon=' + lon + API_KEY + API_UNITS
            axios.get(URL)
                .then(res => {
                    weather.textContent = res.data.weather[0].main
                    temperature.textContent = Math.floor(res.data.main.temp)
                    humidity.textContent = res.data.main.humidity
                })
        })

    cityName.textContent = input.value
}

button.addEventListener('click', getWeather)