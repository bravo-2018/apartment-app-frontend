import React, { Component } from 'react';
import AuthService from '../api/authService';

import './login.css';

class Login extends Component {
	constructor(props){
		super(props)
		this.Auth = new AuthService()
		this.state = {
			email: '',
			password: ''
		}
	}

	handleFormSubmit(e) {
		console.log(this.state);
		e.preventDefault()
		this.Auth.login(this.state.email, this.state.password)
		.then(res =>{
			console.log(res);
			this.props.history.replace('/')
		})
		.catch(err =>{ alert(err) })
	}

	handleChange(e){
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		return (
			<div className="center">
				<div className="card">
					<h1>Login</h1>
					<form onSubmit={this.handleFormSubmit.bind(this)}>
						<input
							className="form-item"
							placeholder="email goes here..."
							name="email"
							type="text"
							onChange={this.handleChange.bind(this)}
							value={this.state.email}
						/>
						<input
							className="form-item"
							placeholder="Password goes here..."
							name="password"
							type="password"
							onChange={this.handleChange.bind(this)}
							value={this.state.password}
						/>
						<input
							className="form-submit"
							value="Login"
							type="submit"
						/>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
