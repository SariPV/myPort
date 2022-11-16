const express = require("express");
const validateForm = require("../controller/validateForm");
const router = express.Router();
const pool = require("../model/user_model");
const bcrypt = require("bcrypt");


router.post("/", async (req, res) => {

  const existingUser = await pool.query(
    "SELECT email from users WHERE email=$1",
    [req.body.email]
  );

  if (existingUser.rowCount === 0) {
    // register
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const newUserQuery = await pool.query(
      "INSERT INTO users(name,email, password) values($1,$2,$3) RETURNING * ",
      [req.body.name,req.body.email, hashedPass]
    );
 

    res.json({ loggedIn: true, email: req.body.email });
  } else {
    res.json({ loggedIn: false, status: "This email exist" });
  }
});

router.get("/", (req, res, next) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      })
   
  });
module.exports = router;