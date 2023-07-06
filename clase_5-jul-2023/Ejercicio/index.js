import {createServer} from 'http'
import fs from 'fs'

const apphttp = createServer((req, res) => {
    if(req.url == "/asteroids"){
        fs.readFile('./views/asteroids/index.html', (err, data) => {
            if (err) {
              res.writeHead(404, { 'Content-Type': 'text/plain' });
              res.end('Error: Archivo no encontrado');
            } else {
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.end(data);
            }
          });
    }
});

apphttp.listen(3000,()=>{
    console.log("listening on port "+ 3000);
});