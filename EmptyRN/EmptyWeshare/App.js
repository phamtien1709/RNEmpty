import React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseView from './components/BaseView';
import BigPenis from './components/BigPenis';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BigPenis></BigPenis>
        <BaseView></BaseView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f45a23'
  },
});
