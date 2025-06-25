const express = require("express");
const UserController = require("../controllers/user.controller");
const UserRotas = express.Router();

const userController = new UserController();

// CRUD Usuário
UserRotas.post("/users", userController.criar);
UserRotas.get("/users", userController.listar);
// UserController.get('/users/:id', userController.consultarPorId);
// UserController.put('/users/:id', userController.editar);
// UserController.delete('/users/:id', userController.deletar);

module.exports = UserRotas;
