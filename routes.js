const express = require("express");
const router = express.Router();
require("./config");
const User = require("./model");
const bcrypt = require("bcryptjs");

router.post("/save", async (req, res) => {
  res.send({ msg: "Data Received Successfully" });
  let password = req.body.password;
  password = await bcrypt.hash(password, 10);
  const user_data = new User({
    name: req.body.name,
    email: req.body.email,
    password,
  });
  const result = await user_data.save();
  if (result) console.log("Data Inserted into DB");
  else console.log("Something Went Wrong!");
});

module.exports = router;
