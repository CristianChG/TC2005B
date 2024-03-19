// usuario.model.js
const db = require('../util/database');

module.exports = class Usuario {
    constructor(username, nombre, password) {
        this.username = username;
        this.nombre = nombre;
        this.password = password;
    }

    save() {
        return db.execute(
            'INSERT INTO usuario (username, nombre, password) VALUES (?, ?, ?)',
            [this.username, this.nombre, this.password]
        );
    }

    static findByUsername(username) {
        return db.execute('SELECT * FROM usuario WHERE username = ?', [username]);
    }
}
