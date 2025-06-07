const connection = require('../config/database');

// models
require('../models/UserTypesModel');
require('../models/TagsModel');
require('../models/UserModel');
require('../models/ProfileModel');

// sicroniza os modelos com o banco de dados, para de fato criar as tabelas
connection.sync({ alter: true })
    .then(() => console.log("Conexão com o banco de dados estabelecida com sucesso!"))
    .catch((error) => console.error("Erro ao conectar ao banco de dados:", error));