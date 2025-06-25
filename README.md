# Servidor Node.js com Express

Este é o backend do projeto de blog desenvolvido com **Node.js** e **Express**, utilizando **Sequelize** para ORM, **MySQL** como banco de dados e **JWT** para autenticação.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/) ^5.1.0
- [Sequelize ORM](https://sequelize.org/) ^6.37.7
- [MySQL2](https://www.npmjs.com/package/mysql2) ^3.14.1
- [JWT - JSON Web Token](https://jwt.io/) ^9.0.2
- [dotenv](https://www.npmjs.com/package/dotenv) ^16.5.0
- [crypto-js](https://www.npmjs.com/package/crypto-js) ^4.2.0
- [nodemon](https://nodemon.io/) ^3.1.10 (dev)

## Autenticação

O projeto usa **JWT (JSON Web Token)** para proteger as rotas privadas. As credenciais são criptografadas com `crypto-js` e armazenadas com segurança.

## Rotas Disponíveis

| Rota        | Tipo     | Descrição                         |
|-------------|----------|-----------------------------------|
| `/login`    | POST     | Acesso público                    |
| `/users`    | CRUD     | Gerencia usuários     (private)   |
| `/posts`    | CRUD     | Gerencia posts        (private)   |
| `/comments` | CRUD     | Gerencia comentários  (private)   |
| `/tags`     | CRUD     | Gerencia tags         (private)   |

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/IvanildoBorges/server-express-basic-blog.git
```

2. Acesse o diretório:

```bash
cd server-express-basic-blog
```

3. Instale as dependências:

```bash
npm install
```

4. Configure o arquivo ``.env``:

```env
JWT_SECRET=sua_chave_secreta_jwt
DB_HOST=localhost
PORT=3306
USERNAME=root
PASSWORD=sua_senha
DATABASE=blog
```

5. Inicie o servidor:

```bash
npm start
```

## Banco de Dados
- Utiliza MySQL com Sequelize para mapear modelos e relações.
- Rodar ``sequelize.sync()`` para criar as tabelas automaticamente com base nos modelos.

## Autor
Desenvolvido por [Ivanildo Borges](https://www.linkedin.com/in/IvanildoBorges)
