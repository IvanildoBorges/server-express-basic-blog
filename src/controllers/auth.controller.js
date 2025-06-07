const LoginModel = require("../models/Login.model");

class AuthController {
  login(login, senha) {
    const authLogin = new LoginModel();
    const dados = authLogin.authenticate(login, senha);

    return dados;
  }
}

module.exports = AuthController;
