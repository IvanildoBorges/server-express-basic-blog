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
    const queryString = request.query;
    const arrayQuery = queryString.fields.split(","); // na url seria localhost:3000/posts?fields=title,slug, content

    const dados = await PostModel.findAll({
      attributes: arrayQuery,
      // include: [
      //   {
      //     model: UserModel,
      //     include: ProfileModel,
      //   },
      //   {
      //     model: TagsModel,
      //   },
      // ],
    });
    return response.status(200).json(dados);
  }

  async consultarPorId(request, response) {
    const { id } = request.params;

    const post = await PostModel.findByPk(id, {
      attributes: ["title", "slug", "content"],
      include: {
        model: UserModel,
        attributes: ["email", "is_active", "username"],
        include: {
          model: PostModel,
          attributes: ["firstname", "surname"],
        },
      },
    });

    return response.status(200).json(post);
  }

  async editar(request, response) {
    const { id } = request.params;
    const body = request.body;

    await PostModel.update(body, { where: { id } });

    return response
      .status(200)
      .json({ mensagem: "Post atualizado com sucesso!" });
  }

  async deletar(request, response) {
    const { id } = request.params;

    await PostModel.destroy({ where: { id } });

    return response
      .status(200)
      .json({ mensagem: "Post deletado com sucesso!" });
  }
}

module.exports = PostController;
