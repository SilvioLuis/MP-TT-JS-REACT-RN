import React, { Component } from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Favoritos from '../../components/Favoritos'

import Drawer from 'react-motion-drawer';

import './styles.css'

export default class Home extends Component {

    state = {
        drawerOpened: false
    }

    componentDidMount() {
        window.addEventListener('openDrawer', () => { this.setState({ drawerOpened: true }) })
    }

    render() {
        return (
            <>
                <Drawer 
                    open={this.state.drawerOpened} 
                    noTouchOpen
                    noTouchClose
                    onChange={(open) => { 
                        this.setState({ drawerOpened: open })
                    }}
                    drawerStyle={{
                        backgroundColor: "#6e25ad"
                    }}
                >
                    <ul id="mainMenu">
                        <li>Meu Perfil</li>
                        <li>Configurações</li>
                        <li>Favoritos</li>
                        <li>FAQ</li>
                        <li>Perfil</li>
                    </ul>
                </Drawer>
                <div id="home">
                    <Header />
                    
                    <Favoritos />
                
                    <Footer />
                </div>
            </>
        );
    }
}
