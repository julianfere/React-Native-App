import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Home = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#aaaa',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export {Home};
