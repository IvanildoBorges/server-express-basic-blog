const { DataTypes } = require("sequelize");
const connection = require("../config/database");

// cria uma Model (Tabela) no banco de dados
const UserTypeModel = connection.define(
    "UserTypeModel", 
    {
        type: { type: DataTypes.STRING(45), allowNull: false }, 
    }, 
    { tableName: "user_types" }
);

module.exports = UserTypeModel;