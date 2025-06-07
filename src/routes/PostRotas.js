const express = require("express");
const PostController = require("../controllers/post.controller");
const PostRotas = express.Router();

const postController = new PostController();

// CRUD Usuário
PostRotas.post("/posts", postController.criar);
PostRotas.get("/posts", postController.listar);
// PostRotas.get('/posts/:id', postController.consultarPorId);
// PostRotas.put('/posts/:id', postController.editar);
// PostRotas.delete('/posts/:id', postController.deletar);

module.exports = PostRotas;
