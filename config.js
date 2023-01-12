const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/user_info")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.log("Something Went Wrong!");
  });
