let router = require("express").Router(); //here
let User = require("../db").import("../models/user"); //here
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/create", function (req, res) {
  User.create({
    username: req.body.user.username,
    password: bcrypt.hashSync(req.body.user.password, 13),
  }).then(function createSuccess(user) {
    let token = jwt.sign({ id: user.id }, "i_am_a_passcode", {
      expiresIn: 60 * 60 * 24,
    });
    const responeObj = {
      user: user,
      message: "it worked!",
      sessionToken: token,
    };
    res.json(responeObj);
  });
});

router.post("/login", (req, res) => {
  User.findOne({ where: { username: req.body.user.username } })
    .then((user) => {
      if (user) {
        bcrypt.compare(
          req.body.user.password,
          user.password,
          (err, matches) => {
            if (matches) {
              const token = jwt.sign({ id: user.id }, "i_am_a_passcode", {
                expiresIn: 60 * 60 * 48,
              });
              res.status(200).json({
                user: user,
                message: `You logged in successfully`,
                sessionToken: token,
              });
            } else {
              res.status(502).json({ error: "login failed" });
            }
          }
        );
      } else {
        res.status(500).json({ error: "user does not exist" });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
