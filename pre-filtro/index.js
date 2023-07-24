import express from "express";
import dotenv from "dotenv";
import libros from "./routers/libros.routes.js";
//config
dotenv.config();

//up
const app = express();

app.use(express.json());
app.use("/libros", libros);

app.listen(process.env.PORT, () => {
  console.log(`aaa`);
});
