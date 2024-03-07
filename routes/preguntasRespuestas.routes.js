const express = require('express');
const router = express.Router();

const mensajesController = require('../controllers/mensajes.controller');

router.get('/preguntas', mensajesController.get_preguntas);

router.get('/respuestas', mensajesController.get_respuestas);

module.exports = router;