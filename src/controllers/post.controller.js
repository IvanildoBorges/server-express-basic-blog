const PostModel = require("../models/Post.model");
const ProfileModel = require("../models/Profile.model");
const UserModel = require("../models/User.model");
const PostTagModel = require("../models/PostTag.model");
const TagsModel = require("../models/Tags.model");

class PostController {
  constructor() {
    PostModel.associaPosts({ UserModel, PostTagModel, TagsModel });
    UserModel.associaUsers({ ProfileModel });
  }

  async criar(request, response) {
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
