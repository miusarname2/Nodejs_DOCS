import  readline  from "node:readline";
import {convertirDolaresAEuros,convertirDolaresALibras} from './conversor.js';

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese la cantidad de dolares que desea convertir ",(dolares)=> {
    readline.cursorTo(process.stdout,0,1);
    readline.clearScreenDown(process.stdout)
    console.log(`${dolares}$ son ${convertirDolaresALibras(dolares)} GBP o ${convertirDolaresAEuros(dolares)}€`)
    rl.close();
});
