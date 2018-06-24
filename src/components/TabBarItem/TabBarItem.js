import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import s from './TabBarItem.styles';

const TabBarItem = ({ isFirst = false, isActive = false, text = '', onPress }) => {
  const containerStyles = [s.container];
  const bodyStyles = [s.body];
  const textStyles = [s.text];

  if (isFirst) {
    containerStyles.push(s.containerFirst);
  }

  if (isActive) {
    bodyStyles.push(s.bodyActive);
    textStyles.push(s.textActive);
  }

  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={onPress}>
        <View style={bodyStyles}>
          <Text style={textStyles}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default TabBarItem;
