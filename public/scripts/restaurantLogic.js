//Working on how to have a submit handler request

const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);

const orderAccept = function () {
  $("#acceptButton").on("submit", function (user_id) {
    const queryUpdate = `
    UPDATE orders
    SET is_accepted = true
    WHERE is_accepted = false AND user_id = $1;`
    return db
    .query(queryUpdate, [user_id])
    .then(result => {
      console.log("hello");
      return result.rows
    })
    .catch(err => err.message);
  })
}



$(document).ready(function () {
  orderAccept();
});
