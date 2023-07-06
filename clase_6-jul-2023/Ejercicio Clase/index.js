import express from 'express'
import dotenv from 'dotenv'

const app = express();

//middlewares/config
dotenv.config();
app.use(express.json());
app.use(express.text());

app.get('/campus/:nombre', (req,res)=>{
    let obj = {
        "DATA" : req.body,
        'URL-GET': req.query,
        "Params": req.params
    }
    res.send(obj);
});


//activate server
app.listen(process.env.PORT || 3000,()=>{
    console.log("Listen on port: " + process.env.PORT)
});