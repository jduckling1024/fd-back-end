import router from "./api/routes/index.js";
import express from "express";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// server 설정
var app = express();

app.set("port", process.env.PORT || 8080);

http.createServer(app).listen(app.get("port"), () => {
  console.log("Listening on " + app.get("port"));
});

let corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);


// db 설정
dotenv.config({
  path: "../.env"
});

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected successful!"))
  .catch((err) => console.log(err));
