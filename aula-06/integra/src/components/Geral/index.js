import React, { Component } from 'react';

import Carousel from 're-carousel'
import Swal from 'sweetalert2'
import api from '../../services/api'
import './styles.css'

import Link from '../../components/Link'

export default class Geral extends Component {

    state = {
        actualPage: 0,
        user: {},
        links: []
    }

    _getUser = async () => {
        const user = await localStorage.getItem('user');
        await this.setState({ user: JSON.parse(user) });
    }

    componentDidMount() {
        this._getUser();
    }

    render() {
        return (
            <div id="main_content">
                <h3 id="page_title">Integra - Geral</h3>

                <Carousel
                    onTransitionEnd={({prev, current, next}) => {
                        this.setState({
                            actualPage: current.getElementsByClassName("items")[0].id
                        })
                    }}
                >
                    {this.props.links.map((page, pageIndex) => (
                        <div className="items" key={pageIndex} id={pageIndex} >
                            {page.map((link, linkIndex) => (
                                <Link type="geral" key={linkIndex} link={link} />
                            ))}
                        </div>
                    ))}
                </Carousel>

                <div className="dots">
                    {this.props.links.map((page, pageIndex) => (
                        <div className={`dot ${this.state.actualPage == pageIndex ? 'active' : ''}`}></div>
                    ))}
                </div>
            </div>
        );
    }
}