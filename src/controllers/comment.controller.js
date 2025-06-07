const CommentModel = require("../models/Comment.model");

class CommentController {
  constructor() {
    CommentModel.associaComentario();
  }

  async criar(request, response) {
    const body = request.body;
    await CommentModel.create(body);
    return response.status(201).json({
      mensagem: "Comentário criado com sucesso!",
    });
  }

  async listar(request, response) {
    const dados = await CommentModel.findAll({
      include: [
        {
          model: CommentModel,
          as: "comments_filhos",
        },
        {
          model: CommentModel,
          as: "comments_pai",
        },
      ],
    });
    return response.status(200).json(dados);
  }
}

module.exports = CommentController;
