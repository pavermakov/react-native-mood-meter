import React, { Component } from 'react';
import { screens } from '../config';

const initialState = {
  currentScreen: screens.mood,
};

const StoreContext = React.createContext(initialState);

class Store extends Component {
  state = {
    ...initialState,
    hello: 1,
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
