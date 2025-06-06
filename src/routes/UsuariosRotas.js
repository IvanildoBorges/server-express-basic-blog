const express = require('express');
const UsuariosController = require('../controllers/usuarios.controller');

const UsuariosRotas = express.Router();

const usuarioController = new UsuariosController();

// CRUD Usuário
UsuariosRotas.post('/users', usuarioController.criar);
UsuariosRotas.get('/users', usuarioController.listar);
UsuariosRotas.get('/users/:id', usuarioController.consultarPorId);
UsuariosRotas.put('/users/:id', usuarioController.editar);
UsuariosRotas.delete('/users/:id', usuarioController.deletar);

module.exports = UsuariosRotas; 