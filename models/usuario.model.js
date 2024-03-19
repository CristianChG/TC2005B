// usuario.model.js
const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {
    constructor(username, nombre, password) {
        this.username = username;
        this.nombre = nombre;
        this.password = password;
    }

    save() {
        return bcrypt.hash(this.password, 12)
            .then(hashedPassword => {
                return db.execute(
                    'INSERT INTO usuario (username, nombre, password) VALUES (?, ?, ?)',
                    [this.username, this.nombre, hashedPassword]
                );
            })
            .catch(error => {
                throw new Error('Error al encriptar la contraseña');
            });
    }

    static findByUsername(username) {
        return db.execute('SELECT * FROM usuario WHERE username = ?', [username]);
    }

    static comparePasswords(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    }
}
