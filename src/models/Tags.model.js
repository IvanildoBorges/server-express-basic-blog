const connection = require("../config/database");
const { DataTypes, Model } = require("sequelize");

class TagsModel extends Model {}

TagsModel.init(
  {
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    timestamps: false,
    tableName: "tags",
  }
);

module.exports = TagsModel;
