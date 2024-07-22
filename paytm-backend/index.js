
const express = require("express");
const app = express();

require("dotenv").config();

const database = require("./configs/db");
database.connect();

const uri = process.env.MONGO_URI;
console.log("connection string = ", uri);

const port = process.env.PORT;

app.listen(port, (err) => {
  if (err) {
    console.log("Error while connecting express server");
    process.exit(1);
  } else {
    console.log(`Server is running on ${port}`);
  }
});
