import React from 'react';
import { Text, View } from 'react-native';
import { MoodScreen } from '../screens/MoodScreen';

export default {
  mood: {
    pageTitle: 'How are you feeling today?',
    navTitle: 'Mood',
    component: <MoodScreen />,
  },
  stats: {
    pageTitle: 'stats title',
    navTitle: 'Stats',
    component: <View><Text>stats screen</Text></View>,
  },
};
