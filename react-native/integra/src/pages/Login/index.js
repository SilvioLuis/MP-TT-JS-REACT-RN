import React, { Component } from 'react';

import { 
    View,
    Text,
    ImageBackground,
    Dimensions,
    Alert
} from 'react-native';

import { 
    TextInput,
    Button, 
    Title 
} from 'react-native-paper'

import AsyncStorage from '@react-native-community/async-storage'
import { EventRegister } from 'react-native-event-listeners'

import api from '../../services/api'

export default class Login extends Component {

    state = {
        cpf: '',
        senha: ''
    }

    _login = async () => {
        try {

            const response = await api.get(`/users?cpf=${this.state.cpf}&senha=${this.state.senha}`)
            const usuarios = response.data;

            if (usuarios.length == 0) {
                Alert.alert(
                    'Usuário não encontrado.',
                    'CPF ou Senha estão inválidos. Tente novamente.',
                    [
                        {
                            text: 'Tentar novamente',
                            onPress: () => {}
                        },
                    ],
                    { cancelable: false },
                );
                return false;
            }

            await AsyncStorage.setItem('user', JSON.stringify(usuarios[0]))
            EventRegister.emit('login');

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
            <ImageBackground
                source={require('../../assets/bg.jpg')}
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                    padding: 20,
                    justifyContent: 'center',
                    alignContent: 'center'
                }}
            >
                <View  style={{  height: 300  }} >
                    <Title 
                        style={{
                            alignSelf: 'center',
                            color: "#fff",
                            padding: 10,
                            fontSize: 35
                        }}
                    >INTEGRAMPRS</Title>
                    
                    <TextInput 
                        label="Seu CPF"
                        placeholder="Seu CPF"
                        mode="outlined" 
                        value={this.state.cpf}
                        onChangeText={(cpf) => { this.setState({ cpf }) }}
                    />

                    <TextInput 
                        label="Sua Senha"
                        placeholder="Sua Senha"
                        secureTextEntry
                        mode="outlined" 
                        value={this.state.senha}
                        onChangeText={(senha) => { this.setState({ senha }) }}
                    />

                    <Button 
                        mode="contained"
                        style={{ marginTop: 30 }}
                        onPress={() => {
                            this._login();
                        }}
                    >Entrar</Button>

                    <Text 
                        style={{ 
                            marginTop: 20,
                            alignSelf: 'center',
                            color: "#fff"
                        }}
                    >Esqueceu sua senha ou usuário?</Text>
                </View>


            </ImageBackground>
        );
    }
}
