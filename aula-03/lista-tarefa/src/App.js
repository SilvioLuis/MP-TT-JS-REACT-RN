import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'

export default class App extends Component {
	
	state = {
		logged: false
	}

	verifySession = async () => {
		const user = await localStorage.getItem('user');
		if (user) {
			this.setState({ logged: user })
		}
	}

	componentDidMount () {
		this.verifySession();
	}

	render() {
		return (
			<>
				{!this.state.logged && <Login  />}
				{this.state.logged && 
					<Router>
						<Route exact path="/" component={Home} />
					</Router>
				}
			</>
		);
	}
}