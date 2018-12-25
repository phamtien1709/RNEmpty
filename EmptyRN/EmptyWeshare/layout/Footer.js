import React, { Component } from 'react';
import { Dimensions, AppRegistry, View } from 'react-native';

export default class Footer extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'steelblue', flexDirection: 'row' }}>
                <View style={{ width: Dimensions.get('window').width / 3, height: 50, backgroundColor: 'salmon' }} />
                <View style={{ width: Dimensions.get('window').width / 3, height: 50, backgroundColor: 'gold' }} />
                <View style={{ width: Dimensions.get('window').width / 3, height: 50, backgroundColor: 'tomato' }} />
            </View>
        )
    }
}

AppRegistry.registerComponent('Footer', () => Footer);