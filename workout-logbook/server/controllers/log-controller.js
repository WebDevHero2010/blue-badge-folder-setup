let express = require("express");
let router = express.Router();
let sequelize = require("../db");
let validateSession = require("../middleware/validate-session");
let Log = sequelize.import("../models/log");

module.exports = router;

router.post("/", validateSession, (req, res) => {
  Log.create({
    description: req.body.log.description,
    definition: req.body.log.definition,
    result: req.body.log.result,
    owner_id: req.user.id,
  })
    .then((log) => {
      res.status(200).json({
        message: `Log has been added to the DB`,
        log: log,
      });
    })
    .catch((err) => res.status(500).json({ err }));
});

router.get("/", validateSession, (req, res) => {
  Log.findAll({ where: { owner_id: req.user.id } })
    .then((log) => res.status(200).json({ log }))
    .catch((err) => res.status(500).json({ error: err }));
});
