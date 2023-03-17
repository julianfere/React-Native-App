import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#23272a',
    background: '#2c2f33',
    card: '#2c2f33',
    text: '#ffffff',
    border: '#23272a',
    notification: '#7289da',
  },
};

const DarkStyles = StyleSheet.create({
  navmenu: {
    tintColor: '#5865f2',
  },
  navitems: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  homeContainer: {
    backgroundColor: '#23272a',
    display: 'flex',
    gap: 20,
  },
  homeText: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export default DarkTheme;
export {DarkStyles};
