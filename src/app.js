import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});

import express from "express";

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log("listening on 8080");
});

import mongoose from "mongoose";
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Connection failed!");
});

db.once("open", () => {
  console.log("Connected!");
});
