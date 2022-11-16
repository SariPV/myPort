const express = require("express");
const validateForm = require("../controller/validateForm");
const router = express.Router();
const pool = require("../model/user_model");
const bcrypt = require("bcrypt");

router
  .route("/")
  .get(async (req, res) => {
    if (req.session.user && req.session.user.email) {
      res.json({ loggedIn: true, email: req.session.user.email });
    } else {
      res.json({ loggedIn: false });
    }
  })
  .post(async (req, res) => {
    

    const potentialLogin = await pool.query(
      "SELECT id, name,email, password FROM users u WHERE u.email=$1",
      [req.body.email]
    );

    if (potentialLogin.rowCount > 0) {
      const isSamePass = await bcrypt.compare(
        req.body.password,
        potentialLogin.rows[0].password
      );
      if (isSamePass) {
        req.session.user = {
          email: req.body.email,
          id: potentialLogin.rows[0].id,
        };
        res.send({
          token: 'test123'
        });
        // res.json({ loggedIn: true, email: req.body.email });
        
      } else {
        res.json({ loggedIn: false, status: "Wrong email or password!" });
        console.log("not good");
      }
    } else {
      console.log("not good");
      res.json({ loggedIn: false, status: "Wrong email or password!" });
    }
    
  });


module.exports = router;