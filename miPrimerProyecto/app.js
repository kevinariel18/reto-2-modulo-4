const express =require("express");
const bodyParser=require("body-parser");
const app=express();
const puerto=3001;
//contacto: id, nombre, apellido, celular

app.use(bodyParser.json());



//para cualquier opcion use
app.use("/contactos",(request,response,next)=>{
     console.log("ingresa a middleware");
     console.log("headers:",request.headers);
     console.log("body:",request.body);
    next();
});



app.get("/contactos",(request,response)=>{
     const contactos=[
        {id:1,nombre:"kevin",apellido:"Catagña",celular:"099999999"},
        {id:2,nombre:"ariel",apellido:"Catagña",celular:"088888888"},
        {id:3,nombre:"BANE",apellido:"CatUL",celular:"7777777777"}

     ];
     console.log("ingresa a get");
      response.send(contactos);

});

app.post("/contactos",(req,resp)=>{
     req.body.id=99;
   resp.send(req.body);
});

app.put("/contactos/:idParam",(req,resp)=>{
   const id= req.params.idParam;
   console.log("id",id)
    resp.send(req.body);
 });


 app.delete("/contactos/:id",(req,resp)=>{
    const id=req.params.id;
    console.log("id",id)
    resp.send({id:id});
 });


app.listen(puerto,()=>{
    console.log("SERVIDOR LISTO EN EL PUERTO "+ 3001)
});