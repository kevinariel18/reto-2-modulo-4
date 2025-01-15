import { View,Text,StyleSheet,Alert } from "react-native"
import {Input,Button} from "@rneui/base"
import { useState } from "react"
import {saveContactRest,updateContactRest,deleteContactRest} from "../rest_client/contactos"


export const  ContactsForm=({navigation,route})=>{
  let  contactRetrieved= route.params.contactParam
   let isNew=true
  if(contactRetrieved!=null){
      isNew=false
   }
   console.log("isNew",isNew);
   console.log("contactRetrieved",contactRetrieved);

   const [name,setname]=useState(isNew?null:contactRetrieved.nombre);
   const [surName,setsurName]=useState(isNew?null:contactRetrieved.apellido);
   const [phoneNumber,setphoneNumber]=useState(isNew?null:contactRetrieved.celular);
 
   

   const showMessage=(message)=>{
      Alert.alert("CONFIRMACION",message);
      navigation.goBack();
   }
   const createContact=()=>{
     console.log("saveContact")
  
     saveContactRest(
      {
        name:name,
        surName:surName,
        phoneNumber:phoneNumber
      },
      showMessage
     );
   }
     
   const updateContact=()=>{
     console.log("actualizando contacto")
     updateContactRest({
      id:contactRetrieved.id,
      name:name,
      surName:surName,
      phoneNumber:phoneNumber

     },
      
      showMessage)
   }
      
   const confirmDelete=()=>{
     Alert.alert("CONFIRMACION",
      "ESTA SEGURO DE ELIMINAR",
    [{
      text:"SI",
      onPress:deleteContact
    },
    {
      text:"CANCELAR"
    },
  ]);
   }

   const  deleteContact=()=>{
   deleteContactRest({
    id:contactRetrieved.id
   },showMessage)
   }
       
    return <View style={styles.container}>
     
     <Input
      valuYYe={name}
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
     onPress={isNew?createContact:updateContact}
     />
     {
      isNew?<View></View>:  <Button
      title="ELIMINAR"
      onPress={confirmDelete}
    />

     }
     
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