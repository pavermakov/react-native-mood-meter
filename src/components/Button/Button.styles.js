import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 35,
    paddingVertical: 5,
    paddingTop: 3,
    backgroundColor: colors.gray,
    borderRadius: 5,
  },
  containerTransparent: {
    opacity: 0.4,
  },
  text: {
    color: colors.yellow,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
