import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import ApartmentCtr from './containers/ApartmentContainer'


import Login from './pages/Login';
import Header from './components/Header'


class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Router>
					<div>
						<Route path="/apartments" component={ApartmentCtr} />
						<Route path="/login" component={Login} />
						<Route exact path="/" component={Home} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
