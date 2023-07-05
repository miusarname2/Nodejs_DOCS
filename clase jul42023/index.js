import  readline  from "node:readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese el nombre ",(nombre)=> {
    readline.cursorTo(process.stdout,0,1);
    readline.clearScreenDown(process.stdout)
    console.log("Data:\n"+nombre);
    
    //Esta es otro "input"
    rl.question("Ingrese el nombre ",(edad)=> {
        readline.cursorTo(process.stdout,0,1);
        readline.clearScreenDown(process.stdout)
        console.log("Data:\n"+edad);
        rl.close();
    });
});



