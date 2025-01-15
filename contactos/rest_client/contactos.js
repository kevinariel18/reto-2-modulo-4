const IP="192.168.100.79";
const PORT=3001
const URL = "http://"+IP+":"+PORT+"/";

export const getAllContacts=(fnRefreashList)=>{
    console.log("getAllContacts")
     fetch(
        URL+"contactos"        
     ).then(
        (response)=>{return response.json()}

     ).then(
        (body)=>{
           
            fnRefreashList(body);
        }
     )

}

export const saveContactRest=(contact,fnShowMessage)=>{
   const config={
      method:"POST",
      headers:{
           "Content-Type":"application/json"
      },
      body:JSON.stringify({
         nombre:contact.name,
         apellido:contact.surname,
         celular:contact.phoneNumber
      })
   }
   fetch(
      URL+"contactos",config
   )
   .then(response=>response.json())
   .then(body=>{
      fnShowMessage("se ha creado el contacto");
      console.log(body);
   });
}

export const updateContactRest=(contact,fnShowMessage)=>{
   const config={
      method:"PUT",
      headers:{
           "Content-Type":"application/json"
      },
      body:JSON.stringify({
         id:contact.id,
         nombre:contact.name,
         apellido:contact.surname,
         celular:contact.phoneNumber
      })
   }
   fetch(
      URL+"contactos/"+contact.id,config
   )
   .then(response=>response.json())
   .then(body=>{
      fnShowMessage("contacto actualizado");
      console.log(body);
   });
}



export const deleteContactRest=(contact,fnShowMessage)=>{
   const config={
      method:"DELETE",
      
   }
   fetch(
      URL+"contactos/"+contact.id,config
   )
   .then(response=>response.json())
   .then(body=>{
      fnShowMessage("se ha eliminado el contacto");
      console.log(body);
   });
}