const http = require('http');
const filesystem = require('fs');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const modulo1 = require('./routes/paginas.routes.js');
const modulo2 = require('./routes/preguntasRespuestas.routes.js');

app.use('/', modulo1);
app.use('/pp', modulo2);


app.use((request, response, next) => {
  response.status(404);
  let html = '<h2>Esta Pagina no existe</h2>';
  response.send(html); //Manda la respuesta
}); 

app.listen(3000);

