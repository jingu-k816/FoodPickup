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
        let username = "";
        res.render("login", { users, username});
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
          req.session.userName = user.name;
          req.session.userId = user.id;
          if (user.name === "Nylah Hall"){
            res.redirect("/orders");
          }else{
            res.redirect("/")
          }
        } else {
          res.send({error: "error"});
          return;
        }
      })
      .catch(e => res.send(e));
  });
  return router;
};
