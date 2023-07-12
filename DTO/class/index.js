import express from "express";
import dotenv from "dotenv";
import { user } from "./controller/user.js";
import { plainToClass } from "class-transformer";
import "reflect-metadata";

const app = express();

//config
dotenv.config();

//middlewares
app.use(express.json());

app.get("/", (req, res) => {
  try {
    let data = plainToClass(user, req.body);
    console.log(data);
  } catch (error) {
    console.log("ÑO");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Run on port" + " " + process.env.PORT);
});
