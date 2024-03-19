//Es común tener un archivo de modelo por tabla de la base de datos

// Arreglo para almacenar los mensajes
const db = require('../util/database');

// Clase del modelo de Mensaje
module.exports = class Mensaje {
    constructor(usuario, mensaje) {
        this.usuario = usuario;
        this.mensaje = mensaje;
    }

    // Método para guardar el mensaje en el arreglo
    save() {
        mensajes.push(
            {
                usuario: this.usuario,
                mensaje: this.mensaje,
            }
        );
        return db.execute(
            `INSERT INTO mensaje (mensaje) values (?)`,
            `INSERT INTO tiene (username) values (?)`,
            `INSERT INTO usuario (username, nombre, password) values (?, ?, ?)`,
        )
    }

    // Método estático para obtener todos los mensajes
    static fetchAll() {
        return db.execute('Select * from mensaje')
    }
}
