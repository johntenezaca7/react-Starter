const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());

//Send static files
app.use(express.static(__dirname + "/public"));

app.get("/api/test", (req, res) => {
  res.send({ test: "testing" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
