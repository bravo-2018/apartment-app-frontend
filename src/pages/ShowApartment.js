import React, {Component} from 'react'
import {getApartment} from '../api'

class ShowApartment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			status: "loading",
			apartment: ""
		}
	}

	componentWillMount() {
		getApartment(this.props.match.params.id)
		.then(json => {
			// console.log(json);
			this.setState({
				status: "loaded",
				apartment: json
			})
		})
	}

	render() {
		let { name, phone, street1, city, manager } = this.state.apartment
		return (
			<main>
				<img src="http://via.placeholder.com/350x150" alt="image of apartment" />
				<h3>{name}</h3>
				<p>{street1}</p>
				<p>{city}</p>
				<p>{phone}</p>
				<h5>If interested, please contact the building manager: {manager} at {phone}</h5>
			</main>
		)
	}
}

export default ShowApartment
