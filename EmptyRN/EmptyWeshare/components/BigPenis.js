import React, { Component } from 'react';
import { AppRegistry, Image, View, StyleSheet, Dimensions } from 'react-native';

export default class BigPenis extends Component {
    render() {
        let pic = {
            uri: 'https://11veok1mf4bu3zvoiz4atmfn-wpengine.netdna-ssl.com/wp-content/uploads/2014/10/tmas2018.jpg'
        }
        return (
            <View style={styles.container}>
                <Image source={pic} style={{ width: Dimensions.get('window').width, height: 115 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1
    }
}
);

AppRegistry.registerComponent('BigPenis', () => BigPenis);