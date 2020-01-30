import React, { Component } from 'react';

import './styles.css'

export default class Header extends Component {
    render() {
        return (
            <nav className="bg-primary container">
                <i 
                    className="material-icons"
                    onClick={() => { window.dispatchEvent(new CustomEvent('openDrawer')) }}
                >menu</i>
                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)' }} className="profile"></div>
                <span>Meu Usuário</span>
            </nav>
        );
    }
}
