const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const database = require("./configs/db");
database.connect();
const port = process.env.PORT || 3000;
app.use(cors());
const mainRouter = require("./routes/index");

app.use(express.json());
app.use("/api/v1", mainRouter);


app.listen(port, (err) => {
  if (err) {
    console.log("Error while connecting express server");
    process.exit(1);
  } else {
    console.log(`Server is running on ${port}`);
  }
});
