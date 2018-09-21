var http = require ("http");

var manejador = function (solicitud, repuesta){
    console.log("Hola Mundo");
    repuesta.end(); /*señala cuando el servidor debe culminar
                     su busqueda*/
};

var servidor = http.createServer(manejador);

servidor.listen(8080);