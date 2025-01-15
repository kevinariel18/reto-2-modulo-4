import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LaptopsList } from "./screens/LaptopsList";
import { LaptopsForm } from "./screens/LaptopsForm";


export default function App() {
  const StackLaptops = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <StackLaptops.Navigator initialRouteName="LaptopsListNav">
      <StackLaptops.Screen
        name="LaptopsListNav"
        component={LaptopsList}
        options={{ title: "Lista de Laptops" }}
      />
      <StackLaptops.Screen
        name="LaptopsFormNav"
        component={LaptopsForm}
        options={{ title: "Formulario de Laptop" }}
      />
    </StackLaptops.Navigator>
  </NavigationContainer>
  );
}