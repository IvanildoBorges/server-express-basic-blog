const express = require("express");
const CommentController = require("../controllers/comment.controller");
const CommentRotas = express.Router();

const commentController = new CommentController();

// CRUD Comentários
CommentRotas.post("/comments", commentController.criar);
CommentRotas.get("/comments", commentController.listar);

module.exports = CommentRotas;
