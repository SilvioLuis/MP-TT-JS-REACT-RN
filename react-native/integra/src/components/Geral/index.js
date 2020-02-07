import React, { Component } from 'react';

import { 
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';

import Item from '../../components/Item'

import { Title } from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage'

export default class Geral extends Component {
    
    state = {
        _page: 0,
        user: {},
        links: []
    }
    
    _getUser = async () => {
        const user = await AsyncStorage.getItem('user');
        await this.setState({ user: JSON.parse(user) });
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
                <Title>Geral</Title>
                
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
                    {this.props.links.map((page, pageIndex) => (
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
                    {this.props.links.map((page, pageIndex) => (
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
