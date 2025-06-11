const UserModel = require("./User.model");
const MD5 = require("crypto-js/md5");

class LoginModel {
  async authenticate(email, password) {
    const autorizado = await UserModel.findOne({
      where: {
        email: email,
        password: MD5(password).toString(),
      },
    });
    return autorizado;
  }
}

module.exports = LoginModel;
