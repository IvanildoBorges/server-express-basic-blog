const connection = require("../config/database");

// models
require("../models/UserTypes.model");
require("../models/Tags.model");
require("../models/User.model");
require("../models/Profile.model");
require("../models/Post.model");
require("../models/PostTag.model");

// Arrow function para sincronizar os modelos com o banco de dados
const syncDatabase = async () => {
  try {
    await connection.sync({ alter: true });
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados: ", error);
  }
};

module.exports = syncDatabase;
