import React, { Component } from 'react';

import Tarefa from './components/Tarefa'

export default class App extends Component {

	state = {
		titulo: '',
		tarefas: [
			{ title: 'Tarefa 1', concluido: true },
			{ title: 'Tarefa 2', concluido: false },
			{ title: 'Tarefa 3', concluido: false },
			{ title: 'Tarefa 4', concluido: true }
		]
	}

	addTarefa(titulo) {
		this.setState({
			tarefas: [
				...this.state.tarefas,
				{ title: titulo, concluido: false }
			]
		})
	}

	render() {
		return (
			<div>
				<h1>Lista de Tarefas</h1>
				<input 
					onChange={(e) => { 
						this.setState({ 
							titulo: e.target.value 
						}) 
					}} 
					placeholder="Digite um titulo" type="text"
				/>
				
				<button 
					onClick={() => { 
						this.addTarefa(this.state.titulo) 
					}}
				>
					Adicionar Tarefa
				</button>

				{
					this.state.tarefas.map(
						(tarefa) => (
							<Tarefa concluido={tarefa.concluido} title={tarefa.title} />
						)
					)
				}
			</div>
		);
	}
}
