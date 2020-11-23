const express = require('express');
const movieRouter = express.Router();
const Models = require("../models.js");
const Movies = Models.Movie;
//passport.authenticate("jwt", { session: false }),
movieRouter
.get("/", async (req, res) => {
      
      let movies = await Movies.find();

      if (movies) {
        res.status(200).json(movies);
      } else {
        res.status(500).send("Error: " + err);
      }

        // .then(movies => {
        //   res.status(200).json(movies);
        // })
        // .catch(err => {
        //   console.error(err);
        //   res.status(500).send("Error: " + err);
        // });
    }
  );

module.exports = movieRouter;