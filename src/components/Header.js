import React, {Component} from 'react'

class Header extends Component {
	render() {
		let headerStyles = {
			height: 60,
			width: "100%",
			padding: "10px 100px",
			display: "flex",
			justifyContent: "space-between"
		}

		let navStyles = {
			width: 400,
			display: "flex",
			justifyContent: "space-around",
			listStyleType: "none"
		}
		return (
			<div style={headerStyles}>
				<div><a href="/">Logo</a></div>
				<nav>
					<ul style={navStyles}>
						<li><a href="/apartments">All Apartments</a></li>
						<li><a href="/apartments/new">Add Apartment</a></li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default Header
