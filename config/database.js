const mongoose = require("mongoose");

const dotenv = require("dotenv").config();

const connectWithDb = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected sucessfully");
    })
    .catch((error) => {
      console.log("DB facing connection Issues");
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithDb;