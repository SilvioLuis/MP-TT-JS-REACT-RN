import React, { Component } from 'react';

/*
    {
        title: ,
        concluido: ,
    }
*/

export default class Tarefa extends Component {
    render() {
        return (
            <div>
                <span>{this.props.title}</span>
                <a href="javascript:void(0)">Excluir</a>
            </div>
        );
    }
}
