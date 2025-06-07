const connection = require("../config/database");
const { DataTypes, Model } = require("sequelize");
const UserModel = require("./User.model");

class ProfileModel extends Model {}

ProfileModel.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
    },
    firstname: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    picture_path: {
      type: DataTypes.STRING(255),
    },
    bio: {
      type: DataTypes.STRING(45),
    },
  },
  {
    sequelize: connection,
    allowNull: false,
    tableName: "profile",
  }
);

module.exports = ProfileModel;
