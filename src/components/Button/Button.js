import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import s from './Button.styles';

const Button = ({ text = '', isDisabled = false, onPress }) => {
  const containerStyles = [s.container];

  if (isDisabled) {
    containerStyles.push(s.containerTransparent);
  }

  return (
    <TouchableOpacity disabled={isDisabled} onPress={onPress}>
      <View style={containerStyles}>
        <Text style={s.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
