import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const Styling03 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Styling03;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C68859",
    padding: 25,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
