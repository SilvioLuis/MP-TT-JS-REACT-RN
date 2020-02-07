import React, { Component } from 'react';

import { 
	Provider as PaperProvider,
} from 'react-native-paper';

import { 
  StatusBar,
} from 'react-native';

import Home from './src/pages/Home'
import Login from './src/pages/Login'

export default class App extends Component {

	state = {
		logged: false
	}

	render() {
		return (
			<PaperProvider>
				<StatusBar backgroundColor="#130f40" />
				
				{!this.state.logged && <Login />}
				{this.state.logged && <Home />}
			
			</PaperProvider>
		);
	}
}