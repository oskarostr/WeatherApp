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

const showInputval = () => {
    cityName.textContent = input.value
}

button.addEventListener('click', showInputval)