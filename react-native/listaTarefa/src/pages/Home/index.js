import React, { Component } from 'react';

import { 
	Appbar,
	Card,
	Title,
	Button,
} from 'react-native-paper';

import { 
    View,
    FlatList,
    StyleSheet,
    TextInput
  } from 'react-native';

export default class Home extends Component {

    state = {
		tarefas: [
			{
			  "id": 1,
			  "user_id": 1,
			  "title": "Tarefa 1",
			  "concluido": true
			},
			{
			  "id": 2,
			  "user_id": 2,
			  "title": "Tarefa 2",
			  "concluido": false
			},
			{
			  "id": 3,
			  "user_id": 3,
			  "title": "Tarefa 3",
			  "concluido": false
			},
			{
			  "id": 4,
			  "user_id": 1,
			  "title": "Tarefa 4",
			  "concluido": true
			},
			{
			  "id": 5,
			  "user_id": 1,
			  "title": "Tarefa 5",
			  "concluido": true
			},
			{
				"id": 1,
				"user_id": 1,
				"title": "Tarefa 1",
				"concluido": true
			},
			{
			"id": 2,
			"user_id": 2,
			"title": "Tarefa 2",
			"concluido": false
			},
			{
			"id": 3,
			"user_id": 3,
			"title": "Tarefa 3",
			"concluido": false
			},
			{
			"id": 4,
			"user_id": 1,
			"title": "Tarefa 4",
			"concluido": true
			},
			{
			"id": 5,
			"user_id": 1,
			"title": "Tarefa 5",
			"concluido": true
			}
		]
	}

    render() {
        return (
            <View style={styles.container}>
					
                <Appbar.Header>
                    <Appbar.Content title="Lista de Tarefas" subtitle="@username" />
                </Appbar.Header>

                <View style={styles.addContainer}>
                    <TextInput 
                        style={{ 
                            flex: 1, 
                            backgroundColor: "#fff",
                            borderWidth: 1,
                            borderColor: "#ccc",
                            marginRight: 10
                        }}
                        placeholder="Insira uma tarefa..."
                        />
                    <Button 
                        style={{ width: 50 }} 
                        mode="contained"
                    >Add</Button>
                </View>

                <FlatList 
                    data={this.state.tarefas}
                    renderItem={({ item }) => (
                        <Card style={styles.tarefa}>
                            <Card.Content>
                                <Title>{item.title}</Title>
                            </Card.Content>
                            <Card.Actions>
                                <Button>Concluir</Button>
                                <Button>Excluir</Button>
                            </Card.Actions>
                        </Card>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>	
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f1f1f1"
	},
	tarefa: {
		width: '90%',
		marginTop: 10,
		alignSelf: 'center'
	},
	addContainer: {
		flexDirection: 'row',
		paddingHorizontal: '5%',
		marginTop: 20
	}
});