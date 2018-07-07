import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  stub: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.yellow,
  },
});
