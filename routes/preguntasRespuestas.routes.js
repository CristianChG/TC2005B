const express = require('express');
const router = express.Router();

const modulosController = require('../controllers/modulos.controller');

router.get('/preguntas', modulosController.get_preguntas);

router.get('/respuestas', modulosController.get_respuestas);

module.exports = router;