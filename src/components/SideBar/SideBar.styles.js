import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: colors.gray,
  },
  image: {
    width: 30,
    height: 30,
  },
});
