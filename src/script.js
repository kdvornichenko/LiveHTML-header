const burger = document.querySelectorAll('#burger')
const mobMenu = document.querySelector('#mobMenu')
const qurrentLocation = document.querySelector('#location')
const cityChange = document.querySelectorAll('#cityChange')
const listOfCities = document.querySelectorAll('#listOfCities')
const cities = document.querySelectorAll('#cityName')
let city = document.querySelectorAll('#city')

// Burger
burger.forEach(e =>
	e.addEventListener('click', function () {
		mobMenu.classList.toggle('-left-full')
		mobMenu.classList.toggle('left-0')
	})
)

// Смена города
if (localStorage.getItem('city')) {
	city.forEach(e => (e.innerText = JSON.parse(localStorage.getItem('city'))))
}

cityChange.forEach(e => e.addEventListener('click', openListOfCities))

function openListOfCities() {
	listOfCities.forEach(e => e.classList.toggle('hide'))
	cityChange.forEach(e => e.classList.toggle('rotate'))
}

// Выбор города
cities.forEach(e =>
	e.addEventListener('click', function () {
		city.forEach(e => (e.innerText = this.innerText))
		openListOfCities()
		saveToLocalStorage()
	})
)

function saveToLocalStorage() {
	localStorage.setItem('city', JSON.stringify(city[0].innerText))
}
