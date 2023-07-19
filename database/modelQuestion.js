// Esse é o arquivo para criar um modelo, ou seja, uma tabela para questions. Isso engloba
// título das questions e suas respostas. 

const Sequelize = require("sequelize");
const connection = require("./sequelize");

// Criando tabela de perguntas no database definido em sequelize.js
const question = connection.define("_perguntas",{
    title:{
        type: Sequelize.STRING,
        // Impede de receber valores nulos
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

// Cria a tabela, se ela existir, não forçará a sua criação
question.sync({force: false}).then(() => {
    console.log("Table question created!");
}).catch((error) => {
    console.log(`Error: ${error}`);
})

module.exports = question;