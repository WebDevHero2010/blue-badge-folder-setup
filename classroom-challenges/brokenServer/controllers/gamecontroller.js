var router = require("express").Router();
var Game = require("../db").import("../models/game");
const validateSession = require("../middleware/validate-session");

router.get("/all", validateSession, (req, res) => {
  Game.findAll({ where: { owner_id: req.user.id } }).then(
    function findSuccess(data) {
      res.status(200).json({
        games: games,
        message: "Data fetched.",
      });
    },

    function findFail() {
      res.status(500).json({
        message: "Data not found",
      });
    }
  );
});

router.get("/:id", validateSession, (req, res) => {
  Game.findOne({ where: { id: req.params.id, owner_id: req.user.id } }).then(
    (game) => {
      if (game) {
        res.status(200).json({
          game: game,
        });
      } else {
        res.status(500).json({
          message: "Data not found.",
        });
      }
    }
  );
});

router.post("/create", validateSession, (req, res) => {
  Game.create({
    title: req.body.game.title,
    owner_id: req.user.id,
    studio: req.body.game.studio,
    esrb_rating: req.body.game.esrb_rating,
    user_rating: req.body.game.user_rating,
    have_played: req.body.game.have_played,
  }).then(
    function createSuccess(game) {
      res.status(200).json({
        game: game,
        message: "Game created.",
      });
    },

    function createFail(err) {
      res.status(500).send(err.message);
    }
  );
});

router.put("/update/:id", validateSession, (req, res) => {
  Game.update(
    {
      title: req.body.game.title,
      studio: req.body.game.studio,
      esrb_rating: req.body.game.esrb_rating,
      user_rating: req.body.game.user_rating,
      have_played: req.body.game.have_played,
    },
    {
      where: {
        id: req.params.id,
        owner_id: req.user,
        id,
      },
    }
  ).then(
    function updateSuccess(game) {
      res.status(200).json({
        game: game,
        message: "Successfully updated.",
      });
    },

    function updateFail(err) {
      res.status(500).json({
        message: err.message,
      });
    }
  );
});

router.delete("/remove/:id", validateSession, (req, res) => {
  Game.destroy({
    where: {
      id: req.params.id,
      owner_id: req.user.id,
    },
  }).then(
    function deleteSuccess(game) {
      res.status(200).json({
        game: game,
        message: "Successfully deleted",
      });
    },

    function deleteFail(err) {
      res.status(500).json({
        error: err.message,
      });
    }
  );
});

module.exports = router;
