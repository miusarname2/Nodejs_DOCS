import { Router } from "express";
import middleware from "../middleware/middleware.js";
//import {StorageLibros} from '../controller/storageLibros'
const libros = Router();

libros.get("/", middleware,(req, res) => {
  res.send(JSON.stringify(req.body));
});

export default libros;
