const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM food_items;`)
      .then(data => {
        const foods = data.rows;
        console.log(foods)
        res.render("index", {foods});
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};

