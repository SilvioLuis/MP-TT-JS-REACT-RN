import React, { Component } from 'react';

import Header from '../../components/Header'

import './styles.css'
import Swal from 'sweetalert2'
import api from '../../services/api';

export default class Item extends Component {

    state = {
        item: {},
        loading: true
    }

    componentDidMount () {
        this._getUser();
    }

    _getUser = async () => {
        const user = await localStorage.getItem('user');
        await this.setState({ user: JSON.parse(user) });

        this._getLink();
    }
    
    _getLink = async () => {
        try {
            const id = this.props.match.params.id;
            const response = await api.get(`/items/${id}`);
            this.setState({ item: response.data, loading: false });
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
                <Header />

                {!this.state.loading && 
                    <div className="container">
                        <img 
                            className="img-fluid"
                            src={this.state.item.imagem}
                        />

                        <button
                            className="btn btn-lg btn-primary btn-block"
                            onClick={() => window.open(this.state.item.url, '_blank')}
                        >Ir para Link</button>
                    </div>
                }
            </>
        );
    }
}
