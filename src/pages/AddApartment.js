import React, {Component} from 'react'
import {addApartment} from '../api'

import { Redirect } from "react-router-dom"
import WithAuth from '../components/WithAuth'

class AddApartment extends Component {

	constructor(props) {
		super(props)
		this.state = {
			form: {
				name: "",
				street1: "",
				city: "",
				manager: "",
				phone: ""
			},
			POSTsuccess: false,
		}
	}

	handleInput(e) {
		// get the form object out of state
		let {form} = this.state

		// update copied form object with the new value
		form[e.target.name] = e.target.value

		// update state
		this.setState({
			form
		})
	}

	handleSubmit(e) {
		// get the completed form information from state
		let {form} = this.state

		console.log(form);

		// call the API addAparment function
		addApartment(form)
		.then(resp => {
			console.log(resp);
			this.setState({
				POSTsuccess: true
			})
		})
	}

	render() {
		let styles = {
			height: "30px",
			width: "300px",
			backgroundColor: "#545454",
			color: "#FFF",
			borderRadius: "4px",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}

		return (
			<div>
				<form>
					<input
						placeholder="name"
						type="text"
						name="name"
						onChange={this.handleInput.bind(this)}
					/>
					<input
						placeholder="street"
						type="text"
						name="street1"
						onChange={this.handleInput.bind(this)}
					/>
					<input
						placeholder="city"
						type="text"
						name="city"
						onChange={this.handleInput.bind(this)}
					/>
					<input
						placeholder="manager"
						type="text"
						name="manager"
						onChange={this.handleInput.bind(this)}
					/>
					<input
						placeholder="phone"
						type="text"
						name="phone"
						onChange={this.handleInput.bind(this)}
					/>
					<div
						style={styles} onClick={this.handleSubmit.bind(this)}>
						Create Apartment
					</div>
				</form>
				{this.state.POSTsuccess && <Redirect to={"/apartments"} />}
			</div>
		)
	}
}

export default WithAuth(AddApartment)
