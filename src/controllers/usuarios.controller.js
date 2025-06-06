const Usuario = require('../models/usuario.model');

class UsuariosController {
    
    criar(request, response) {
        const { nome, login, senha } = request.body;

        Usuario.criar(nome, login, senha);
        return response.status(201).json({
            mensagem: "Usuário criado com sucesso!"
        });
    }
    
    listar(request, response) {
        const dados = Usuario.listar();
        return response.status(200).json(dados);
    }
    
    consultarPorId(request, response) {
        const { id } = request.params;

        const dados = Usuario.consultarPorId(id);
        return response.status(200).json(dados);
    }
    
    editar(request, response) {
        const { id } = request.params;
        const { nome, login, senha } = request.body;

        Usuario.editar(id, nome, login, senha);

        return response.status(200).json({
            mensagem: "Usuário atualizado com sucesso!"
        });
    }
    
    deletar(request, response) {
        const { id } = request.params;

        Usuario.deletar(id);

        return response.status(200).json({
            mensagem: "Usuário deletado com sucesso!"
        });
    }
}

module.exports = UsuariosController;