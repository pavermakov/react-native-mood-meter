import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  cell: {
    width: 30,
    height: 30,
  },
});
