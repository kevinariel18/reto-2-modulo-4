const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const puerto = 3003;

app.use(bodyParser.json());


app.use("/laptops", (req, res, next) => {
    console.log("Middleware activado para laptops");
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    next();
});


app.get("/laptops", (req, res) => {
    const laptops = [
        { id: 1, marca: "Lenovo", procesador: "Intel Core i5", memoria: "16 GB", disco: "1 TB" },
        { id: 2, marca: "HP", procesador: "Intel Core i7", memoria: "8 GB", disco: "512 GB SSD" },
        { id: 3, marca: "Dell", procesador: "AMD Ryzen 5", memoria: "16 GB", disco: "256 GB SSD" },
        { id: 4, marca: "Asus", procesador: "Intel Core i3", memoria: "4 GB", disco: "1 TB" },
        { id: 5, marca: "Acer", procesador: "Intel Core i9", memoria: "32 GB", disco: "2 TB" }
    ];
    console.log("Recuperando todas las laptops");
    res.send(laptops);
});


app.post("/laptops", (req, res) => {
    const newLaptop = { ...req.body, id: 100 }; 
    console.log("Laptop creada:", newLaptop);
    res.send(newLaptop);
});


app.get("/laptops/:id", (req, res) => {
    const id = req.params.id;
    const laptop = { id: parseInt(id), marca: "Marca Fija", procesador: "Procesador Fijo", memoria: "Memoria Fija", disco: "Disco Fijo" };
    console.log(`Recuperando laptop con ID: `,id);
    res.send(laptop);
});


app.put("/laptops/:id", (req, res) => {
    const id = req.params.id;
    console.log("Actualizando laptop con ID: ",id);
    res.send(req.body); 
});


app.delete("/laptops/:id", (req, res) => {
    const id = req.params.id;
    console.log("Eliminando laptop con ID:",id);
    res.status(200).send();
});


app.listen(puerto, () => {
    console.log(`Servidor backendLaptops corriendo en el puerto `,puerto);
});
