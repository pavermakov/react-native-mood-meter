import React, { Component } from 'react';
import { StoreContext } from '../../store';
import { Mood } from '../../containers/Mood';

const MoodScreen = () => (
  <StoreContext.Consumer>
    {({ currentMood, setCurrentMood }) => (
      <Mood
        currentMood={currentMood}
        setCurrentMood={setCurrentMood}
      />
    )}
  </StoreContext.Consumer>
);

export default MoodScreen;
