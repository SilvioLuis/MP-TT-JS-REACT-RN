import React, { Component } from 'react';

import './styles.css'

export default class Footer extends Component {
    render() {
        return (
            <footer id="navigation_bottom" className="bg-primary">
                <button type="button" className="active_menu">Favoritos</button>
                <button type="button">Geral</button>
            </footer>
        );
    }
}
