const qurrentLocation = document.querySelector('#location')
let city = document.querySelector('#city')
const cityChange = document.querySelector('#cityChange')
const listOfCities = document.querySelector('#listOfCities')
const cities = listOfCities.querySelectorAll('li')

// Слайдер
// const swiper = new Swiper('.swiper', {
// 	slidesPerView: 3,

// 	// Optional parameters
// 	direction: 'horizontal',
// 	loop: true,
	

// 	// If we need pagination
// 	pagination: {
// 		el: '.swiper-pagination',
// 	},

// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},

// 	// And if we need scrollbar
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 	},

// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1,
// 			spaceBetween: 20,
// 		},
// 		1280: {
// 			slidesPerView: 3,
// 			spaceBetween: 0,
// 		},
// 	},
// })



// Смена города
if (localStorage.getItem('city')) {
	city.innerText = JSON.parse(localStorage.getItem('city'))
}

cityChange.addEventListener('click', openListOfCities)

function openListOfCities() {
	listOfCities.classList.toggle('show')
	listOfCities.classList.toggle('hide')
	cityChange.classList.toggle('rotate')
}

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
