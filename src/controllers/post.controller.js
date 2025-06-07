const PostModel = require("../models/Post.model");
const ProfileModel = require("../models/Profile.model");
const UserModel = require("../models/User.model");
const PostTagModel = require("../models/PostTag.model");
const TagsModel = require("../models/Tags.model");

class PostController {
  async criar(request, response) {
    PostModel.belongsToMany(TagsModel, {
      through: PostTagModel,
      foreignKey: "post_id",
      otherKey: "tag_id",
    });

    const { tags, ...body } = request.body;

    const post = await PostModel.create(body, {
      include: {
        through: PostModel,
        model: TagsModel,
      },
    });

    post.setTags(tags);

    return response.status(201).json({
      mensagem: "Post criado com sucesso!",
    });
  }

  async listar(request, response) {
    PostModel.belongsTo(UserModel, { foreignKey: "user_id" });
    PostModel.belongsToMany(TagsModel, {
      through: PostTagModel,
      foreignKey: "post_id",
      otherKey: "tag_id",
    });
    UserModel.hasOne(ProfileModel, { foreignKey: "user_id" });

    const dados = await PostModel.findAll({
      include: [
        {
          model: UserModel,
          include: ProfileModel,
        },
        {
          model: TagsModel,
        },
      ],
    });
    return response.status(200).json(dados);
  }
}

module.exports = PostController;
