import dotenv from 'dotenv'
import express from 'express'
import { SignJWT, jwtVerify } from "jose";

//config
dotenv.config();

const app = express();

app.post('/:id/:nombre', async(req, res) => {
    let jsons = {
        id: req.params.id,
        nombre : req.params.nombre
    };

    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT({jsons});
    const jwt = await jwtconstructor
    .setProtectedHeader({alg : "HS256", typ : "JWT"})
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    res.send({jwt});

})

app.get('/',async(req,res) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({"token" : ":("});
    try {
        const encoder = new TextEncoder()
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        res.send(jwtData)
    } catch (err) {
        res.sendStatus(401).send({"token" : "Salio mal :("});
    }
})


app.listen(3001,()=>{
    console.log("listen on port 3001");
})