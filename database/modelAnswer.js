const Sequelize = require("sequelize");
const connection = require("./sequelize");

const answer = connection.define("_respostas", {
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    IDAnswer:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

answer.sync({force: false}).then(() => {
    console.log("Table answer created!");
}).catch((error) => {
    console.log(`Error: ${error}`);
})

module.exports = answer;