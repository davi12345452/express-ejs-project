// Inicializando o Express.js

const express = require("express");
const app = express();

// Inicializar o EJS

app.set('view engine', 'ejs');

//Rota teste para incializar
app.get("/", (req, res) => res.render('../view/index.ejs')); // Permite use de arrow functions

// Inicializar a aplicação

app.listen(8080, (error) => {
    if(error) console.log("Aplicação não funcionando");
    else console.log("Aplicação funcionando");
})