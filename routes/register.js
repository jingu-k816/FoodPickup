const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        const username = "";
        res.render("register", { users, username });
      })
      .catch((err) => {
        res.send("Please input all the fields correctly")
      });
  });
  router.post("/", (req, res) => {
    const user = req.body;
    const querySting = `
    INSERT INTO users(name, phone_number, password)
    VALUES ($1, $2, $3) RETURNING *;
  `;
    const values = [user.name, user.phone_number, user.password];
    db.query(querySting, values)
      .then((result) => {
        req.session.userName = result.rows[0].name;
        req.session.userId = result.rows[0].id;
        res.redirect("/");
      })
      .catch((err) => {
        res.send("Please input all the fields correctly");
      });
  });
  return router;
};
