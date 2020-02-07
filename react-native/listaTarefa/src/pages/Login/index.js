import React, { Component } from 'react';

import { 
    View,
    StyleSheet,
    Text
} from 'react-native';

import { 
    Title, 
    Card, 
    TextInput, 
    Button 
} from 'react-native-paper'

import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'

export default class Login extends Component {

    state = {
        username: ''
    }

    _loggin = async () => {

        try {
            const response = await api.get(`/users?username=${this.state.username}`);
            const usuarios = response.data;

            if (usuarios.length === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Esse louco não existe!',
                    text: 'Mas que barbaridade.',
                })
                return false;
            }

            await AsyncStorage.setItem('user', JSON.stringify(usuarios[0]));
            window.dispatchEvent(new CustomEvent('login'));

        }
        catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Deu M...',
                text: err.message,
            })
        }
    }

    render() {
        return (
            <View style={styles.bgLogin}>
                <Title 
                    style={{ 
                        alignSelf: 'center', 
                        padding: 10, 
                        color: "#fff"
                    }}
                >Lista de Tarefas</Title>
                <Card style={styles.cardLogin}>
                    <Card.Content>
                        <Text style={styles.marginBottom}>Digite seu @username</Text>
                        <TextInput 
                            label="@username"
                            value={this.state.username}
                            onChangeText={(username) => this.setState({ username })}
                            style={styles.marginBottom}
                        />
                        <Button 
                            onPress={() => this._loggin()}
                            mode="contained"
                        >Entrar</Button>
                    </Card.Content>
                </Card>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    bgLogin: {
        flex: 1,
        backgroundColor: "#4834d4",
        padding: '5%',
        justifyContent: 'center',
    },
    marginBottom: {
        marginBottom: 10
    }
})
