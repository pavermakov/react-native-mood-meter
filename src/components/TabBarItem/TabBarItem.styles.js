import { StyleSheet } from 'react-native';
import { colors } from '../../config';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: colors.darkGray,
  },
  containerFirst: {
    borderLeftWidth: 0,
    borderLeftColor: colors.transparent,
  },
  body: {
    padding: 20,
    paddingTop: 16,
    backgroundColor: colors.gray,
    borderTopWidth: 4,
    borderTopColor: colors.transparent,
  },
  bodyActive: {
    borderTopColor: colors.yellow,
  },
  text: {
    textAlign: 'center',
    color: colors.darkGray,
    fontWeight: '900',
    fontSize: 18,
  },
  textActive: {
    color: colors.yellow,
  },
});
