const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./Backend/routes/Routes");
const cors = require("cors");
const path = require("path");
//require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

dotenv.config();

console.log(process.env.DATABASE_ACCESS);

mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log("Database Connected");
});
app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.listen(4000, () => console.log("server connected"));
