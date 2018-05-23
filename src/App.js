import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Apartments from './pages/Apartments'
import AddApartment from './pages/AddApartment'
import ShowApartment from './pages/ShowApartment'
import Login from './pages/Login';
import Header from './components/Header'


class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Router>
					<Switch>
						<Route exact path="/apartments" component={Apartments} />
						<Route exact path="/apartments/new" component={AddApartment} />
						<Route path="/apartments/:id" component={ShowApartment} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/" component={Home} />
			  		</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
