var router = require("express").Router(); //needed to require('express)
var bcrypt = require("bcryptjs"); //bcrypt needed to be bcry
var jwt = require("jsonwebtoken");

var User = require("../db").import("../models/user");

router.post("/signup", (req, res) => {
  User.create({
    full_name: req.body.user.full_name,
    username: req.body.user.username,
    passwordHash: bcrypt.hashSync(req.body.user.password, 10),
    email: req.body.user.email,
  })
    .then(function signupSuccess(user) {
      let token = jwt.sign({ id: user.id }, "lets_play_sum_games_man", {
        expiresIn: 60 * 60 * 24,
      });
      res.status(200).json({
        user: user,
        message: "User successfully created!",
        sessionToken: token,
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

router.post("/signin", (req, res) => {
  User.findOne({ where: { username: req.body.user.username } }).then((user) => {
    if (user) {
      bcrypt.compare(
        req.body.user.password,
        user.passwordHash,
        function (err, matches) {
          if (matches) {
            var token = jwt.sign({ id: user.id }, "lets_play_sum_games_man", {
              expiresIn: 60 * 60 * 24,
            });
            res.json({
              user: user,
              message: "Successfully authenticated.",
              sessionToken: token,
            });
          } else {
            res.status(502).send({ error: "Passwords do not match." });
          }
        }
      );
    } else {
      res.status(403).send({ error: "User not found." });
    }
  });
});

module.exports = router;
