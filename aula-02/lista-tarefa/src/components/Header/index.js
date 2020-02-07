import React, { Component } from 'react';

import './styles.css'

export default class Header extends Component {

    state = {
        user: {}
    }

    componentDidMount() {
        this._getUser()
    }

    _getUser = async () => {
        const user = await localStorage.getItem('user');
        this.setState({ user: JSON.parse(user) })
    }

    render() {
        return (
            <nav className="bg-primary container">
                <i 
                    className="material-icons"
                    onClick={() => { window.dispatchEvent(new CustomEvent('openDrawer')) }}
                >menu</i>
                <div style={{ backgroundImage: `url(${this.state.user.foto})` }} className="profile"></div>
                <span>{this.state.user.nome}</span>
            </nav>
        );
    }
}