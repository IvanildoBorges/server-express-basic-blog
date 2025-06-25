const Api = require("./api");

test("Teste de crud usuários", async () => {
  const response = await Api.post("/users", {
    email: "admin@mail.com",
    username: "Admin",
    password: "123",
  });

  expect(response).toBe("Usuário cadastrado com sucesso!");
});
