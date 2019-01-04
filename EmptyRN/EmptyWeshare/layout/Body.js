import React, { Component } from 'react';
import { StyleSheet, AppRegistry, View } from 'react-native';
import FlatListBasics from '../components/FlatListBasic';
import SectionListBasics from '../components/SectionListBasic';
import FetchExample from '../components/FetchExample';

export default class Body extends Component {
    render() {
        return (
            <View style={{ flex: 8, backgroundColor: 'skyblue' }}>
                <FetchExample></FetchExample>
            </View>
        )
    }
}

AppRegistry.registerComponent('Body', () => Body);