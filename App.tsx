/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './src/screens/Home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Notifications} from './src/screens/Notifications/Notifications';
import {TabBarIcon} from './src/components/TabBarIcon/TabBarIcon';

const Tab = createBottomTabNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}: any) => ({
          tabBarIcon: ({color, size}) => (
            <TabBarIcon name={route.name} size={size} color={color} />
          ),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Notifications" component={Notifications} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
