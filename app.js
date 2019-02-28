const app = require("express")();
const bodyParser = require("body-parser");
const { getLocation } = require("./controllers");

app.use(bodyParser.json());
app.get("/api", getLocation);
app.use((err, req, res, next) => {
  res.status(500).send({ err: err.toString() });
});

module.exports = app;
