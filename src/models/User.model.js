const connection = require("../config/database");
const { DataTypes, Model } = require("sequelize");

class UserModel extends Model {}

UserModel.init(
  {
    is_active: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    tableName: "user",
  }
);

module.exports = UserModel;
