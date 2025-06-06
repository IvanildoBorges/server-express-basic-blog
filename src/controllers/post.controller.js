const Post = require('../models/post.model');

class PostController {
    
    criar(request, response) {
        const { titulo, conteudo } = request.body;

        Post.criar(titulo, conteudo);
        return response.status(201).json({
            mensagem: "Post criado com sucesso!"
        });
    }
    
    listar(request, response) {
        const dados = Post.listar();
        return response.status(200).json(dados);
    }
    
    consultarPorId(request, response) {
        const { id } = request.params;

        const dados = Post.consultarPorId(id);
        return response.status(200).json(dados);
    }
    
    editar(request, response) {
        const { id } = request.params;
        const { titulo, conteudo } = request.body;

        Post.editar(id, titulo, conteudo);

        return response.status(200).json({
            mensagem: "Post atualizado com sucesso!"
        });
    }
    
    deletar(request, response) {
        const { id } = request.params;

        Post.deletar(id);

        return response.status(200).json({
            mensagem: "Post deletado com sucesso!"
        });
    }
}

module.exports = PostController;