const Api = require("./api");

test("Teste de servidor rodando", async () => {
  const response = await Api.get("/");
  expect(response.status).toBe(200);
  expect(response.data).toBe("Olá Mundo! Bem-vindos(as) ao Server JS!");
});
