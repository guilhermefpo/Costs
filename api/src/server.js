const express = require("express");

const app = express();

app.listen(3333, () => {
  console.log(`Servidor rodando na porta http://localhost:3333`);
});
