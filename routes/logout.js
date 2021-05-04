const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("logout! :");
    req.session = null;
    console.log("IS REQ.SESSION.USERID HERE?",req.session);
    res.redirect("/");
  });

  return router;
}
