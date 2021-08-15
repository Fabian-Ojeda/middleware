const express = require('express') //Crear expres
const app = express()              //crear una nueva aplicación
const Shell = require('shelljs')   //Crea shell para la ejecución de scripts
const exec = require('child_process').exec //Este si ejecuta procesos
const lineReader = require('line-reader'); //Para leer linea por linea el archivo log
const cors = require('cors');
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

app.use(cors(
    config.application.cors.server
));

app.get('/', (req, res) => {
    leerEstatus()
    setTimeout(function() {
        var data = JSON.stringify(answer)
        res.status(200)
        res.send(data)
    },4000);
    
})

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: ('*'), 
                    credentials: true
                }
            ]
        }
}

app.listen(3030, () => {
    console.log('el middleware esta corriendo en el puerto 3030')
})