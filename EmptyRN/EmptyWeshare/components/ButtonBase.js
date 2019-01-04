import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBase extends Component {
    _onPressButton() {
        Alert.alert('TAPPED!');
    }

    constructor(configs) {
        super();
        this.configs = {
            name_btn: "One"
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this._onPressButton}
                    title={this.configs.name_btn}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('ButtonBase', () => ButtonBase);
