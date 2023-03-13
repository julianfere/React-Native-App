import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';
import {buildNotification} from '../../utils/notifications/NotificationBuilder';
import {sendNotification} from '../../utils/notifications/SendNotification';

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

const Notifications = () => {
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

export {Notifications};
