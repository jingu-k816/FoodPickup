const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT food_items.*, categories.name AS category
    FROM food_items
    JOIN categories ON categories.id = category_id
    ORDER BY category_id;`)
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

