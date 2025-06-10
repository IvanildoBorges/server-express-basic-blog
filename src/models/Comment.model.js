const connection = require("../config/database");
const { DataTypes, Model } = require("sequelize");
const PostModel = require("./Post.model");
const UserModel = require("./User.model");

class CommentModel extends Model {
  static associaComentario() {
    CommentModel.hasOne(CommentModel, {
      foreignKey: "parent_id",
      as: "comments_filhos",
    });
    CommentModel.belongsTo(CommentModel, {
      foreignKey: "parent_id",
      as: "comments_pai",
    });
  }
}

CommentModel.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
      onDelete: "NO ACTION",
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: PostModel,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: CommentModel,
        key: "id",
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    timestamps: true,
    tableName: "comments",
  }
);

module.exports = CommentModel;
