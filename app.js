const express = require('express');
const path = require('path');
const app = express();

let yo = "Tony"
// let puerto = 3000;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`facha ${yo}: Servidor corriendo en el puerto ${PORT}...`)
})

app.use(express.static('public'));
const publicPath = path.resolve(__dirname);
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/index.html"));
  });

app.get("/home", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
  });

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
  });

  app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
  });