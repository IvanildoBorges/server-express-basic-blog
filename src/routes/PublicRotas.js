const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const AuthController = require('../controllers/Auth.controller');

const PublicRotas = express.Router();

PublicRotas.post('/login', (request, response) => {
    const { login, senha } = request.body;
    const auth = new AuthController();

    const dados = auth.login(login, senha);

    if (dados) {
        const token = jwt.sign(dados, process.env.JWT_SECRET);
        return response.status(200).json({ token: token });
    }

    return response.status(401).send("Login ou senha inválidos!");
});

module.exports = PublicRotas