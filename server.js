const express = require("express");
const PrivateRotas = require("./src/routes/PrivateRotas");
const PublicRotas = require("./src/routes/PublicRotas");
const syncDatabase = require("./src/config/syncDatabase");

// Cria uma instância do aplicativo Express
const app = express();
app.use(express.json()); // Permite que o Express entenda JSON no corpo das requisições

// Define a porta e o host do servidor
const port = 3000;
const host = "localhost";

// inicia o banco de dados
syncDatabase();

// Rotas
app.get("/", (request, response) =>
  response.status(200).send("Olá Mundo! Bem-vindos(as) ao Server JS!")
);
app.use(PublicRotas);
app.use(PrivateRotas);
app.get("/teste", (request, response) => {
  const { nome, sobrenome, idade } = request.query; // extrai os parametros da query string
  const dados =
    "Rota de teste Query: " + nome + "-" + sobrenome + ", " + idade + "anos";
  response.status(200).send(dados);
});

// Inicia o servidor
app.listen(port, host, () => {
  console.log(`Servidor rodando em: http://${host}:${port}`);
});
