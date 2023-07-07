import { Router } from "express";
import mysql from "mysql2";

const usuario = Router();

let con = undefined;

//middleware
usuario.use((req, res, next) => {
  try {
    con = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
    });
    next();
  } catch (e) {
    res.sendStatus(500).send({ message: "Error creating pool" });
  }
});


usuario.post("/", (req, res) => {
  con.query(
    `INSERT INTO tb_usuario_M3 (nom_com, edad) VALUES (?, ?)
        `,
    [req.body.nom_com, req.body.edad],
    (err, data, fils) => {
      console.log(err);
      console.log(data);
      console.log(fils);
      res.sendStatus(data.affectedRows +200).send();
    }
  );
});

usuario.get("/", (req, res) => {
  try{
    con.query(
        `SELECT * FROM tb_usuario_M3`,
        [req.body.nom_com, req.body.edad],
        (err, data, fils) => {
          console.log(err);
          console.log(data);
          console.log(fils);
          res.send(data);
        },
      );
  }catch (e){
    res.sendStatus(500).send("Ha habido un error...")
  }
});

usuario.put("/", (req, res) => {
    try{
        con.query(
            `UPDATE tb_usuario_M3 SET nom_com = ? , edad = ? WHERE id = ?;`,
            [req.body.nom_com, req.body.edad,req.body.id],
            (err, data, fils) => {
              console.log(err);
              console.log(data);
              console.log(fils);
              res.sendStatus(data.affectedRows +200).send();
            },
          );
    }catch(e){
        console.log(e)
    }
});

usuario.delete("/", (req, res) => {
    
});

export default usuario;
