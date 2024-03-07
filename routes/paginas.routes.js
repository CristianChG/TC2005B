const express = require('express');
const router = express.Router();

const mensajesController = require('../controllers/mensajes.controller');

router.get('/halo', mensajesController.get_halo);

router.get('/', mensajesController.get_index);

router.post('/', mensajesController.post_index);

router.get('/laboratorio6', mensajesController.get_laboratorio6);

module.exports = router;//