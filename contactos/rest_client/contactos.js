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