import React, { Component } from 'react';

import Tarefa from './components/Tarefa'
import './styles.css';

export default class App extends Component {
	
	state = {
		titulo: '',
		tarefas: [
			{ id: 1, title: 'Tarefa 1', concluido: true },
			{ id: 2, title: 'Tarefa 2', concluido: false },
			{ id: 3, title: 'Tarefa 3', concluido: false },
			{ id: 4, title: 'Tarefa 4', concluido: true }
		]
	}

	componentDidMount() {
		window.addEventListener('concluir', (tarefa) => { this.setTarefa(tarefa) });
		window.addEventListener('desconcluir', (tarefa) => { this.setTarefa(tarefa) });
		window.addEventListener('excluir', (tarefa) => { this.setTarefa(tarefa) });
	}

	setTarefa (event) {
		const tarefa = event.detail;
		if (event.type == "concluir" || event.type == "desconcluir") {
			const index = this.state.tarefas.indexOf(
				this.state.tarefas.filter((t) => t.id == tarefa.id)[0]
			);
			this.state.tarefas[index].concluido = event.type == 'concluir';
			this.forceUpdate();
		}
		
		if (event.type == "excluir") {
			const index = this.state.tarefas.indexOf(
				this.state.tarefas.filter((t) => t.id == tarefa.id)[0]
			);
			this.state.tarefas.splice(index, 1);
			this.forceUpdate();
		}
	}

	addTarefa(titulo) {
		this.setState({
			tarefas: [
				{ title: titulo, concluido: false, id: new Date().getTime() },
				...this.state.tarefas
			],
			titulo: ''
		})
	}

	render() {
		return (
			<div>
				<nav className="nav bg-danger">
					<div className="container">
						<h6 id="titulo">Lista de Tarefas</h6>
					</div>
				</nav>
				{/* CONTAINER QUE ENVOVE TOTA A APLICAÇÃO */}
				<div className="container">

					{/* INPUT PARA ADICIONAR TAREFA E BOTÃO */}
					<div className="input-group mb-3">

						<input 
							onChange={(e) => { 
								this.setState({ 
									titulo: e.target.value 
								}) 
							}} 
							value={this.state.titulo}
							type="text" 
							className="form-control" 
							placeholder="Digite uma tarefa" 
						/>

						<div className="input-group-append">
							<button 
								className="btn btn-outline-secondary" 
								type="button" 
								onClick={() => { 
									this.addTarefa(this.state.titulo) 
								}}
							>
								Adicionar Tarefa
							</button>
						</div>
					</div>

					{
						this.state.tarefas.map(
							(tarefa) => (
								<Tarefa id={tarefa.id} concluido={tarefa.concluido} title={tarefa.title} />
							)
						)
					}
				</div>
				</div>
		);
	}
}