const express = require('express') //Crear expres
const app = express()              //crear una nueva aplicación
const Shell = require('shelljs')   //Crea shell para la ejecución de scripts
const exec = require('child_process').exec //Este si ejecuta procesos
const lineReader = require('line-reader'); //Para leer linea por linea el archivo log

var answer = ['Esto fue seteado']



function leerEstatus(){
    lineReader.eachLine('./info.log', function (line) {
        if (answer.length >= 1) {
            answer.shift();
        }
        answer.push(line)
    });
    return answer[0]
}
    



//Shell.exec('./viewer.sh')
const myShellScript = exec('bash viewer.sh')

app.get('/', (req, res) => {
    var state = leerEstatus()
    console.log(state)
    res.send(""+state)
})

app.listen(3030, () => {
    console.log('el middleware esta corriendo en el puerto 3030')
})