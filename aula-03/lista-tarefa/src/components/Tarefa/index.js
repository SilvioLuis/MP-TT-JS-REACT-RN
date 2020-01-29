import React, { Component } from 'react';
import './styles.css'

/*
    {
        title: ,
        concluido: ,
    }
*/

export default class Tarefa extends Component {

    sendEvent (evento) {
        window.dispatchEvent(new CustomEvent(evento, { detail:  this.props }))
    }

    render() {
        return (
            <div className={`card ${this.props.concluido ? 'concluido' : ''}`}>
                <div className="card-body">
                    <h5 className={`card-title ${this.props.concluido ? 'concluido' : ''}`}>{this.props.title}</h5>

                    <div className="btn-group">
                        
                        {
                            this.props.concluido 
                                ? <button onClick={() => { this.sendEvent('desconcluir'); }} type="button" class="btn btn-warning">Desconcluir</button>
                                : <button onClick={() => { this.sendEvent('concluir'); }} type="button" class="btn btn-success">Concluir</button>
                        }

                        <button onClick={() => { this.sendEvent('excluir'); }} type="button" class="btn btn-danger">Excluir</button>
                    </div>

                </div>
            </div>
        );
    }
}