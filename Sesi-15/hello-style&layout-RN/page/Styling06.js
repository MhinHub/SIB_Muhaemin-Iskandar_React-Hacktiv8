import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

// https://randomuser.me/api/?page=3&results=10&seed=abc
const Styling06 = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = () => {
    setIsLoading(true);
    axios
      .get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
      .then((res) => {
        // setUsers(res.data.results);
        setUsers([...users, ...res.data.results]);
        setIsLoading(false);
      });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapperStyle}>
        <Image style={styles.itemImage} source={{ uri: item.picture.large }} />
        <View style={styles.contentWrapperStyle}>
          <Text
            style={styles.txtNameStyle}
          >{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
          <Text
            style={styles.txtAddressStyle}
          >{`${item.location.street.number} ${item.location.street.name} ${item.location.city}`}</Text>
          <Text style={styles.txtEmailStyle}>{item.email}</Text>
        </View>
      </View>
    );
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };
  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Customer</Text>
      </View>

      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.email}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
      />
    </>
  );
};

export default Styling06;

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    color: "#777",
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
  header: {
    backgroundColor: "#2192FF",
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  txtHeader: {
    fontSize: 24,
    color: "white",
    marginLeft: 16,
    textAlign: "center",
  },
});
