const Api = require("./api");
const jwt = require("jsonwebtoken");
require("dotenv").config();

test("Teste de autenticação login", async () => {
  const response = await Api.post("/login", {
    username: "Ivan",
    password: "123456",
  });

  const verify = jwt.verify(response.data.token, process.env.JWT_SECRET);
  expect(verify.username).toBe("Ivan");
});
