const MD5 = require("crypto-js/md5");
const UserModel = require("../models/User.model");
const ProfileModel = require("../models/Profile.model");

class UserController {
  constructor() {
    UserModel.associaUsers({ ProfileModel });
  }

  criar(request, response) {
    const body = request.body;
    const password = MD5(body.password).toString();
    body.password = password;

    UserModel.create(body, { include: ProfileModel });
    return response.status(201).json({
      mensagem: "Usuário cadastrado com sucesso!",
    });
  }

  async listar(request, response) {
    const users = await UserModel.findAll({ include: ProfileModel });

    // ProfileModel.belongsTo(UserModel, { foreignKey: "user_id" });
    // const profiles = await ProfileModel.findAll({ include: UserModel });

    return response.status(200).json(users);
  }
}

module.exports = UserController;
