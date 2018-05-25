import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Apartments from '../pages/Apartments'
import AddApartment from '../pages/AddApartment'
import ShowApartment from '../pages/ShowApartment'
import AuthService from '../api/authService'

const Auth = new AuthService()

class ApartmentContainer extends Component {
	render() {
		return (
			<div>
				{Auth.loggedIn()
					? <Switch>
						<Route
							exact
							path={"/apartments/new"}
							render={() => <AddApartment />}
						/>
						<Route
							exact
							path={`${this.props.match.url}/:id`}
							component={ShowApartment}
						/>
					</Switch>
					: <Switch>
						<Route
							exact
							path={this.props.match.url}
							render={() => <Apartments />}
						/>
						<Redirect from="/apartments/new" to="/apartments"/>
						<Redirect from={`${this.props.match.url}/:id`} to="/apartments"/>
					</Switch>
				}
			</div>
		)
	}
}

export default ApartmentContainer
