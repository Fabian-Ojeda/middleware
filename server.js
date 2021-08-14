const express = require('express') //Crear expres
const app = express()              //crear una nueva aplicación
const Shell = require('shelljs')   //Crea shell para la ejecución de scripts
const exec = require('child_process').exec //Este si ejecuta procesos
const lineReader = require('line-reader'); //Para leer linea por linea el archivo log

var answer = []



function leerEstatus(){

    lineReader.eachLine('./info.log', function (line) {
        if (answer.length >= 2) {
            answer.shift();
        }
        answer.push(line)
    });
}
    


//Shell.exec('./viewer.sh')
const myShellScript = exec('bash viewer.sh')

app.get('/', (req, res) => {
    leerEstatus()
    setTimeout(function() {
        res.send(""+answer[0])
    },5000);
    
})

app.listen(3030, () => {
    console.log('el middleware esta corriendo en el puerto 3030')
})