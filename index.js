// Inicializando o Express.js

const express = require("express");
const app = express();

// Inicializar o EJS

app.set('view engine', 'ejs');

// Permitir arquivos estáticos: que são do front-end e não intaragem com o back, como CSS, Imagens...
// Aqui estou permitindo o uso na pasta public
app.use(express.static("public"));

// Rota da home do programa
app.get("/", (req, res) => {
    res.render('../view/index.ejs');
});

// Rota para pergunta

app.get("/perguntar", (req, res) => {
    res.render("../view/pergunta.ejs");
})

// Rota post para receber os dados do formulário

app.post("/salvaDadoPerguntas", (req, res) => {
    res.send("Pergunta recebida")
})
// Inicializar a aplicação

app.listen(8080, (error) => {
    if(error) console.log("Aplicação não funcionando");
    else console.log("Aplicação funcionando");
})