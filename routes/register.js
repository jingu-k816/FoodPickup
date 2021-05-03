const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.render("register", { users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  router.post('/', (req, res) => {
    const user = req.body;
    console.log('this is reqbody', req.body)
    const querySting = `
    INSERT INTO users(name, phone_number, password)
    VALUES ($1, $2, $3) RETURNING *;
  `;
    const values = [user.name, user.phone_number, user.password];
      db
        .query(querySting, values)
        .then(res.redirect("/"))
        .catch(err => {
          res.status(500).json({ error: err.message });
    })
  });
  return router;
};


// db.addUser(user)

// user.password = bcrypt.hashSync(user.password, 12);  //implement once bycript is a dependancy



