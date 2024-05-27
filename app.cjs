const express = require("express");
const app = express();
const cors = require("cors");

port = 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("DnD-API");
});

app.get("/races", (req, res) => {
  res.send(require("./src/races.cjs"));
});

app.get("/classes", (req, res) => {
  res.send(require("./src/classes.cjs"));
});

app.get("/spells", (req, res) => {
  res.send(require("./src/spells.cjs"));
});

app.get("/<race>-<class>-<sex>", (req, res) => {
  res.send(
    require(`./src/portraits/${req.params.race}-${req.params.class}-${req.params.sex}.jpg`)
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
