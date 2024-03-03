const http = require('http');
const filesystem = require('fs');

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        function promedio(arreglo) {
            var suma = 0;
            for (var i = 0; i < arreglo.length; i++) {
                suma += arreglo[i];
    }
     return suma / arreglo.length;
            
}
let respuesta = promedio(arreglo);
console.log(respuesta);

let miString = "Hola mundo!";

function stringArchivo(stringArchivo) {
    filesystem.writeFileSync('ArchivoConString.txt', stringArchivo);
}

stringArchivo(miString);

function bubbleSort(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        for (var j = 0; j < arreglo.length; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                var temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
            }
        }
    }
    return arreglo;
}
let arregloDesordenado = [5, 3, 8, 2, 1, 4, 7, 6, 10, 9];
let arregloOrdenado = bubbleSort(arregloDesordenado);
console.log(arregloOrdenado);

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    if (request.url === '/') {
        response.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
            <link rel="icon" type="image/x-icon" href="imagenes/icono.ico">
            <!-- minify -->
            <link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
            <!-- latest -->
            <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
            <!-- core style only -->
            <link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
        
            <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
            <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
            <title>Laboratorio</title>
        </head>
        <body>

        <style>header,nav{background-color:#f0ece2}*,.navbar{margin:0;padding:0}.navbar,main{display:flex}main,section{background-color:#dfd3c3}#footer,header{text-align:center;padding:20px}#footer,header,nav{padding:20px}body{font-family:'Times New Roman',Times,serif}nav{text-align:right}.navbar{list-style-type:none}.navbar li{margin-right:10px}.navbar li a{text-decoration:none;color:#000;padding:5px 10px;border:1px solid #000;border-radius:5px}.navbar li a:hover{background-color:#d3d3d3}main section{padding:15px;font-size:1em}section{flex:2}#article{font-size:17px;padding:30px}aside{background-color:#c7b198;flex:1;padding:15px}aside img{height:420px;width:100%}.sobremi{font-size:20px;margin-top:20px}#footer{background-color:#596e79;font-size:20px}</style>
         <header class="header">
                <h1>TC2005B Laboratorio</h1>
                <p>Cristian Chávez Guía, A01710680, a01710680@tec.mx</p>
            </header>
            <nav>
                <ul class="navbar">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="preguntas.html">Preguntas</a></li>
                    <li><a href="respuestas.html">Respuestas</a></li>
                    <li><a href="pruebasJavaScript.html">PruebasJS</a></li>
                    <li><a href="laboratorio6.html">Laboratio 6</a></li>
                </ul>
            </nav>
            <main>
                <section>
                    <div class="nes-container is-dark with-title nes-text is-success">
                        <p class="title">Sobre mí</p>
                        <p>Mi nombre es Cristian Chávez Guía, tengo 20 años y resido actualmente en Querétaro. Estoy estudiando ingeniería en tecnologías computacionales en el Tec de Monterrey campus Querétaro. Me gustaría dedicarme al desarrollo de software en un futuro, aún no tengo idea de en qué área o en qué especializarme, pero eso lo averiguaré en el transcurso del tiempo. Me gusta correr y soy parte del representativo de atletismo de la escuela, me enfoco en 5 y 10 kilómetros, aunque también me gustan los 1500 metros.</p>
                    </div>
                </section>
        
                <section>
                    <h3>Estoy asi de acabar la tarea xd: </h3>
                    <progress class="nes-progress is-error" value="95" max="100"></progress>
                </section>
        
                <section>
                    <h3>¿Te gustó la página?</h3>
                    <label>
                        <input type="radio" class="nes-radio" name="answer" checked />
                        <span>Yes</span>
                      </label>
                      
                      <label>
                        <input type="radio" class="nes-radio" name="answer" />
                        <span>No</span>
                      </label>
                </section>
        
                <section>
                    <button type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-default').showModal();">
                      Open dialog
                    </button>
                    <dialog class="nes-dialog" id="dialog-default">
                      <form method="dialog">
                        <p class="title">Dialog</p>
                        <p>Hola soy yo de nuevo</p>
                        <menu class="dialog-menu">
                          <button class="nes-btn">Cancel</button>
                          <button class="nes-btn is-primary">Confirm</button>
                        </menu>
                      </form>
                    </dialog>
                  </section>
                  <section class="icon-list">
                    <i class="nes-icon is-large heart"></i>
                    <i class="nes-icon is-large heart"></i>
                    <i class="nes-icon is-large heart"></i>
                    <i class="nes-icon is-large heart"></i>
                    <i class="nes-icon is-large heart"></i>
                    <i class="nes-icon is-large heart"></i>
                    <i class="nes-icon is-large heart"></i>
                    <!-- Copyright Nintendo -->
                    <i class="nes-mario"></i>
                    <i class="nes-ash"></i>
                    <i class="nes-pokeball"></i>
                    <i class="nes-bulbasaur"></i>
                    <i class="nes-charmander"></i>
                    <i class="nes-squirtle"></i>
                    <i class="nes-kirby"></i>
                  </section>
            </main>
        
            <footer id="footer">
                <p>
                    Este código fue creado en: <a href="https://code.visualstudio.com/">visual studio code</a>
                </p>
            </footer>
        
        </body>
        </html>`);
    } else {
        response.write('<h1>Error 404</h1>');
    }
});

server.listen(3000);

