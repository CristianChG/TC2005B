const express = require('express');
const router = express.Router();

router.get('/preguntas', (request, response, next) => {
  response.render('preguntas');
});

router.get('/respuestas', (request, response, next) => {
  response.render('respuestas');
});

module.exports = router;