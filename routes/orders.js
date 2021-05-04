require('dotenv').config();

const { json } = require('body-parser');
const express = require('express');
const router  = express.Router();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`
    SELECT users.name, orders.id, is_accepted, is_completed, is_picked_up
    FROM orders
    JOIN users ON user_id = users.id
    ORDER BY orders.id;`)
      .then(data => {
        const users = data.rows;
        console.log("WHAT IS USERS IN ORDERS.JS", users);
        const username = "Nylah Hall"
          res.render("orders",{users, username});
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/:id", (req, res) => {
    let queryUpdate = `
    UPDATE orders
    SET is_accepted = true
   `

    const queryParam = [req.params.id];
    if (req.query.status === "incomplete") {
      // const processingTime = req.body.processTime;
      // // client.messages
      // // .create({body: `Hi there! Your food will be ready in ${processingTime} minutes.`, from: '+18478921526', to: '+16472954679'})
      // // .then(message => console.log(message.sid));
    }

    if (req.query.status === "complete"){
      queryUpdate += ', is_completed = true '
      // client.messages
      // .create({body: 'Hi there Your food is ready Please come and pick it up!', from: '+18478921526', to: '+16472954679'})
      // .then(message => console.log(message.sid));
    }

    if (req.query.status === "pickedUp") {
      queryUpdate += ', is_picked_up = true '
    }

    queryUpdate += `WHERE id = $1;`

    db
    .query(queryUpdate, queryParam)
    .then(res.redirect("/orders"))
    .catch(err => {
      res.status(500).json({error: err.message});
    });
  });
  return router;
}
