import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import s from './MoodPickerItem.styles';

const MoodPickerItem = ({ data, xCoord = 0, yCoord = 0, onPress }) => {
  const imageStyles = [s.image, { top: yCoord, left: xCoord }];

  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={imageStyles}
        source={data.src}
      />
    </TouchableOpacity>
  );
}

export default MoodPickerItem;
