import React from 'react';
import { Text, View, Image } from 'react-native';
import s from './SideBar.styles';

const SideBar = ({ items }) => {
  return (
    <View style={s.container}>
      {items.map((item, index) => (
        <Image
          key={index}
          source={item.src}
          style={s.image}
        />
      ))}
    </View>
  );
}

export default SideBar;
