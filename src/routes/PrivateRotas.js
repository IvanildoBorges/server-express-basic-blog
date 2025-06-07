const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const UserRotas = require("./UserRotas");
const TagsRotas = require("./TagsRotas");
const PostRotas = require("./PostRotas");
const CommentRotas = require("./CommentRotas");

const PrivateRotas = express.Router();

PrivateRotas.use((request, response, next) => {
  const { token } = request.headers;

  try {
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (erro, dados) => {
        if (erro) {
          return response.status(403).send("Token inválido");
        }

        console.log("Token válido: ", dados);
      });
    }
  } catch (error) {
    return response.status(401).send("Não autorizado! " + error);
  }

  next();
});

PrivateRotas.use(UserRotas);
PrivateRotas.use(PostRotas);
PrivateRotas.use(TagsRotas);
PrivateRotas.use(CommentRotas);

module.exports = PrivateRotas;
