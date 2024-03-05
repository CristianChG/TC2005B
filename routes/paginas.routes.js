const express = require('express');
const router = express.Router();

const filesystem = require('fs');

const html_header = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <meta name="author" content="Cristian Chávez Guía">
      <!--Icons-->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
      <!--Bootstrap-->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

      <title>Laboratorio 10</title>
      <style>
        p{
          font-style: italic;
          size: 25px;
        }
      </style>

      <header class="container-fluid p-3 bg-light">
    <div class="row align-items-center">
      <div class="col-auto">
        <h2 class="m-0">Laboratorio 10</h2>
      </div>
      <div class="col-auto ms-auto">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/halo">Personajes de halo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/laboratorio6">Laboratorio 6</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/PP/preguntas">Preguntas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/PP/respuestas">Respuestas</a>
          </li>
        </ul>
      </div>
    </div>
  </header>

    </head>
    <body>

`;


const html_footer = `
<footer class="container-fluid fixed-bottom bg-dark text-light">
    <div class="text-center py-3">
      Cristian Chávez Guía &copy; 2024
    </div>
  </footer>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
   </body>
  </html>
`;

router.get('/halo', (request, response, next) => {
    let html = html_header;
    html += `
    <div class="container-fluid p-5">
    <h1 class="text-center">Personajes de Halo</h1>
    <div class="row">
      <div class="col-md-4">
        <div class="card mb-3">
          <img src="https://e1.pxfuel.com/desktop-wallpaper/519/601/desktop-wallpaper-doomguy-vs-master-chief-death-battle.jpg" class="card-img-top" alt="Master Chief">
          <div class="card-body">
            <h5 class="card-title">Master Chief</h5>
            <p class="card-text">John-117, también conocido como Master Chief, es el protagonista de la serie Halo.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3">
          <img src="https://i.pinimg.com/736x/a6/fe/21/a6fe2122952d1d2623ef26c32ce96188.jpg" class="card-img-top" alt="Spartan Locke">
          <div class="card-body">
            <h5 class="card-title">Spartan Locke</h5>
            <p class="card-text">Spartan Locke es un supersoldado del UNSC que aparece en Halo 5: Guardians.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3">
          <img src="https://i.pinimg.com/originals/55/59/63/55596315153566b89bfd22361217ce78.png" class="card-img-top" alt="Arbiter">
          <div class="card-body">
            <h5 class="card-title">Arbiter</h5>
            <p class="card-text">El Arbiter es un Sangheili que fue líder del Covenant y luego aliado del UNSC.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3">
          <img src="https://cdn.vox-cdn.com/thumbor/01oeWTI_0NEvAylZT1l8mW0JQnw=/47x0:1312x843/1400x1400/filters:focal(47x0:1312x843):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/45947092/cortana___halo_4___model_10_by_solarnova1101-d5kuefe.0.0.png" class="card-img-top" alt="Cortana">
          <div class="card-body">
            <h5 class="card-title">Cortana</h5>
            <p class="card-text">Cortana es una inteligencia artificial que acompaña al Master Chief en sus misiones.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3">
          <img src="https://cdna.artstation.com/p/assets/images/images/045/358/454/large/richard-reyes-atriox-01.jpg?1642532630" class="card-img-top" alt="Atriox">
          <div class="card-body">
            <h5 class="card-title">Atriox</h5>
            <p class="card-text">Atriox es un Jiralhanae líder del Banished, una facción separatista del Covenant.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3">
          <img src="https://i.ytimg.com/vi/3ctuxiaST5I/maxresdefault.jpg" class="card-img-top" alt="Prophet of Truth">
          <div class="card-body">
            <h5 class="card-title">Prophet of Truth</h5>
            <p class="card-text">El Prophet of Truth era un líder del Covenant que buscaba activar los Halo para eliminar a la humanidad.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    html += html_footer;
    response.send(html);
});

