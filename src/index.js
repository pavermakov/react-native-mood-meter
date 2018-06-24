import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Store } from './store';
import { Navigator } from './navigator';
import { TabBar } from './containers/TabBar';
import { colors } from './config';

class App extends Component {
  render() {
    return (
      <Store>
        <SafeAreaView style={styles.container}>
          <Navigator />
          <TabBar />
        </SafeAreaView>
      </Store>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
