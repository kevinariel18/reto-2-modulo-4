import { View,Text,StyleSheet,FlatList,TouchableHighlight } from "react-native"
import {Button,ListItem,FAB} from "@rneui/base"
import {getAllContacts} from "../rest_client/contactos"
import { useState } from "react"
 

export const ContactsList=({navigation})=>{
    const [contactsList,setcontactsList]=useState([]);


    const ContactItem=({contact})=>{
        return <TouchableHighlight onPress={()=>{
          navigation.navigate("ContactsFormNav",{contactParam:contact});
        }}>
        <ListItem>
        <ListItem.Content>
          <ListItem.Title>{contact.nombre} {contact.apellido}</ListItem.Title>
          <ListItem.Subtitle>{contact.celular}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      </TouchableHighlight>
    }


   const fnRefreashList = (contacts)=>{
        setcontactsList(contacts);
          

    }

    return <View style={styles.container}>
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
    <FAB
    
    title="+"
    onPress={()=>{navigation.navigate("ContactsFormNav",{})}}
    />
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"column",
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});