router.get('/', (request, response, next) => {
    let html = html_header;
    html += `
    <main class="container-fluid p-3">
    <div class="row">
      <div class="col-md-8">
        <h3 class="text-center">Sobre mí</h3>
        <p class="p-4">Mi nombre es Cristian Chávez Guía, tengo 20 años y resido actualmente en Querétaro. Estoy estudiando ingeniería en tecnologías computacionales en el Tec de Monterrey campus Querétaro. Me gustaría dedicarme al desarrollo de software en un futuro, aún no tengo idea de en qué área o en qué especializarme, pero eso lo averiguaré en el transcurso del tiempo. Me gusta correr y soy parte del representativo de atletismo de la escuela, me enfoco en 5 y 10 kilómetros, aunque también me gustan los 1500 metros.</p>
  
        <form action='/' method="POST">
          <div class="mb-3">
            <label for="usuario" class="form-label">Usuario</label>
            <input type="text" class="form-control" id="usuario" name="usuario">
            <div class="form-text">Escribe tu nombre</div>
          </div>
          <div class="mb-3">
            <label for="mensaje" class="form-label">Mensaje</label>
            <input type="text" class="form-control" id="mensaje" name="mensaje">
            <div class="form-text">Escribe un mensaje :)</div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
  
      </div>
      <div class="col-md-4">
        <aside class="text-center">
          <h3>Hola tonotos</h3>
          <iframe width="420" height="315" src="https://www.youtube.com/embed/Ma5hTmmmTbI" title="hola tonotos el gato" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </aside>
      </div>
    </div>
  </main>
    `;
    html += html_footer;
    response.send(html);
  });

  router.get('/laboratorio6', (request, response, next) => {
    let html = html_header;
    html += `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Bienvenido!</strong> Selecciona los botones para agregar o eliminar productos
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>

    <div class="mt-1 container-fluid --bs-emphasis-color">
        <div class="row">
            <div class="col">
              <div class="card text-center">
                <img src="imagenes/samsungs24.png" class="card-img-top" alt="galaxy s24">
                <div class="card-body">
                  <h5 class="card-title">Galaxy S24 Ultra</h5>
                  <p class="card-text">Color: Gris titaneo</p>
                  <p class="card-text">Precio: $33,999</p>
                  <button type="button" class="btn btn-primary" onclick="decrementar('s24')">-</button>
                  <span id="cantidad_s24">(0)</span>
                  <button type="button" class="btn btn-primary" onclick="incrementar('s24')">+</button>
                </div>
              </div>
            </div>
            <div class="col">
                <div class="card text-center">
                  <img src="imagenes/galaxybudsfe.png" class="card-img-top" alt="galaxy buds fe">
                  <div class="card-body">
                    <h5 class="card-title">Galaxy Buds FE</h5>
                    <p class="card-text">Color: Grafito</p>
                    <p class="card-text">Precio: $1,499</p>
                    <button type="button" class="btn btn-primary" onclick="decrementar('buds')">-</button>
                  <span id="cantidad_buds">(0)</span>
                  <button type="button" class="btn btn-primary" onclick="incrementar('buds')">+</button>
                  </div>
                </div>
              </div>
            <div class="col">
              <div class="card text-center">
                <img src="imagenes/galaxywatch6.png" class="card-img-top" alt="galaxy watch 6">
                <div class="card-body">
                  <h5 class="card-title">Galaxy Watch 6</h5>
                  <p class="card-text">Color: Dorado</p>
                  <p class="card-text">Precio: $6,999</p>
                  <button type="button" class="btn btn-primary" onclick="decrementar('watch')">-</button>
                  <span id="cantidad_watch">(0)</span>
                  <button type="button" class="btn btn-primary" onclick="incrementar('watch')">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="card text-center">
      <div class="card-header">
        Lista de compras
      </div>
      <div class="card-body">
        <h5 class="card-title">Total</h5>
        <p class="card-text">Galaxy S24 Ultra ($ <span id="total_s24">0</span>)</p>
        <p class="card-text">Galaxy Buds FE ($ <span id="total_buds">0</span>)</p>
        <p class="card-text">Galaxy Watch 6 ($ <span id="total_watch">0</span>)</p>
      </div>
      <div class="card-footer text-body-secondary">
        Total: 
        <span id="total_compra">0</span>
      </div>
    </div>
    <script>function incrementar(producto) {
      var cantidadElemento = document.getElementById('cantidad_' + producto);
      var totalElemento = document.getElementById('total_' + producto);
      var cantidad = parseInt(cantidadElemento.textContent.replace(/[()]/g, ''));
      cantidad++;
      cantidadElemento.textContent = '('  + cantidad + ')';
      totalElemento.textContent = cantidad * getPrecio(producto);
      actualizarTotalCompra();
      actualizarBotonMenos(producto, cantidad);
    }
  
    function decrementar(producto) {
      var cantidadElemento = document.getElementById('cantidad_' + producto);
      var totalElemento = document.getElementById('total_' + producto);
      var cantidad = parseInt(cantidadElemento.textContent.replace(/[()]/g, ''));
      if (cantidad > 0) {
        cantidad--;
        cantidadElemento.textContent = '(' + cantidad + ')';
        totalElemento.textContent = cantidad * getPrecio(producto);
        actualizarTotalCompra();
        actualizarBotonMenos(producto, cantidad);
      }
    }
  
    function getPrecio(producto) {
      switch (producto) {
        case 's24':
          return 33999;
        case 'buds':
          return 1499;
        case 'watch':
          return 6999;
        default:
          return 0;
      }
    }
  
    function actualizarTotalCompra() {
      var total_s24 = parseInt(document.getElementById('total_s24').textContent);
      var total_buds = parseInt(document.getElementById('total_buds').textContent);
      var total_watch = parseInt(document.getElementById('total_watch').textContent);
      var total_compra = total_s24 + total_buds + total_watch;
      document.getElementById('total_compra').textContent = total_compra;
    }
  
    function actualizarBotonMenos(producto, cantidad) {
      var botonMenos = document.querySelector('#cantidad_' + producto).previousElementSibling;
      if (cantidad === 0) {
        botonMenos.style.display = 'none';
      } else {
        botonMenos.style.display = 'inline-block';
      }
    }
  
    document.addEventListener('DOMContentLoaded', function() {
      var cantidades = document.querySelectorAll('[id^="cantidad_"]');
      cantidades.forEach(function(elemento) {
        var cantidad = parseInt(elemento.textContent.replace(/[()]/g, ''));
        if (cantidad === 0) {
          elemento.previousElementSibling.style.display = 'none';
        }
      });
    });</script>
    `;
    html += html_footer;
    response.send(html);
  });
  
  router.post('/', (request, response, next) => {    
    console.log(request.body);
    const datos = 'Usuario: ' + request.body.usuario + ', Mensaje: ' + request.body.mensaje + '\n';
    filesystem.writeFileSync('archivo.txt', datos,{ flag: 'a' });
    response.redirect('/');
  });

  module.exports = router;//