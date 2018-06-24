import React, { Component } from 'react';
import { screens } from '../config';

const initialState = {
  currentScreen: screens.mood,
  currentMood: null,
};

const StoreContext = React.createContext(initialState);

class Store extends Component {
  setCurrentScreen = (nextScreen) => {
    this.setState({ currentScreen: nextScreen });
  };

  setCurrentMood = (nextMood = null) => {
    this.setState({ currentMood: nextMood });
  };

  state = {
    ...initialState,
    setCurrentScreen: this.setCurrentScreen,
    setCurrentMood: this.setCurrentMood,
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
