import { View,Text,StyleSheet,Alert } from "react-native"
import {Input,Button} from "@rneui/base"
import { useState } from "react"
import {saveContactRest} from "../rest_client/contactos"


export const  ContactsForm=({navigation})=>{
   const [name,setname]=useState();
   const [surName,setsurName]=useState();
   const [phoneNumber,setphoneNumber]=useState();
 

   const showMessage=()=>{
      Alert.alert("CONFIRMACION","SE CREO EL CONTACTO");
   }
   const saveContact=()=>{
     console.log("saveContact")
     navigation.goBack();
     saveContactRest(
      {
        name:name,
        surName:surName,
        phoneNumber:phoneNumber
      },
      showMessage
     );
   }

    return <View style={styles.container}>
     
     <Input
      value={name}
      placeholder="INGRESE EL NOMBRE"
      onChangeText={(value)=>{
     setname(value);
      }}
     />
      <Input
      value={surName}
      placeholder="INGRESE EL Apellido"
      onChangeText={(value)=>{
     setsurName(value);
      }}
     />
     <Input
      value={phoneNumber}
      placeholder="INGRESE EL Telefono"
      onChangeText={(value)=>{
     setphoneNumber(value);
      }}
     />
     <Button
     title="GURDAR"
     onPress={saveContact}
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