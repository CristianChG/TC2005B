//Capa de controladores de la aplicación 
//Modelo Vista Controlador

exports.get_index = (request, response, next) => {
    // Obtener todos los mensajes utilizando el método fetchAll() del modelo
    const mensajes = Mensaje.fetchAll();
    response.render('index', { mensajes: mensajes });
};

// Importar mensajes desde app.js
// Arreglo para almacenar los mensajes y usuarios
const Mensaje = require('../models/mensaje.model');

exports.post_index = (request, response, next) => {
    console.log(request.body);
    const nuevoMensaje = new Mensaje(request.body.usuario, request.body.mensaje);
    nuevoMensaje.save(); // Guarda el nuevo mensaje utilizando el método save() del modelo
    response.redirect('/');
}


exports.get_halo = (request, response, next) => {
    //Mandar archivo halo.ejs como respuesta
    response.render('halo');
};

exports.get_laboratorio6 = (request, response, next) => {
    response.render('laboratorio6');
};

//Modulos de preguntas y repuestas
exports.get_respuestas = (request, response, next) => {
    response.render('respuestas');
};


exports.get_preguntas = (request, response, next) => {
    response.render('preguntas');
};