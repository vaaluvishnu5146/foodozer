const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/foodozer")
  .then((response) => {
    // console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
