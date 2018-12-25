import React, { Component } from 'react';
import { StyleSheet, AppRegistry, View } from 'react-native';
import Head from '../layout/Head';
import Body from '../layout/Body';
import Footer from '../layout/Footer';

export default class BaseView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Head></Head>
                <Body></Body>
                <Footer></Footer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 11
    }
})
//
AppRegistry.registerComponent('BaseView', () => BaseView);
