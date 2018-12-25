import React, { Component } from 'react';
import { StyleSheet, AppRegistry, View } from 'react-native';

export default class Head extends Component {
    render() {
        return (
            <View style={{ flex: 2, backgroundColor: 'powderblue' }} />
        )
    }
}

AppRegistry.registerComponent('Head', () => Head);