// Inicializando o Express.js e Body-parser

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Inicializar o EJS

app.set('view engine', 'ejs');

// Chamando o dotenv para camuflar senhas
require('dotenv').config()
// Chamando o arquivo de configuração do db mysql

const connection = require("./database/sequelize");

// Importando o modelo de tabela para pergunta:

const modelQuestion = require("./database/modelQuestion");
const question = require("./database/modelQuestion");
// Teste de conexão:

connection
    .authenticate()
    .then(() => {
        console.log("Sucesso!");
    }).catch((erro) => {
        console.log(`Erro: ${erro}`);
    })


// Permitir arquivos estáticos: que são do front-end e não intaragem com o back, como CSS, Imagens...
// Aqui estou permitindo o uso na pasta public
app.use(express.static("public"));

// Possibiltar o uso de Body Parser para retirar os dados e ser usados no express:

app.use(bodyParser.urlencoded({extended: false}));

// Leitura de dados enviados via json -> Não vai ser usado no projeto, porém depois em APIs

app.use(bodyParser.json());

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
    //Recebendo os dados de inputs, utilizando a estrutura name de HTML
    var _title = req.body.title;
    var _description = req.body.description;
    console.log(`${_title} <==> ${_description}`)
    question.create({
        title: _title,
        description: _description
    }).then(()=>{
        console.log("Pergunta salva com sucesso")
        res.redirect("/");
    }).catch((error)=> console.log(error));
})
// Inicializar a aplicação

app.listen(8080, (error) => {
    if(error) console.log("Aplicação não funcionando");
    else console.log("Aplicação funcionando");
})