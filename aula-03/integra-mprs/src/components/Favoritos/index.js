import React, { Component } from 'react';

import Carousel from 're-carousel'
import './styles.css'

export default class Favoritos extends Component {

    state = {
        actualPage: 1
    }

    render() {
        return (
            <div id="main_content">
                <h3 id="page_title">Integra MPRS</h3>

                <Carousel
                    onTransitionEnd={({prev, current, next}) => {
                        this.setState({
                            actualPage: current.getElementsByClassName("items")[0].id
                        })
                    }}
                >
                    <div className="items" id={1} >
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="item "> 
                                {/*<i className="material-icons exc_link">close</i>*/}
                                <div className="item_internal"> {/*  shake-little shake-constant */}
                                    <img className="img-fluid" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRH9KJ5y30TAHfNj3CFGh6vmyx52cGAU4UGTvV0be6bjXAV9xbu' />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="items" id={2}>
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="item"></div>
                        ))}
                    </div>
                    <div className="items" id={3}>
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="item"></div>
                        ))}
                    </div>
                </Carousel>

                <div className="dots">
                    <div className={`dot ${this.state.actualPage == 1 ? 'active' : ''}`}></div>
                    <div className={`dot ${this.state.actualPage == 2 ? 'active' : ''}`}></div>
                    <div className={`dot ${this.state.actualPage == 3 ? 'active' : ''}`}></div>
                </div>
            </div>
        );
    }
}
