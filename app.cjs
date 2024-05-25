const express = require("express");
const app = express();

port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/races", (req, res) => {
  res.send(require("./src/races.cjs"));
});

app.get("/classes", (req, res) => {
  res.send(require("./src/classes.cjs"));
});

app.get("spells", (req, res) => {
  res.send(require("./src/spells.cjs"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
