// is-auth.js
module.exports = (request, response, next) => {
    if (!request.session.username) {
        return response.redirect('/login');
    }
    next();
};
const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth'); 

router.get('/', isAuth, miControlador.miAccion);

module.exports = router;
