const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const AuthController = require("../controllers/auth.controller");

const PublicRotas = express.Router();

PublicRotas.post("/login", async (request, response) => {
  const { email, password } = request.body;
  const auth = new AuthController();

  const dados = await auth.login(email, password);

  if (dados) {
    const dadosToken = {
      id: dados.id,
      email: dados.email,
      username: dados.username,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    };
    const token = jwt.sign(dadosToken, process.env.JWT_SECRET);
    return response.status(200).json({ token: token });
  }

  return response.status(401).send("Login ou senha inválidos!");
});

module.exports = PublicRotas;
