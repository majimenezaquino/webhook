const express = require("express");
let bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.json({ miguel: "jimenez" });
});
app.get("/webhook", (req, res) => {
  console.log(req);
  res.json("kfkajkfjakfkakfaijoerieri9ei9e9iuae9uirea9ura9ru8");
});
app.post("/webhook", (req, res) => {
  console.log(req);
  res.json({ datos: req.body.username, mads: "jomfa" });
});
app.listen(8081);
