const { json } = require('body-parser');
const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`
    SELECT users.name, orders.id, is_accepted, is_completed, is_picked_up
    FROM orders
    JOIN users ON user_id = users.id
    ORDER BY orders.id;`)
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

  router.post("/", (req, res) => {
    let queryUpdate = `
    UPDATE orders
    SET is_accepted = true
   `
    const queryParam = [req.body.OrderId];

    if (req.body.status === "complete"){
      console.log("Complete button is clicked");
      queryUpdate += ', is_completed = true '
    }

    if (req.body.status === "pickedUp") {
      console.log("pickedup button is clicked");
      queryUpdate += ', is_picked_up = true '
    }

    queryUpdate += `WHERE id = $1;`
    console.log("query is: ", queryUpdate);
    console.log("req.body: ", req.body);

    db
    .query(queryUpdate, queryParam)
    .then(res.redirect("restaurant"))
    .catch(err => {
      res.status(500).json({error: err.message});
    });
  });
  return router;
}
