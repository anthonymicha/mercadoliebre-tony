const express = require('express');
const path = require('path');
const app = express();

//Comando para mostrar un archivo en x ruta:    app.get('rutaPagina',(res,req)=>{res.sendFile(path.join(__dirname,'rutaRepo/rutaArchivo.extension'))})
//Comando para mostrar un texto en x ruta:      app.get('rutaPagina',(res,req)=>{res.Send('Mensaje')}
//Comando para iniciar el servidor:             app.listen('puerto')

app.listen(3000, () => {
    console.log('Servidor corriendo facha')
})

app.use(express.static('public'));
const publicPath = path.resolve(__dirname);
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"/views/index.html"));
});
app.get("/babbage", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/babbage.html"));
});
app.get("/berners-lee", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/berners-lee.html"));
});
app.get("/clarke", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/clarke.html"));
});
app.get("/hamilton", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/hamilton.html"));
});
app.get("/hopper", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/hopper.html"));
});
  app.get("/lovelace", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/lovelace.html"));
});
  app.get("/turing", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/turing.html"));
});
  
  
  
