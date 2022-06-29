/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.{html,js}'],
	theme: {
		backgroundColor: {
			black: '#252525',
			yellow: '#FFCC00',
			white: '#ffffff',
		},
		container: {
			center: true,
		},
		colors: {
			black: '#252525',
			grey: '#D7D7D7',
			white: '#ffffff',
			yellow: '#FFCC00',
		},
		extend: {
			backgroundImage: {
				arrow: 'url("../src/img/change-city-arrow.svg")',
				balance: 'url("../src/img/balance.svg")',
				banner1280: 'url("../src/img/banner1280.svg")',
				banner1024: 'url("../src/img/banner1024.svg")',
				search: 'url("../src/img/search-icon.svg")',
				shoppingCart: 'url("../src/img/shopping-cart.svg")',
				star: 'url("../src/img/star.svg")',
			},
			boxShadow: {
				nav: '0px 2px 3px rgba(0, 0, 0, 0.25)',
			},
		},
		fontFamily: {
			heliosCond: 'HeliosCond',
			roboto: 'Roboto',
		},
	},
	plugins: [],
}
