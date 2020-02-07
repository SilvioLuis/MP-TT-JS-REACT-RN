import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

import { EventRegister } from 'react-native-event-listeners'

export default class Footer extends Component {
    
    state = {
        actualPage: 1
    }

    _changePage (actualPage) {
        EventRegister.emit('changePage', actualPage)
        this.setState({ actualPage })
    }
    
    render() {
        return (
            <View
                style={{
                    height: 70,
                    backgroundColor: "#a29bfe",
                    width: '100%',
                    flexDirection: 'row'
                }}
            >
                <TouchableOpacity
                    style={[styles.footerButton, this.state.actualPage == 1 ? styles.activeButton : null]}
                    onPress={() => { this._changePage(1) }}
                >
                    <Text style={styles.footerText}>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.footerButton, this.state.actualPage == 2 ? styles.activeButton : null]}
                    onPress={() => { this._changePage(2) }}
                >
                    <Text style={styles.footerText}>Geral</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    footerButton: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        color: "#fff"
    },
    activeButton: {
        backgroundColor: "#6c5ce7"
    }
})