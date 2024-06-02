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

app.get(/\/portrait\/(.*)\-(.*)\-(.*)/, (req, res) => {
  let params = req.path.split("/")[2].split("-");
  res.sendFile(
    __dirname + `/src/portraits/${params[0]}-${params[1]}-${params[2]}.jpg`
  );
});

app.get(/\/race/, (req, res) => {
  res.send(require(`./src/racesDetails.cjs`));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
