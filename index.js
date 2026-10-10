require('dotenv').config()
const http = require('http')

function requestController(req, res){
    console.log('Bienvenidos al curso')
    res.end('Servidor en linea y respondiendo correctamente')
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 10000

server.listen(PORT, function(){
    console.log("Aplicacion corriendo en: " + PORT)
})
