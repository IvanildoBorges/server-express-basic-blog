const UserModel = require("../models/User.model");
const ProfileModel = require("../models/Profile.model");

class UserController {
  criar(request, response) {
    UserModel.hasOne(ProfileModel, { foreignKey: "user_id" });
    const body = request.body;

    UserModel.create(body, { include: ProfileModel });
    return response.status(201).json({
      mensagem: "Usuário cadastrado com sucesso!",
    });
  }

  async listar(request, response) {
    UserModel.hasOne(ProfileModel, { foreignKey: "user_id" });
    const users = await UserModel.findAll({ include: ProfileModel });

    // ProfileModel.belongsTo(UserModel, { foreignKey: "user_id" });
    // const profiles = await ProfileModel.findAll({ include: UserModel });

    return response.status(200).json(users);
  }
}

module.exports = UserController;
