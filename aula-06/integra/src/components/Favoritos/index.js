import React, { Component } from 'react';

import Carousel from 're-carousel'
import Swal from 'sweetalert2'
import api from '../../services/api'
import './styles.css'

import Link from '../../components/Link'

export default class Favoritos extends Component {

    state = {
        actualPage: 1,
        user: {},
        favoritos: [],
        favoritos_usuario: []
    }

    _getUser = async () => {
        const user = await localStorage.getItem('user');
        await this.setState({ user: JSON.parse(user) });

        this._getFavoritos();
    }

    _getFavoritos = async () => {
        try {

            const response = await api.get(`/favoritos?usuario_id=${this.state.user.id}`)
            const favoritos = response.data;
            {/*[1, 3, 6, 7]*/}
            
            await this.setState({ 
                favoritos_inicial: favoritos,
                favoritos: favoritos.map(f => (f.link_id )) 
            })
            this._filterFavorites();

        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Opps...',
                text: err.message
            })
        }
    }

    _filterFavorites () {
        this.setState({
            favoritos_usuario: this.props.links.map(page => {
                return page.filter(link => {
                    return this.state.favoritos.indexOf(link.id) !== -1
                })
            }).filter(page => page.length > 0)
        })
    }

    componentDidMount() {
        this._getUser();

        window.addEventListener('toggleFavorite', async (e) => {
            try {

                const data = e.detail;
                const link = data.link;
                let response = null;

                if (data.add) {
                    const newItem = { id: new Date().getTime(), link_id: link.id, usuario_id: this.state.user.id };
                    response = await api.post('/favoritos',  newItem)
                } else {
                    const fav = this.state.favoritos_inicial.filter(f => f.link_id == link.id)[0];
                    if (fav) {
                        response = await api.delete(`/favoritos/${fav.id}`);
                    }
                }

                if (response) {
                    this._getFavoritos();
                }

            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Opps...',
                    text: err.message
                })
            }
		})
    }

    render() {
        return (
            <div id="main_content">
                <h3 id="page_title">Integra - Favoritos</h3>

                <Carousel
                    onTransitionEnd={({prev, current, next}) => {
                        this.setState({
                            actualPage: current.getElementsByClassName("items")[0].id
                        })
                    }}
                >
                    {this.state.favoritos_usuario.map((page, pageIndex) => (
                        <div className="items" id={pageIndex} >
                            {page.map((favorito, favoritoIndex) => (
                                <Link type="favorite" key={favoritoIndex} link={favorito} />
                            ))}
                        </div>
                    ))}
                </Carousel>

                <div className="dots">
                    {this.state.favoritos_usuario.map((page, pageIndex) => (
                        <div className={`dot ${this.state.actualPage == pageIndex ? 'active' : ''}`}></div>
                    ))}
                </div>
            </div>
        );
    }
}