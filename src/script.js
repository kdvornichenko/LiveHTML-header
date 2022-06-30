const burger = document.querySelectorAll('#burger')
const mobMenu = document.querySelector('#mobMenu')
const qurrentLocation = document.querySelector('#location')
const cityChange = document.querySelectorAll('#cityChange')
const listOfCities = document.querySelectorAll('#listOfCities')
const cities = document.querySelectorAll('#cityName')
let city = document.querySelector('#city')
console.log(listOfCities)

// Burger
burger.forEach(e =>
	e.addEventListener('click', function () {
		mobMenu.classList.toggle('-left-full')
		mobMenu.classList.toggle('left-0')
	})
)

// Смена города
if (localStorage.getItem('city')) {
	city.innerText = JSON.parse(localStorage.getItem('city'))
}

cityChange.forEach(e =>
	e.addEventListener('click', function () {
		listOfCities.forEach(e => e.classList.toggle('hide'))
		this.classList.toggle('rotate')
	})
)

// Выбор города
cities.forEach(e =>
	e.addEventListener('click', function () {
		city.innerText = this.innerText
		saveToLocalStorage()
		openListOfCities()
	})
)

function saveToLocalStorage() {
	localStorage.setItem('city', JSON.stringify(city.innerText))
}
