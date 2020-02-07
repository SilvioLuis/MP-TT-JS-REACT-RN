import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'
import Item from './pages/Item'


export default class App extends Component {

	state = {
		logged: false
	}

	_verifySession = async () => {
		const user = await localStorage.getItem('user');
		if (user) {
			this.setState({ logged: true })
		}
	}

	componentDidMount() {
		this._verifySession();
		window.addEventListener('login', () => this._verifySession())
	}

	render() {
		return (
			<>
				{!this.state.logged && <Login />}
				{this.state.logged && (
					<Router>
						<Route path="/" exact component={Home} />
						<Route path="/:id" exact component={Item} />
					</Router>
				)}
			</>
		);
	}
}
