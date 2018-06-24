import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { MoodPickerItem } from '../MoodPickerItem';
import s from './MoodPicker.styles';

const MoodPicker = ({ items = [], currentMood = null, width, onMoodSelect }) => {
  RADIUS = width / 2;
  MIN_ANGLE = 360 / items.length;

  return (
    <View style={s.container}>
      {currentMood && (
        <View style={s.body}>
          <MoodPickerItem
            data={currentMood}
          />
        </View>
      )}

      <View style={s.body}>
        {items.map((mood, index) => {
          const angle = index * MIN_ANGLE;
          const xCoord = RADIUS * Math.cos(angle * (Math.PI / 180));
          const yCoord = RADIUS * Math.sin(angle * (Math.PI / 180));

          return (
            <MoodPickerItem
              key={mood.id}
              data={mood}
              xCoord={xCoord}
              yCoord={yCoord}
              onPress={() => onMoodSelect(mood)}
            />
          )
        })}
      </View>
    </View>
  );
}

export default MoodPicker;
