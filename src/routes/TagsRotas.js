const express = require('express');
const TagsController = require('../controllers/tags.controller');
const TagsRotas = express.Router();

const tagsController = new TagsController();

// CRUD Usuário
TagsRotas.post('/tags', tagsController.criar);
TagsRotas.get('/tags', tagsController.listar);

module.exports = TagsRotas; 