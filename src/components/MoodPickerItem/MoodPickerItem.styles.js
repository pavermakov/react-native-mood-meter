import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    position: 'absolute',
    width: 50,
    height: 50,
    transform: [{ translateX: -25 }, { translateY: -25 }, { rotateZ: '90deg' }],
  },
});
