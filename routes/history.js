const express = require('express');
const router  = express.Router();
let result = {
  1: {total_price: "title1", date: "date", items: [{food_name: 'name', quantity: 1, price: 2}]},
  }


module.exports = (db) => {
  router.get("/reshaped", (req, res) => {

    db.query(`SELECT orders.id AS order_id, food_items.name AS food_name, order_items.quantity AS quantity,
    food_items.price AS price, orders.date AS date
    FROM order_items
    JOIN food_items ON food_item_id = food_items.id
    JOIN orders ON order_id = orders.id
    ORDER BY order_id;`)
    .then(data => {
        const reshape = (arr) => {
          let hash = {}
          for (let obj of arr){
            if (!hash[obj.order_id]){
              hash[obj.order_id] = {order_id:obj.order_id, date: obj.date, items: [{food_name: obj.food_name, quantity: obj.quantity, price: obj.price}]}
            } else {
              hash[obj.order_id]['items'].push({food_name: obj.food_name, quantity: obj.quantity,  price: obj.price})
            }
          }
          return hash
        }
        const users = data.rows;
        const reshaped = reshape(users)
        res.json(reshaped)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

router.get("/",(req,res) => {
  const username = req.session.userName;
  res.render("history", {username});
})
  return router;
};
