import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import moment from 'moment';
import { screens, constants } from '../config';

const initialState = {
  currentScreen: screens.mood,
  currentMood: null,
  savedMoods: {},
};

const StoreContext = React.createContext(initialState);

class Store extends Component {
  componentDidMount() {
    this.getSavedMoods();
  }

  getSavedMoods = () => {
    AsyncStorage.getItem(constants.STORAGE_KEY)
      .then((data) => {
        if (data === null) {
          return;
        }

        this.setState({ savedMoods: JSON.parse(data) });
      })
      .catch(console.error);
  };

  setCurrentScreen = (nextScreen) => {
    this.setState({ currentScreen: nextScreen });
  };

  setCurrentMood = (nextMood = null) => {
    this.setState({ currentMood: nextMood });
  };

  saveMood = () => {
    const date = moment().format(constants.TIME_FORMAT);
    const nextSavedMoods = {
      ...this.state.savedMoods,
      [date]: this.state.currentMood,
    };

    AsyncStorage.setItem(constants.STORAGE_KEY, JSON.stringify(nextSavedMoods))
      .then(() => {
        this.setState({ savedMoods: nextSavedMoods });
      })
      .catch(console.error)
  };

  state = {
    ...initialState,
    setCurrentScreen: this.setCurrentScreen,
    setCurrentMood: this.setCurrentMood,
    saveMood: this.saveMood,
  };

  render() {
    return (
      <StoreContext.Provider value={this.state}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export { Store, StoreContext };
