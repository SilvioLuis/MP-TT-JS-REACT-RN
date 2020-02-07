import React, { Component } from 'react';

import api from '../../services/api'
import Swal from 'sweetalert2'
import './styles.css'

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
                Swal.fire({
                    icon: 'error',
                    title: 'Opps...',
                    text: 'Nenhum usuário encontrado.'
                })
                return false;
            }

            await localStorage.setItem('user', JSON.stringify(usuarios[0]))
            window.dispatchEvent(new CustomEvent('login'));

        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Opps...',
                text: err.message
            })
        }
    }

    render() {
        return (
            <div id="bg_image">
                <div className="container" id="login">
                    <h3>Integra - MPRS</h3>

                    <small>CPF</small>
                    <input 
                        type="text"
                        placeholder="Seu CPF"
                        className="form-control"
                        value={this.state.cpf}
                        onChange={(e) => this.setState({ cpf: e.target.value })}
                    />

                    <small>Senha</small>
                    <input 
                        type="password"
                        placeholder="Sua Senha"
                        className="form-control"
                        value={this.state.senha}
                        onChange={(e) => this.setState({ senha: e.target.value })}
                    />

                    <button onClick={() => this._login()} className="btn btn-lg btn-block bg-white rounded" >Entrar</button>
                </div>

                <span id="copyright">App desenvolvido pelo Ministério Público</span>
            </div>
        );
    }
}
