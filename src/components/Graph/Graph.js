import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { constants } from '../../config';
import s from './Graph.styles';

const Graph = ({ items }) => {
  return (
    <View style={s.container}>
      <ScrollView horizontal={true}>
        {items.map((item, index) => (
          <View key={index} style={s.column}>
            {constants.MOODS.map((mood, index) => {
              if (item.id === mood.id) {
                return (
                  <Image
                    key={index}
                    source={item.src}
                    style={s.cell}
                  />
                );
              }

              if (item.id !== mood.id) {
                return <View key={index} style={s.cell} />;
              }
            })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Graph;
