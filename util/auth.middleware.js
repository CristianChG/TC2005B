// Middleware de autorización (auth.middleware.js)

module.exports = (request, response, next) => {
    const requiredPermission = getRequiredPermissionForRoute(request.path); // Lógica para obtener el permiso requerido para la ruta
    if (!request.session.permissions.includes(requiredPermission)) {
        return response.status(403).send('Unauthorized');
    }
    next();
};

// En el archivo de rutas
const authMiddleware = require('./auth.middleware');

router.get('/ruta-protegida', authMiddleware, miControlador.miAccion);
