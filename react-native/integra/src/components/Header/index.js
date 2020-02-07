import React, { Component } from 'react';

import { 
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {
    Appbar,
    Avatar 
} from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-community/async-storage'

export default class Header extends Component {
    
    state = {
        user: {}
    }

    componentDidMount() {
        this._getUser();
    }

    _getUser = async () => {
        const user = await AsyncStorage.getItem('user');
        if (user) {
            this.setState({ user: JSON.parse(user) })
        }
    }

    render() {
        return (
            <Appbar.Header>
                <TouchableOpacity>
                    <Icon size={20} name="menu" />
                </TouchableOpacity>
                {/* source={{ uri: '.....' }} */}
                <Avatar.Image size={35} source={require('../../assets/bg.jpg')} /> 
                <Appbar.Content  title={this.state.user.nome} />
            </Appbar.Header>
        );
    }
}
