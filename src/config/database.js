const  { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const connection = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

// cria uma Model (Tabela) no banco de dados
connection.define("Teste", {
    coluna_teste: DataTypes.STRING(50),
    colunda_teste2: DataTypes.INTEGER
}, { tableName: "teste" });

// sicroniza os modelos com o banco de dados, para de fato criar as tabelas
connection.sync({ alter: true })
    .then(() => console.log("Conexão com o banco de dados estabelecida com sucesso!"))
    .catch((error) => console.error("Erro ao conectar ao banco de dados:", error));

module.exports = connection;