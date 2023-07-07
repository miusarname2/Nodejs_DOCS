import express from 'express'
import usuario from './routers/usuario.routes.js'
import dotenv from 'dotenv'

//config
dotenv.config();

//On -> server
const app = express();

//middlewares
app.use(express.json());
app.use("/usuario",usuario);




app.listen(process.env.PORT || 3000,()=>{
    console.log('listening on port ' + process.env.PORT);
});