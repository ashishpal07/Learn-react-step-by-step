const mongoose = require("mongoose");
require("dotenv").config();

 module.exports.connect = () => {
  mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connection established successfully..."))
  .catch(err => console.log(err));
}
