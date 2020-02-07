import React, { Component } from 'react';

import api from '../../services/api'
import Swal from 'sweetalert2'
import Drawer from 'react-motion-drawer'
import './styles.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Favoritos from '../../components/Favoritos';
import Geral from '../../components/Geral'

export default class Home extends Component {

	state = {
		user: {},
		links: [],
		actualPage: 0,
		drawerOpened: false
	}

	componentDidMount() {
		this._getUser()

		window.addEventListener('changePage', (data) => {
			this.setState({
				actualPage: data.detail.page
			})
		})

		window.addEventListener('openDrawer', () => { 
			this.setState({ drawerOpened: true }) 
		})
	}

	_getUser = async () => {
        const user = await localStorage.getItem('user');
        await this.setState({ user: JSON.parse(user) });

        this._getLinks();
	}
	
	_getLinks = async () => {
		try {

			const response = await api.get('/links');
			const links = response.data;

			this.setState({ links, actualPage: 1 });

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
			<>
				<Drawer 
                    open={this.state.drawerOpened} 
                    onChange={open => { 
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
					{this.state.actualPage == 1 && <Favoritos links={this.state.links} />}
					{this.state.actualPage == 2 && <Geral links={this.state.links} />}
					<Footer actualPage={this.state.actualPage} />
				</div>
			</>
		);
	}
}
