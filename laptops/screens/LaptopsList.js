import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList,TouchableHighlight } from "react-native";
import { Button, ListItem,FAB } from "@rneui/base";
import { getAllLaptops } from "../rest_client/laptops";

export const LaptopsList = ({ navigation }) => {
  const [laptopsList, setLaptopsList] = useState([]);

  const LaptopItem = ({ laptop }) => {
    return (
      <TouchableHighlight
      onPress={() => {
        navigation.navigate("LaptopsFormNav", { laptopParam: laptop });
      }}
      >
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>
            {laptop.marca} ({laptop.procesador})
          </ListItem.Title>
          <ListItem.Subtitle>
            Memoria: {laptop.memoria}, Disco: {laptop.disco}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      </TouchableHighlight>
    );
  };

  const fnRefreshList = (laptops) => {
    setLaptopsList(laptops);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de laptops</Text>
      <Button
        title="Consultar Laptops"
        onPress={() => {
          getAllLaptops(fnRefreshList);
        }}
      />
      <FlatList
        data={laptopsList}
        renderItem={({ item }) => <LaptopItem laptop={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
       <FAB
        title="+"
        onPress={() => {
          navigation.navigate("LaptopsFormNav");
        }}
        placement="right"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
