const UserModel = require("./User.model");

class LoginModel {
  async authenticate(login, senha) {
    const autorizado = await UserModel.findOne({
      where: {
        email: login,
        password: senha,
      },
    });
    return autorizado;
  }
}

module.exports = LoginModel;
