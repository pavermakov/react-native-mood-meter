import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { StoreContext } from '../../store';
import { MoodPicker } from '../../components/MoodPicker';
import { constants } from '../../config';
import s from './Mood.styles';

class Mood extends Component {
  SCREEN_WIDTH = Dimensions.get('window').width;
  MOOD_PICKER_WIDTH = constants.MAX_MOOD_PICKER_WIDTH;

  componentWillMount() {
    if (this.SCREEN_WIDTH <= this.MOOD_PICKER_WIDTH + constants.MOOD_PICKER_ITEM_EXTRA_SPACE) {
      this.MOOD_PICKER_WIDTH = this.SCREEN_WIDTH - constants.MOOD_PICKER_ITEM_EXTRA_SPACE;
    }
  }

  render() {
    return (
      <StoreContext.Consumer>
        {({ currentMood, setCurrentMood }) => (
          <View style={s.container}>
            <MoodPicker
              currentMood={currentMood}
              items={constants.MOODS}
              width={this.MOOD_PICKER_WIDTH}
              onMoodSelect={setCurrentMood}
            />
          </View>
        )}
      </StoreContext.Consumer>
    );
  }
}

export default Mood;
