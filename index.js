// Inicializando o Express.js

const express = require("express");
const app = express();

// Inicializar o EJS

app.set('view engine', 'ejs');

// Permitir arquivos estáticos: que são do front-end e não intaragem com o back, como CSS, Imagens...
// Aqui estou permitindo o uso na pasta public
app.use(express.static("public"));

let _array = [{tipo: "Futebol", marca: "Nike"}, {tipo: "Volei", marca: "Adidas"}, {tipo: "Basquete", marca: "Puma"}]

//Rota teste para incializar
app.get("/:nome?", (req, res) => {
    // Usar condicional no .ejs: basta colocar o elemento html entre a seguinte estrutura:
    // <%if(testCond){%> oekfobofwb <%}%>, o <%= é usado somente com variáveis.
    let testCond = true;
    let nome = req.params.nome;
    let s_nome = "Sem nome";
    // Renderizando o ejs com variáveis (podendo vir de requisoções)
    // basta chamar no .ejs um termo <%= <var> %>
    if(nome) {
        res.render('../view/index.ejs', {nome: nome, condicional: testCond, arr: _array});
    }else{
        res.render('../view/index.ejs', {nome: s_nome, condicional: testCond, arr: _array});
    }
}); // Permite use de arrow functions

// Inicializar a aplicação

app.listen(8080, (error) => {
    if(error) console.log("Aplicação não funcionando");
    else console.log("Aplicação funcionando");
})