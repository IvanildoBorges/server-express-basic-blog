const { Model, DataTypes } = require("sequelize");
const UserModel = require("./User.model");
const connection = require("../config/database");

class PostModel extends Model {
  static associaPosts({ UserModel, PostTagModel, TagsModel }) {
    PostModel.belongsTo(UserModel, { foreignKey: "user_id" });
    PostModel.belongsToMany(TagsModel, {
      through: PostTagModel,
      foreignKey: "post_id",
      otherKey: "tag_id",
    });
  }
}

PostModel.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
    },
    image_path: {
      type: DataTypes.STRING(255),
    },
  },
  {
    sequelize: connection,
    tableName: "post",
  }
);

module.exports = PostModel;
