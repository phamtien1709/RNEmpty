import React, { Component } from 'react';
import { StyleSheet, AppRegistry, View, Button, Alert } from 'react-native';
import PizzaTranslator from '../components/PizzaTrans';
import ButtonBase from '../components/ButtonBase';

export default class Body extends Component {
    render() {
        return (
            <View style={{ flex: 8, backgroundColor: 'skyblue' }}>
                <PizzaTranslator></PizzaTranslator>
                <ButtonBase></ButtonBase>
            </View>
        )
    }
}

AppRegistry.registerComponent('Body', () => Body);