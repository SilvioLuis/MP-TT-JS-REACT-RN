import React, { Component } from 'react';

import './styles.css'

export default class Footer extends Component {

    _setPage(page) {
        window.dispatchEvent(new CustomEvent('changePage', { detail: { page } }))
    }

    render() {
        return (
            <footer id="navigation_bottom" className="bg-primary">
                <button className={this.props.actualPage == 1 ? 'active_menu' : ''} onClick={() => this._setPage(1)} type="button">Favoritos</button>
                <button className={this.props.actualPage == 2 ? 'active_menu' : ''} onClick={() => this._setPage(2)}type="button">Geral</button>
            </footer>
        );
    }
}