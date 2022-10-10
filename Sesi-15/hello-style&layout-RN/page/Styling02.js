import { StatusBar, StyleSheet, View } from "react-native";
import React from "react";

const Styling02 = () => {
  return (
    <>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <StatusBar style="auto" />
    </>
  );
};

export default Styling02;

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     flexDirection: "row",
  //     paddingTop: 25,
  //   },
  box1: {
    flex: 1,
    backgroundColor: "red",
  },
  box2: {
    flex: 2,
    backgroundColor: "yellow",
  },
  box3: {
    flex: 3,
    backgroundColor: "green",
  },
});
