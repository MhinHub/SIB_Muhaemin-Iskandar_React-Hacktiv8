import { StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Styling04 = () => {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Masukan text di sini"
        onChangeText={(text) => setInput(text)}
        defaultValue={input}
      />
      <Text style={{ padding: 10, fontSize: 25 }}>The text: {input}</Text>
      <StatusBar />
    </View>
  );
};

export default Styling04;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  textInput: {
    height: 40,
  },
});
