const UserModel = require("../models/User.model");
const ProfileModel = require("../models/Profile.model");

class UserController {
  constructor() {
    UserModel.associaUsers({ ProfileModel });
  }

  criar(request, response) {
    const body = request.body;

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
