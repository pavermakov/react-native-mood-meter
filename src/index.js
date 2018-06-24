import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Store } from './store';
import { Navigator } from './navigator';
import { colors } from './config';

class App extends Component {
  render() {
    return (
      <Store>
        <SafeAreaView style={styles.container}>
          <Navigator />
          {/* tabbar */}
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
