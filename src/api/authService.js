import decode from 'jwt-decode';

export default class AuthService {
	constructor(domain) {
		// We can pass in the backend server, or use a default for dev
		this.domain = domain || 'http://localhost:3000'
		this.fetch = this.fetch.bind(this)
		this.login = this.login.bind(this)
		this.getUserId = this.getUserId.bind(this)
	}

	// Allow a user to log in
	login(email, password) {
		// Our backend endpoint
		console.log(typeof(email));
		console.log(password);
		return this.fetch(`${this.domain}/user_token`, {
			method: 'POST',
			body: JSON.stringify({
			// We pass in email and password from the login form
				auth: {
					email,
					password
				}
			})
		}).then(res => {
			console.log("Response from authService.login:", res);
			this.setToken(res.jwt)
			return Promise.resolve(res);
		})
	}

	// Check to see if user is logged in
	loggedIn() {
		const token = this.getToken()
		return !!token && !this.isTokenExpired(token)
	}

	// Tokens are only valid for a certain period of time, determined by the server.
	isTokenExpired(token) {
		try {
			const decoded = decode(token);
			if (decoded.exp < Date.now() / 1000) {
				return true;
			} else {
				return false;
			}
		}
		catch(err) {
			return false;
		}
	}

	// The token is stored in the browser
	setToken(idToken) {
		localStorage.setItem('id_token', idToken)
	}

	// Fetch the token from local storage
	getToken() {
		return localStorage.getItem('id_token')
	}

	// Removes the token
	logout() {
		localStorage.removeItem('id_token');
	}

	// We can decode the token and find the user's ID for subsequent calls to the server
	getUserId() {
		const token = decode(this.getToken());
		return token.sub
	}

	// Add authentication headers to every fetch request
	fetch(url, options) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}

		if(this.loggedIn()) {
			headers['Authorization'] = 'Bearer ' + this.getToken()
		}

		return fetch(url, {
			headers,
			...options
		})
		.then(response => {
			console.log("1. response check status: complete");
			return this._checkStatus(response)
		})
		.then(response => {
			console.log("2. response to json: complete");
			return response.json()
		})
	}

	_checkStatus(response) {
		if (response.status >= 200 && response.status < 300) {
			console.log("1.5", response);
			return response
		} else {
			console.log("1.5 error", response);
			var error = new Error(response.statusText)
			error.response = response
			throw error
		}
	}
}
