// mensaje.model.js
const db = require('../util/database');

module.exports = class Mensaje {
    constructor(usuario, mensaje) {
        this.usuario = usuario;
        this.mensaje = mensaje;
    }

    save() {
        return db.execute(
            'INSERT INTO mensaje (usuario, mensaje) VALUES (?, ?)',
            [this.usuario, this.mensaje]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM mensaje');
    }
}
