import React, { Component } from 'react';

import { 
	  StatusBar
} from 'react-native';

import { EventRegister } from 'react-native-event-listeners'
import AsyncStorage from '@react-native-community/async-storage'

import Login from './src/pages/Login'
import Home from './src/pages/Home'

export default class App extends Component {

	_listenner = null;

	state = {
		logged: false
	}

	_verifySession = async () => {
		const user = await AsyncStorage.getItem('user');
		if (user) {
			this.setState({ logged: true })
		}
	}

	componentDidMount() {
		this._verifySession();
	}

	componentWillMount() {
		this._listenner = EventRegister.addEventListener('login', () => {
			this._verifySession();
		})
	}

	componentWillUnmount() {
		EventRegister.removeEventListener(this._listenner)
	}

	render() {
		return (
			<>
				<StatusBar backgroundColor="#6c5ce7" />

				{!this.state.logged && <Login />}
				{this.state.logged && <Home />}
			</>
		);
	}
}
