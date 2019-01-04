import React, { Component } from 'react';
import { Dimensions, AppRegistry, View } from 'react-native';
import ButtonBase from '../components/ButtonBase';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'steelblue', flexDirection: 'row' }}>
                <View style={{ width: Dimensions.get('window').width / 3, flex: 1, backgroundColor: 'salmon' }}>
                    <ButtonBase></ButtonBase>
                </View>
                <View style={{ width: Dimensions.get('window').width / 3, flex: 1, backgroundColor: 'gold' }} />
                <View style={{ width: Dimensions.get('window').width / 3, flex: 1, backgroundColor: 'tomato' }} />
            </View>
        )
    }
}

AppRegistry.registerComponent('Footer', () => Footer);