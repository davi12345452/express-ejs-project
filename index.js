// Inicializando o Express.js

const express = require("express");
const app = express();

// Inicializar o EJS

app.set('view engine', 'ejs');

//Rota teste para incializar
app.get("/:nome?", (req, res) => {
    let nome = req.params.nome;
    let s_nome = "Sem nome"
    // Renderizando o ejs com variáveis (podendo vir de requisoções)
    // basta chamar no .ejs um termo <%= <var> %>
    if(nome) {
        res.render('../view/index.ejs', {nome: nome})
    }else{
        res.render('../view/index.ejs', {nome: s_nome})
    }
}); // Permite use de arrow functions

// Inicializar a aplicação

app.listen(8080, (error) => {
    if(error) console.log("Aplicação não funcionando");
    else console.log("Aplicação funcionando");
})