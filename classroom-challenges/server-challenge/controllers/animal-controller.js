var express = require("express");
var router = express.Router();
var sequelize = require("../db");
let validateSession = require("../middleware/validate-session");
var Animal = sequelize.import("../models/animal");

module.exports = router;

router.post("/create", validateSession, (req, res) => {
  Animal.create({
    name: req.body.animal.name,
    legNumber: req.body.animal.legNumber,
    predator: req.body.animal.predator,
    userID: req.user.id,
  })
    .then((animal) => {
      res.status(200).json({
        message: `${req.body.animal.name} has been added to the DB.`,
        animal: animal,
      });
    })
    .catch((err) => res.status(500).json({ err }));
});

router.get("/", validateSession, (req, res) => {
  Animal.findAll({ where: { userID: req.user.id } })
    .then((animals) => res.status(200).json(animals))
    .catch((err) => res.status(500).json({ err }));
});

router.delete("/delete/:Name", validateSession, (req, res) => {
  Animal.destroy({ where: { name: req.params.Name, userID: req.user.id } })
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json({ err }));
});

router.put("/update/:animalName", validateSession, (req, res) => {
  const query = { where: { name: req.params.animalName } };
  const updateEntry = {
    name: req.body.animal.name,
    legNumber: req.body.animal.legNumber,
    predator: req.body.animal.predator,
    userID: req.user.id,
  };

  Animal.update(updateEntry, query)
    .then((animal) =>
      res.status(200).json({
        message: `${req.body.animal.name} was updated!`,
      })
    )
    .catch((err) => res.status(500).json({ err }));
});

module.exports = router;
