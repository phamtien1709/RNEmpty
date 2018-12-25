import React, { Component } from 'react';
import { StyleSheet, AppRegistry, View } from 'react-native';

export default class Body extends Component {
    render() {
        return (
            <View style={{ flex: 8, backgroundColor: 'skyblue' }} />
        )
    }
}

AppRegistry.registerComponent('Body', () => Body);