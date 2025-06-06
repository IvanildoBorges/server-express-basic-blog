class Usuario {
    static lista = [{ id: 1, nome: "Ivan", login: "Admin", senha: "1234" }];

    static criar(nomeJSON, loginJSON, senhaJSON) {
        Usuario.lista.push({ 
            id: Usuario.lista.length, 
            nome: nomeJSON, 
            login: loginJSON,
            senha: senhaJSON 
        });
    }

    static authenticate(login, senha) {
        const indice = Usuario.lista.findIndex(usuario => usuario.login === login && usuario.senha === senha);

        return Usuario.lista[indice];
    }

    static listar() {
        return Usuario.lista;
    }

    static consultarPorId(id) {
        const usuario = Usuario.lista.find(item => item.id == id);

        return usuario;
    }

    static editar(id, nome, login, senha) {
        const index = Usuario.lista.findIndex(usuario => usuario.id == id);
        Usuario.lista[index] = {
            id: Usuario.lista[index].id,
            nome: nome,
            login: login,
            senha: senha
        };
    }

    static deletar(id) {
        const dados = Usuario.lista.filter(item => item.id != id);

        Usuario.lista = dados;
    }
}

module.exports = Usuario;