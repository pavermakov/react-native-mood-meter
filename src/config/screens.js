import React from 'react';
import { Text, View } from 'react-native';
import { MoodScreen } from '../screens/MoodScreen';

export default {
  mood: {
    pageTitle: 'How are you feeling?',
    navTitle: 'Mood',
    component: <MoodScreen />,
  },
  stats: {
    pageTitle: 'Your stats',
    navTitle: 'Stats',
    component: <View><Text>stats screen</Text></View>,
  },
};
