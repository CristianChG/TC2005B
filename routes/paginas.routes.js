const express = require('express');
const router = express.Router();

const mensajesController = require('../controllers/mensajes.controller');
const modulosController = require('../controllers/modulos.controller');

router.get('/laboratorio6', modulosController.get_laboratorio6);

router.get('/halo', modulosController.get_halo);

router.get('/', mensajesController.get_index);

router.post('/', mensajesController.post_index);

module.exports = router;//