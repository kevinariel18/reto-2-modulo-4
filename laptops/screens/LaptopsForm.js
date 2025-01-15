import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Input, Button } from "@rneui/base";
import { saveLaptopRest } from "../rest_client/laptops";

export const LaptopsForm = ({ navigation }) => {
  const [brand, setBrand] = useState("");
  const [processor, setProcessor] = useState("");
  const [memory, setMemory] = useState("");
  const [disk, setDisk] = useState("");

  const showMessage = () => {
    Alert.alert("CONFIRMACIÓN", "Se creó la laptop exitosamente");
  };

  const saveLaptop = () => {
    console.log("saveLaptop");
    navigation.goBack();
    saveLaptopRest(
      {
        brand: brand,
        processor: processor,
        memory: memory,
        disk: disk,
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
      <Button title="Guardar" onPress={saveLaptop} />
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
