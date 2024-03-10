exports.get_halo = (request, response, next) => {
    response.render('halo', {
        username: request.session.username || '',
    });
};

exports.get_laboratorio6 = (request, response, next) => {
    response.render('laboratorio6', {
        username: request.session.username || '',
    });
};

//Modulos de preguntas y repuestas
exports.get_respuestas = (request, response, next) => {
    response.render('respuestas', {
        username: request.session.username || '',
    });
};


exports.get_preguntas = (request, response, next) => {
    response.render('preguntas', {
        username: request.session.username || '',
    });
};