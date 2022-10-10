import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

const Styling01 = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/004/218/321/original/cute-cat-white-pet-cartoon-character-free-vector.jpg",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        defaultValue="You can type in meee"
      />
    </ScrollView>
  );
};

export default Styling01;

const styles = StyleSheet.create({});
