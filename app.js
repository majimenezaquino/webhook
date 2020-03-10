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
  // Your verify token. Should be a random string.
  console.log(req.boy);
  let VERIFY_TOKEN = "kfkajkfjakfkakfaijoerieri9ei9e9iuae9uirea9ura9ru8";

  // Parse the query params
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
    // Checks the mode and token sent is correct
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      // Responds with the challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});
app.post("/webhook", (req, res) => {
  console.log(req);
  res.json({ datos: req.body.username, mads: "jomfa" });
});
app.listen(process.env.PORT || 8080);
