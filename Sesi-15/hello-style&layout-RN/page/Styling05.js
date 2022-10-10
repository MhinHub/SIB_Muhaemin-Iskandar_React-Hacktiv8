import { StatusBar, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const Styling05 = () => {
  let posts = [];
  for (let i = 1; i <= 20; i++) {
    posts.push({
      title: `Title ${i}`,
      description: `Deskripsi untuk title ${i}`,
    });
  }

  return (
    <View style={styles.container}>
      {/* <ScrollView style={styles.scroll}>
        {posts.map((post, idx) => {
          <View style={styles.box} key={idx}>
            <Text style={styles.title}>{post.title}</Text>
            <Text>{post.description}</Text>
          </View>;
        })}
      </ScrollView> */}
      <FlatList
        data={posts}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Styling05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 50,
  },
});
