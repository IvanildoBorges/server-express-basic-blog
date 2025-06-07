const connection = require("../config/database");
const { DataTypes, Model } = require("sequelize");
const PostModel = require("./Post.model");
const TagsModel = require("./Tags.model");

class PostTagsModel extends Model {}

PostTagsModel.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: PostModel,
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: TagsModel,
        key: "id",
      },
    },
  },
  {
    sequelize: connection,
    timestamps: false,
    tableName: "post_tag",
  }
);

module.exports = PostTagsModel;
