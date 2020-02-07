import React, { Component } from 'react';

import { 
    View,
} from 'react-native';

import { EventRegister } from 'react-native-event-listeners'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Favorito from '../../components/Favorito'
import Geral from '../../components/Geral'

export default class Home extends Component {

    state = {
        actualPage: 0,
        user: {},
		links: [],
    }

    componentWillMount() {
        EventRegister.addEventListener('changePage', (actualPage) => {
			this.setState({ actualPage })
		})
    }

    componentDidMount() {
        this._getUser()
    }

    _getUser = async () => {
        const user = await AsyncStorage.getItem('user');
        await this.setState({ user: JSON.parse(user) });

        this._getLinks();
    }
    
    _getLinks = async () => {
		try {

			const response = await api.get('/links');
			const links = response.data;

			this.setState({ links, actualPage: 1 });

		} catch (err) {
            Alert.alert(
                'Ops...',
                err.message,
                [
                    {
                        text: 'Tentar novamente',
                        onPress: () => {}
                    },
                ],
                { cancelable: false },
            );
        }
	}

    render() {
        return (
            <View>
                <Header />

                {this.state.actualPage == 1 && <Favorito links={this.state.links} />}
                {this.state.actualPage == 2 && <Geral links={this.state.links} />}

                <Footer />
            </View>
        );
    }
}
