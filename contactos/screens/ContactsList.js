import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native";
import { ListItem, FAB } from "@rneui/base";
import { getAllContacts } from "../rest_client/contactos"; // Asegúrate de que esta función esté implementada correctamente.

export const ContactsList = ({ navigation }) => {
  const [contactsList, setContactsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Ejecutando useEffect para cargar contactos...");
    getAllContacts((contacts) => {
      fnRefreshList(contacts);
      setIsLoading(false); // Indicamos que la carga ha finalizado.
    });
  }, []);

  const fnRefreshList = (contacts) => {
    console.log("Contactos obtenidos:", contacts);
    setContactsList(contacts);
  };

  const ContactItem = ({ contact }) => {
    return (
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("ContactsFormNav", { contactParam: contact });
        }}
      >
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>
              {contact.nombre} {contact.apellido}
            </ListItem.Title>
            <ListItem.Subtitle>{contact.celular}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableHighlight>
    );
  };

  // Mostrar un indicador de carga mientras los datos se obtienen.
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Cargando contactos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={contactsList}
        renderItem={({ item }) => <ContactItem contact={item} />}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()} // Usa 'id' si existe, de lo contrario, usa el índice.
      />
      <FAB
        title="+"
        placement="right"
        onPress={() => {
          navigation.navigate("ContactsFormNav", {});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loadingText: {
    fontSize: 18,
    color: "#555",
  },
});
