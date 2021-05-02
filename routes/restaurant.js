const { json } = require('body-parser');
const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`
    SELECT users.name, orders.id
    FROM orders
    JOIN users ON user_id = users.id;`)
      .then(data => {
        const orders = data.rows;
        res.render("restaurant",{orders});
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
}
