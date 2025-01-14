import { View,Text,StyleSheet,FlatList } from "react-native"
import {Button,ListItem} from "@rneui/base"
import {getAllContacts} from "../rest_client/contactos"
import { useState } from "react"
 

export const ContactsList=()=>{
    const [contactsList,setcontactsList]=useState([]);


    const ContactItem=({contact})=>{
        return <ListItem>
        <ListItem.Content>
          <ListItem.Title>{contact.nombre} {contact.apellido}</ListItem.Title>
          <ListItem.Subtitle>{contact.celular}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    }


   const fnRefreashList = (contacts)=>{
        setcontactsList(contacts);
          

    }

    return <View>
    <Text>Lista de contactos</Text>
    <Button
      title="consultar"
      onPress={()=>{
        getAllContacts(fnRefreashList);
      }}
    />
    <FlatList
    data={contactsList}
    renderItem={({item})=>{
        return  <ContactItem contact={item}/>

    }}
    />
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});