import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { key: '1' },
                        { key: '2' },
                        { key: '3' },
                        { key: '4' },
                        { key: '5' },
                        { key: '6' },
                        { key: '7' },
                        { key: '8' },
                        { key: '9' },
                        { key: '10' },
                        { key: '11' },
                        { key: '12' },
                        { key: '13' },
                        { key: '14' },
                        { key: '15' }
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        fontSize: 18,
        height: 44,
    },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('FlatListBasics', () => FlatListBasics);
