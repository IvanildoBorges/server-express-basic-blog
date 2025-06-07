const  { Sequelize } = require('sequelize');
require('dotenv').config();

const connection = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

module.exports = connection;