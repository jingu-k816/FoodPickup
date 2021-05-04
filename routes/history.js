const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM orders;`)
      .then(data => {
        const users = data.rows;
        const username = req.session.userName;
        res.render("history", { users, username });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
