//Es común tener un archivo de modelo por tabla de la base de datos

// Arreglo para almacenar los mensajes
const mensajes = [];

// Clase del modelo de Mensaje
class Mensaje {
    constructor(usuario, mensaje) {
        this.usuario = usuario;
        this.mensaje = mensaje;
    }

    // Método para guardar el mensaje en el arreglo
    save() {
        mensajes.push(this);
    }

    // Método estático para obtener todos los mensajes
    static fetchAll() {
        return mensajes;
    }
}

module.exports = Mensaje;
