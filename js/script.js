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
    const city = input.value || 'Poznan'
    const URL = API_LINK_GEOCODING + city + '&limit=1' + API_KEY

    axios.get(URL)
        .then(res => {
            const lat = res.data[0].lat
            const lon = res.data[0].lon
            const URL = API_LINK_WEATHER + lat + '&lon=' + lon + API_KEY + API_UNITS

            axios.get(URL)
                .then(res => {
                    weather.textContent = res.data.weather[0].main
                    temperature.textContent = Math.floor(res.data.main.temp) + '℃'
                    humidity.textContent = res.data.main.humidity + '%'

                    const status = res.data.weather[0].id

                    if(status >= 200 && status <= 232) {
                        photo.setAttribute('src', './img/thunderstorm.png')
                    } else if (status >= 300 && status <= 321) {
                        photo.setAttribute('src', './img/shower_rain.png')
                    } else if (status >= 500 && status <= 504) {
                        photo.setAttribute('src', './img/rain.png')
                    } else if (status === 511) {
                        photo.setAttribute('src', './img/snow.png')
                    } else if (status > 511 && status <= 531) {
                        photo.setAttribute('src', './img/shower_rain.png')
                    } else if (status >= 600 && status <= 622) {
                        photo.setAttribute('src', './img/snow.png')
                    } else if (status >= 701 && status <= 781) {
                        photo.setAttribute('src', './img/mist.png')
                    } else if (status === 800) {
                        photo.setAttribute('src', './img/clear.png')
                    } else if (status === 801) {
                        photo.setAttribute('src', './img/few_clouds.png')
                    } else if (status === 802) {
                        photo.setAttribute('src', './img/scattered_clouds.png')
                    } else if (status === 803 || status === 804) {
                        photo.setAttribute('src', './img/broken_clouds.png')
                    }
                })
                .catch(err => console.error(err))
        })
        .catch(err => console.error(err))

    cityName.textContent = input.value || 'Poznan'
}

getWeather()
button.addEventListener('click', getWeather)