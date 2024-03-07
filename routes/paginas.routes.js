const express = require('express');
const router = express.Router();

// Importar mensajes desde app.js
// Arreglo para almacenar los mensajes y usuarios
const mensajes = require('../app').mensajes;

router.get('/halo', (request, response, next) => {
  //Mandar archivo halo.ejs como respuesta
  response.render('halo');
});

router.get('/', (request, response, next) => {
  response.render('index', { mensajes: mensajes });
});

router.get('/laboratorio6', (request, response, next) => {
  response.render('laboratorio6');
});
  
router.post('/', (request, response, next) => {    
  console.log(request.body);
  const nuevoMensaje = {
    usuario: request.body.usuario,
    mensaje: request.body.mensaje
  };
  mensajes.push(nuevoMensaje);//Agrega un nuevo mensaje al arreglo
  response.redirect('/');
});

module.exports = router;//