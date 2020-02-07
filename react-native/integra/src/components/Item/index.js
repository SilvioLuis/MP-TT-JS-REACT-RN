import React, { Component } from 'react';

import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Linking
} from 'react-native';

export default class Item extends Component {

    render() {

        return (
            <TouchableOpacity 
                style={styles.itemContainer}
                onPress={() => {
                    Linking.openURL(this.props.item.url)
                }}
            >
                <Image 
                   source={require('../../assets/links/1.jpg')} 
                   style={styles.itemCover}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        width: 150,
        height: 150,
        margin: 10
    },
    itemCover: {
        width: 150,
        height: 150,
        borderRadius: 20,
        borderColor: "#6c5ce7",
        borderWidth: 1
    }
});
