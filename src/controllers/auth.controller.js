const Usuario = require("../models/usuario.model");

class AuthController {
    login(login, senha) {
        const dados = Usuario.authenticate(login, senha);

        return dados;
    }
}

module.exports = AuthController;