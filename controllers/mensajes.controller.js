// mensajes.controller.js
const Mensaje = require('../models/mensaje.model');

exports.get_index = (request, response, next) => {
    Mensaje.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('index', { 
                mensajes: rows,
                usuario: request.cookies.usuario || '',
                username: request.session.username || ''
            });
        })
        .catch(error => {
            console.log(error);
            response.status(500).send('Error interno del servidor');
        });
};

exports.post_index = (request, response, next) => {
    const nuevoMensaje = new Mensaje(request.body.usuario, request.body.mensaje);
    nuevoMensaje.save()
        .then(() => {
            response.cookie('usuario', nuevoMensaje.usuario, { httpOnly: true });
            response.redirect('/');
        })
        .catch(error => {
            console.log(error);
            response.status(500).send('Error interno del servidor');
        });
};
