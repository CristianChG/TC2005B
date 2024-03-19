// users.controller.js
const Usuario = require('../models/usuario.model');

exports.post_login = (request, response, next) => {
    const { username, password } = request.body;
    Usuario.findByUsername(username)
        .then(([rows, fieldData]) => {
            if (rows.length > 0 && rows[0].password === password) {
                request.session.username = username;
                response.redirect('/');
            } else {
                response.redirect('/users/login');
            }
        })
        .catch(error => {
            console.log(error);
            response.status(500).send('Error interno del servidor');
        });
};
