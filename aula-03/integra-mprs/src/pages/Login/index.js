import React, { Component } from 'react';

import './styles.css'

export default class Login extends Component {
    render() {
        return (
            <div id="bg_image">
                <div className="container" id="login">
                    <h3>Integra - MPRS</h3>

                    <small>Login</small>
                    <input 
                        type="text"
                        placeholder="Seu E-mail"
                        className="form-control"
                    />

                    <small>Senha</small>
                    <input 
                        type="password"
                        placeholder="Sua Senha"
                        className="form-control"
                    />

                    <button className="btn btn-lg btn-block bg-white rounded" >Entrar</button>
                </div>

                <span id="copyright">App desenvolvido pelo Ministério Público</span>
            </div>
        );
    }
}
