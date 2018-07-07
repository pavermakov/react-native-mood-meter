import React from 'react';
import { View } from 'react-native';
import { StoreContext } from '../store';
import { Title } from '../components/Title';
import s from './Navigator.styles';

const Navigator = () => {
  return (
    <StoreContext.Consumer>
      {({ currentScreen }) => {
        return (
          <View style={s.container}>
            <View style={s.header}>
              <Title value={currentScreen.pageTitle} />
            </View>

            <View style={s.body}>
              {currentScreen.component}
            </View>
          </View>
        );
      }}
    </StoreContext.Consumer>
  );
}

export default Navigator;
