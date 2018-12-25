import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <View>
                <Text>Hello {this.props.sureName} {this.props.name}!</Text>
            </View>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View>
                <Greeting name='Rexxar' sureName="Abort" />
                <Greeting name='Jaina' sureName="Samantha" />
                <Greeting name='Valeera' sureName="Choke" />
            </View >
        );
    }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('LotsOfGreetings', () => LotsOfGreetings);
