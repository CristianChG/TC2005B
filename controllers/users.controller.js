// users.controller.js
const Usuario = require('../models/usuario.model');

exports.post_register = (request, response, next) => {
    const { username, nombre, password } = request.body;
    Usuario.findByUsername(username)
        .then(([rows, fieldData]) => {
            if (rows.length > 0) {
                // El usuario ya existe
                return response.redirect('/register');
            } else {
                const nuevoUsuario = new Usuario(username, nombre, password);
                return nuevoUsuario.save();
            }
        })
        .then(() => {
            response.redirect('/login');
        })
        .catch(error => {
            console.log(error);
            response.status(500).send('Error interno del servidor');
        });
};
exports.post_login = (request, response, next) => {
    const { username, password } = request.body;
    Usuario.findByUsername(username)
        .then(([rows, fieldData]) => {
            if (rows.length > 0) {
                const user = rows[0];
                return Usuario.comparePasswords(password, user.password)
                    .then(doMatch => {
                        if (doMatch) {
                            request.session.username = username;
                            return request.session.save(err => {
                                response.redirect('/');
                            });
                        } else {
                            response.redirect('/login');
                        }
                    });
            } else {
                response.redirect('/login');
            }
        })
        .catch(error => {
            console.log(error);
            response.status(500).send('Error interno del servidor');
        });
};
exports.get_register = (request, response, next) => {
    response.render('register', {
        csrfToken: request.csrfToken()
    });
};


exports.post_login = (request, response, next) => {
    // Lógica de autenticación del usuario

    // Después de autenticar al usuario, obtener sus roles y permisos
    const userId = request.user.id; // Suponiendo que el ID del usuario está disponible después de la autenticación
    const userRoles = await UserRoleModel.getUserRoles(userId);
    const roleIds = userRoles.map(role => role.role_id);
    const userPermissions = await RolePermissionModel.getRolePermissions(roleIds);

    // Almacenar los roles y permisos en la sesión del usuario
    request.session.roles = userRoles;
    request.session.permissions = userPermissions;

    // Redireccionar a la página principal
    response.redirect('/');
};