//Capa de controladores de la aplicación 
//Modelo Vista Controlador

exports.get_index = (request, response, next) => {
    // Obtener todos los mensajes utilizando el método fetchAll() del modelo
    console.log(request.cookies);
    console.log(request.cookies.usuario);
    const mensajes = Mensaje.fetchAll();
    response.render('index', { mensajes: mensajes ,
    usuario: request.cookies.usuario || '',
    });
};

// Importar mensajes desde app.js
// Arreglo para almacenar los mensajes y usuarios
const Mensaje = require('../models/mensaje.model');


exports.post_index = (request, response, next) => {
    console.log(request.body);
    const nuevoMensaje = new Mensaje(request.body.usuario, request.body.mensaje);
    nuevoMensaje.save(); // Guarda el nuevo mensaje utilizando el método save() del modelo

    //Crear una cookie
    response.setHeader('Set-Cookie', `usuario=${nuevoMensaje.usuario}`);
    
    response.redirect('/');
}

