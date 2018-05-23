import AuthService from './authService'
const Auth = new AuthService()

const BASE = 'http://localhost:3000'

let getApartments = function() {
	return fetch(BASE + '/apartments')
	.then((r) => {
		let json = r.json()
		console.log(json);
		return json
	})
}

let getApartment = function(id) {
	return fetch(BASE + '/apartments/' + id )
	.then((r) => {
		let json = r.json()
		console.log(json);
		return json
	})
}

let addApartment = function(apartment) {
	return fetch(BASE + '/apartments', {
		body: JSON.stringify(apartment),
		headers: {
			'Content-Type': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + Auth.getToken()
		},
		method: "POST"
	})
	.then((r) => {
		let json = r.json()
		console.log(json);
		return json
	})
}

export  {
	getApartments, getApartment, addApartment
}
