class PostModel {
    static lista = [{ id: 1, titulo: "HTML e CSS", conteudo: "", user_id: 1 }];

    static criar(titulo, conteudo) {
        PostModel.lista.push({ 
            id: PostModel.lista.length, 
            titulo: titulo, 
            conteudo: conteudo 
        });
    }

    static listar() {
        return PostModel.lista;
    }

    static consultarPorId(id) {
        const post = PostModel.lista.find(item => item.id == id);

        return post;
    }

    static editar(id, titulo, conteudo) {
        const index = PostModel.lista.findIndex(post => post.id == id);
        PostModel.lista[index] = {
            id: PostModel.lista[index].id,
            nome: titulo,
            login: conteudo
        };
    }

    static deletar(id) {
        const dados = PostModel.lista.filter(item => item.id != id);

        PostModel.lista = dados;
    }
}

module.exports = PostModel;