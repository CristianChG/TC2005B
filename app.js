const express = require('express');
const app = express();

// Arreglo para almacenar los mensajes y usuarios
// Importar mensajes desde app.js
exports.mensajes = [];

//Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
//Carpetas estaticas
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear el cuerpo de las solicitudes
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const modulo1 = require('./routes/paginas.routes.js');
const modulo2 = require('./routes/preguntasRespuestas.routes.js');

app.use('/', modulo1);
app.use('/pp', modulo2);

//Mandar archivo html como respuesta
app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, 'views', '404.html')); //Manda la respuesta
});

app.listen(3000);