// Inicializando o Express.js

const express = require("express");
const app = express();

// Inicializar o EJS

app.set('view engine', 'ejs');

// Permitir arquivos estáticos: que são do front-end e não intaragem com o back, como CSS, Imagens...
// Aqui estou permitindo o uso na pasta public
app.use(express.static("public"));

//Rota teste para incializar
app.get("/", (req, res) => {
    res.render('../view/index.ejs');
});

// Inicializar a aplicação

app.listen(8080, (error) => {
    if(error) console.log("Aplicação não funcionando");
    else console.log("Aplicação funcionando");
})