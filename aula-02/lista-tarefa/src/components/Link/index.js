import React, { Component } from 'react';

import Swal from 'sweetalert2'

export default class Link extends Component {

    _buttonPressTimer = null;

    state = {
        holdSelected: false
    }

    componentDidMount() {
        window.addEventListener('toggleHold', () => this.setState({ holdSelected: !this.state.holdSelected }))
    }

    _toggleHold () {
        window.dispatchEvent(new CustomEvent('toggleHold'))    
    }

    _handleButtonPress () {
        this._buttonPressTimer = setTimeout(() => this._toggleHold(), 1000);
    }

    _handleButtonRelease (_buttonPressTimer) {
        clearTimeout(_buttonPressTimer);
    }

    _handleClick = async () => {
        if (!this.state.holdSelected) {
            ///window.open(this.props.link.url, '_blank');
            window.location.href = `http://localhost:3000/${this.props.link.id}`
        } else {
            window.dispatchEvent(new CustomEvent('toggleFavorite', 
            { detail: 
                { 
                    link: this.props.link,
                    add: this.props.type == "geral"
                } 
            }))

            Swal.fire({
                icon: 'success',
                title: 'Processado com sucesso!',
                text: this.props.type == "geral" 
                        ? "Link favoritado" 
                        : "Link removido dos favoritos"
            })
        }
    }

    render() {
        return (
            <div 
                key={this.props.key} 
                className="item"
                onTouchStart={() => this._handleButtonPress()} 
                onTouchEnd={() =>  this._handleButtonRelease(this._buttonPressTimer)} 
                onMouseDown={() =>  this._handleButtonPress()} 
                onMouseUp={() => this._handleButtonRelease(this._buttonPressTimer)} 
                onMouseLeave={() =>  this._handleButtonRelease(this._buttonPressTimer)}
            > 
                {this.state.holdSelected && 
                    <i 
                        className={`material-icons 
                            ${this.props.type == "favorite" 
                            ? 'exc_link' 
                            : 'add_link'}`
                        }
                    >
                        {this.props.type == "favorite" ? 'close' : 'add'}
                    </i>
                }
                <div 
                    onClick={() => this._handleClick()}
                    className={`item_internal 
                        ${this.state.holdSelected 
                            ? 'shake-little shake-constant' 
                            : ''
                        }`
                    }>
                    <img className="img-fluid" src={this.props.link.imagem} />
                </div>
            </div>
        );
    }
}
