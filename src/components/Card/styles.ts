import {StyleSheet} from 'react-native';

const cardStyle = StyleSheet.create({
  card: {
    maxHeight: 400,
    minHeight: 100,
    borderRadius: 20,
    backgroundColor: '#5865f2',
  },
  title: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 10,
  },
  content: {
    backgroundColor: 'transparent',
    padding: 10,
  },
});

export {cardStyle};
