import {Button, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo-768x528.png',
        }}
      />
      <Text style={styles.text}>Mari Kita Belajar React Native</Text>
      <StatusBar style="auto" />
      <Button title="Click Me" color="#31C6D4" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    marginBottom: 20,
  },
  image: {
    height: 100,
    width: 100,
  },
});
