const TagsModel = require("../models/Tags.model");

class TagsController {
  async criar(request, response) {
    const { name } = request.body;

    await TagsModel.create({ name: name });
    return response.status(201).json({ mensagem: "Tag criada com sucesso!" });
  }

  async listar(request, response) {
    const dados = await TagsModel.findAll();
    return response.status(200).json(dados);
  }
}

module.exports = TagsController;
