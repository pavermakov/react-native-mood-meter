import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StoreContext } from '../../store';
import { TabBarItem } from '../../components/TabBarItem';
import { screens } from '../../config';
import s from './TabBar.styles';

class TabBar extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {({currentScreen, setCurrentScreen}) => (
          <View style={s.container}>
            <TabBarItem
              isActive={currentScreen.navTitle === screens.mood.navTitle}
              isFirst={true}
              text={screens.mood.navTitle}
              onPress={() => setCurrentScreen(screens.mood)}
            />

            <TabBarItem
              isActive={currentScreen.navTitle === screens.stats.navTitle}
              text={screens.stats.navTitle}
              onPress={() => setCurrentScreen(screens.stats)}
            />
          </View>
        )}
      </StoreContext.Consumer>
    );
  }
}

export default TabBar;
