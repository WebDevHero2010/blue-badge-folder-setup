var express = require("express");
var app = express();
var db = require("./db");
var user = require("./controllers/usercontroller");
var game = require("./controllers/gamecontroller");

db.sync();
// app.use(require("body-parser"));
app.use(express.json());

app.use("/api/auth", user);

app.use(require("./middleware/validate-session"));

app.use("/api/game", game);

app.listen(4000, () => {
  console.log("App is listening on 4000");
});
