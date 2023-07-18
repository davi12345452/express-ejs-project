// Inicializar o sequelize
const Sequelize = require("sequelize");

//Conectar sequelize ao database mysql:

// <nome do database>, <usuario>, <senha_usuario></senha_usuario>

const sequelize = new Sequelize(process.env.NOME_DATABASE, process.env.NOME_USUARIO, process.env.SENHA, {
    // Onde está o banco 
    host: 'localhost',
    // Qual tipo de banco quero me conectar
    dialect: 'mysql'
 });

 module.exports = sequelize;
 