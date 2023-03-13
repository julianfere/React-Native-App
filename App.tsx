import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import buildNotification from './src/utils/notifications/NotificationBuilder';
import sendNotification from './src/utils/notifications/SendNotification';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#42d1fc',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={sendNotification(
          buildNotification({title: 'Test', body: 'Test'}),
        )}>
        <Text style={styles.text}>Send Notification</Text>
      </Pressable>
    </View>
  );
};

export default App;
