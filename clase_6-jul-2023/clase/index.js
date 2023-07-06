import dotenv from 'dotenv'
import express from 'express'

//middleware configuration
dotenv.config();
let conf = JSON.parse(process.env.MY_CONFIG);
console.log(process.env.MY_CONFIG);


// server
const app = express();

//middleware 
app.use()

//routes
app.get('/', (req,res)=>{
    res.send('hola');
});
app.post('/', (req,res)=>{
    res.send('chao papu');
});


//listen
app.listen(conf.port, ()=>{
    console.log("escuchandoen el puerto " + conf.port)
});