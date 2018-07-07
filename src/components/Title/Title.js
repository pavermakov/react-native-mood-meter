import React from 'react';
import { Text } from 'react-native';
import s from './Title.styles';

const Title = ({ value }) => {
  return (
    <Text style={s.text}>{ value }</Text>
  );
}

export default Title;
