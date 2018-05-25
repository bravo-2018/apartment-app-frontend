import React, {Component} from 'react'
import {getApartments} from '../api'

// console.log(getApartments());

class Apartments extends Component {
	constructor(props){
		super(props)
		this.state = {
			status: "loading",
			apartments: []
		}
	}

	componentWillMount() {
		getApartments()
		.then(json => {
			// console.log(json);
			this.setState({
				status: "loaded",
				apartments: json
			})
		})
	}

	render() {
		const { apartments, status } = this.state

		let listStyles = {
			display: "flex",
			justifyContent: "space-around",
			marginTop: 50
		}

		let cardStyles = {
			padding: "20px",
			border: "1px solid #545454",
			borderRadius: "3px",
			minWidth: "250px",
			textAlign: "center"
		}

		const list = apartments.map(a => {
			let url = "/apartments/" + a.id
			return (
				<a href={url} style={cardStyles}>
					<li key={a.id}>{a.name}</li>
				</a>
			)
		})
		return (
			<main>
				<h1>This is a list of apartments</h1>
				<ul style={listStyles}>
					{list}
				</ul>
			</main>
		)
	}
}

export default Apartments
