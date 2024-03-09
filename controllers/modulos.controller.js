exports.get_halo = (request, response, next) => {
    //Mandar archivo halo.ejs como respuesta
    response.render('halo');
};

exports.get_laboratorio6 = (request, response, next) => {
    response.render('laboratorio6');
};

//Modulos de preguntas y repuestas
exports.get_respuestas = (request, response, next) => {
    response.render('respuestas');
};


exports.get_preguntas = (request, response, next) => {
    response.render('preguntas');
};