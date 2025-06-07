const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const AuthController = require("../controllers/auth.controller");

const PublicRotas = express.Router();

PublicRotas.post("/login", (request, response) => {
  const { email, password } = request.body;
  const auth = new AuthController();

  const dados = auth.login(email, password);

  if (dados) {
    const token = jwt.sign(dados, process.env.JWT_SECRET);
    return response.status(200).json({ token: token });
  }

  return response.status(401).send("Login ou senha inválidos!");
});

module.exports = PublicRotas;
