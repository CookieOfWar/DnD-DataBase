const express = require("express");
const app = express();

const { ClassesRu, ClassesEn } = require("./src/classes.cjs");

port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/classes", (req, res) => {
  res.send({ ru: ClassesRu, en: ClassesEn });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
