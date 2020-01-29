import React, { Component } from 'react';

import Carousel from 're-carousel'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './styles.css'

export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <Header />
                
                <div id="main_content">
                    <h3 id="page_title">Integra MPRS</h3>

                    <Carousel>
                        <div id="items">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="item"></div>
                            ))}
                        </div>
                        <div id="items">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="item"></div>
                            ))}
                        </div>
                        <div id="items">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="item"></div>
                            ))}
                        </div>
                    </Carousel>
                </div>

                <Footer />
            </div>
        );
    }
}
