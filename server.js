const express = require('express') //Crear expres
const app = express()              //crear una nueva aplicación
const Shell = require('shelljs')   //Crea shell para la ejecución de scripts

Shell.exec('./viewer.sh')

app.get('/', (req, res) => {
    res.sendStatus(200);
})

app.listen(3030, () => {
    console.log('el middleware esta corriendo en el puerto 3030')
})