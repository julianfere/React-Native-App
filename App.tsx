import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './src/screens/Home/Home';
import {Notifications} from './src/screens/Notifications/Notifications';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DarkTheme, {DarkStyles} from './src/config/themes/DarkTheme';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          overlayColor: 'transparent',
          drawerLabelStyle: DarkStyles.navitems,
          drawerActiveTintColor: DarkStyles.navmenu.tintColor,
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
