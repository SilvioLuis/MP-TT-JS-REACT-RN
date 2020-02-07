import React, { Component } from 'react';

import { 
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';

import { Title } from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'

import Item from '../../components/Item'

export default class Favorito extends Component {
    
    state = {
        user: {},
        favoritos: [],
        favoritos_usuario: [],
        _page: 0
    }
    
    _getUser = async () => {
        const user = await AsyncStorage.getItem('user');
        await this.setState({ user: JSON.parse(user) });

        this._getFavoritos();
    }

    _getFavoritos = async () => {
        try {

            const response = await api.get(`/favoritos?usuario_id=${this.state.user.id}`)
            const favoritos = response.data;
            {/*[1, 3, 6, 7]*/}
            
            await this.setState({ 
                favoritos_inicial: favoritos,
                favoritos: favoritos.map(f => (f.link_id )) 
            })
            this._filterFavorites();

        } catch (err) {
            Alert.alert(
                'Ops...',
                err.message,
                [
                    {
                        text: 'Tentar novamente',
                        onPress: () => {}
                    },
                ],
                { cancelable: false },
            );
        }
    }

    _filterFavorites () {
        this.setState({
            favoritos_usuario: this.props.links.map(page => {
                return page.filter(link => {
                    return this.state.favoritos.indexOf(link.id) !== -1
                })
            }).filter(page => page.length > 0)
        })
    }

    componentDidMount() {
        this._getUser();
    }

    render() {
        return (
            <View
                style={{
                    height: (Dimensions.get('window').height - 150)
                }}
            >
                <Title>Favoritos</Title>
                
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e) => {
						const scrollend = e.nativeEvent.contentOffset.x;
						const index = (scrollend > 0) ? scrollend / (Dimensions.get('window').width) : 0;
						this.setState({
							_page: Math.round(index)
						})
					}}
                >
                    {this.state.favoritos_usuario.map((page, pageIndex) => (
                        <View style={styles.page}>
                            <View style={styles.internalPage}>
                                {page.map((item, itemIndex) => (
                                    <Item key={itemIndex} type="favorito" item={item} />
                                ))}
                            </View>
                        </View>
                    ))}
                </ScrollView>
                
                <View style={styles.dotContainer}>
                    {this.state.favoritos_usuario.map((page, pageIndex) => (
                        <View style={[styles.dotItem, this.state._page == pageIndex ? styles.dotSelected : null]}></View>
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 30
    },
    dotItem: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: "#a29bfe",
        margin: 10
    },
    dotSelected: {
        backgroundColor: "#6c5ce7"
    },  
    page: {
        height: 530,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    internalPage: {
        width: '90%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    itemContainer: {
        width: 150,
        height: 150,
        margin: 10
    },
    itemCover: {
        width: 150,
        height: 150,
        borderRadius: 20
    }
});
