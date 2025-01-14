import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LaptopsList } from "./screens/LaptopsList";

export default function App() {
  const StackLaptops = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackLaptops.Navigator>
        <StackLaptops.Screen
          name="LaptopsListNav"
          component={LaptopsList}
          options={{ title: "Lista de Laptops" }}
        />
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}
