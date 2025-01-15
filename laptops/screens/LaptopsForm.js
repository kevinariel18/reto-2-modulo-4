import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Input, Button } from "@rneui/base";
import { saveLaptopRest,updateLaptopRest } from "../rest_client/laptops";

export const LaptopsForm = ({ navigation, route }) => {
    const laptopRetrieved = route.params?.laptopParam || null;
    const isNew = laptopRetrieved === null;

    const [brand, setBrand] = useState(isNew ? "" : laptopRetrieved.marca);
    const [processor, setProcessor] = useState(isNew ? "" : laptopRetrieved.procesador);
    const [memory, setMemory] = useState(isNew ? "" : laptopRetrieved.memoria);
    const [disk, setDisk] = useState(isNew ? "" : laptopRetrieved.disco);

  const showMessage = () => {
    Alert.alert("CONFIRMACIÓN", isNew ? "Se creó la laptop exitosamente" : "Laptop actualizada exitosamente");
    navigation.goBack();
  };

  const saveLaptop = () => {
   
   
    saveLaptopRest(
      {
        brand,
         processor,
       memory,
        disk,
      },
      showMessage
    );
  };


  const updateLaptop = () => {
    updateLaptopRest(
      {
        id: laptopRetrieved.id,
        brand,
        processor,
        memory,
        disk,
      },
      showMessage
    );
  };








  return (
    <View style={styles.container}>
      <Input
        value={brand}
        placeholder="Ingrese la marca"
        onChangeText={(value) => setBrand(value)}
      />
      <Input
        value={processor}
        placeholder="Ingrese el procesador"
        onChangeText={(value) => setProcessor(value)}
      />
      <Input
        value={memory}
        placeholder="Ingrese la memoria"
        onChangeText={(value) => setMemory(value)}
      />
      <Input
        value={disk}
        placeholder="Ingrese el disco"
        onChangeText={(value) => setDisk(value)}
      />
      <Button title="Guardar" onPress={isNew ? saveLaptop : updateLaptop} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});
