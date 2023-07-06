import {createServer} from 'http'

const apphttp = createServer((req, res) => {
    if(req.url == "/"){
        res.send
    }
});

const config ={
    hostname: '127.6.9.26',
    port : 5015
}

apphttp.listen(50000,()=>{
    //console.log(process.env)
    console.log("listening on port "+config.port)
});