const express = require("express");
const router = express.Router();
const cookieSession = require('cookie-session');

module.exports = (db) => {

  const getUserWithPhoneNumber = function(phone_number) {
    const queryString = `SELECT * FROM users WHERE phone_number =  $1`;
    const queryNumber = [Number(phone_number)];
    return db
    .query(queryString, queryNumber)
    .then(result => result.rows[0])
    .catch(error => error.message);
  }
  exports.getUserWithPhoneNumber = getUserWithPhoneNumber;

  const login =  function(phone_number, password) {
    return getUserWithPhoneNumber(phone_number)
    .then(user => {
      if (password === user.password) {
        return user;
      }
      return null;
    });
  }
  exports.login = login;

  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.render("login", { users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post('/', (req, res) => {
    const {phone_number, password} = req.body;
    login(phone_number, password)
      .then(user => {
        if (user) {
          req.session.userId = user.id;
          res.locals.users = user.id;
          res.redirect("/")
        } else {
          res.send({error: "error"});
          return;
        }
      })
      .catch(e => res.send(e));
  });
  return router;
};
