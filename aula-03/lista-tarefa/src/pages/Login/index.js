import React, { Component } from 'react';

import './styles.css'
import Swal from 'sweetalert2'

export default class Login extends Component {
    

    _loggin = () => {
        Swal.fire('Any fool can use a computer')
    }

    render() {
        return (
            <div id="login" className="bg-danger">
                <div className="container">
                    <h1>Lista de Tarefas</h1>

                    <div className="card" id="card_login">
                        <div className="card-body">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="digite seu @username"
                            />
                            <button onClick={() => { this._loggin() }} className="btn btn-block btn-success btn-lg" >Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
