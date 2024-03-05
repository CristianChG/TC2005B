const express = require('express');
const router = express.Router();

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


router.get('/preguntas', (request, response, next) => {
    let html = html_header;
    html += `
    <div class="container m-5 p-3">
    <ol>
    <li>¿Cuál es la diferencia entre Internet y la World Wide Web?</li>
    <li>¿Cuáles son las partes de un URL?</li>
    <li>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</li>
    <li>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</li>
    <li>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</li>
    <li>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</li>
    <li>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</li>
    <li>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</li>
    <li>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</li>
    <li>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</li>
    <li>¿Qué componentes de estructura y estilo tiene una tabla?</li>
    <li>¿Cuáles son los principales controles de una forma HTML5?</li>
    <li>¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utitdzar la siguiente página para descubrirlo: http://html5test.com/ (Al responder la pregunta recuerda poner el navegador que utitdzas)</li>
    <li>¿Cuál es el ciclo de vida de los sistemas de información?</li>
    <li>¿Cuál es el ciclo de desarrollo de sistemas de información?</li>
    <li>Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS? </li>
    <li>Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</li>
    <li>Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</li>
    <li>¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</li>
    <li>¿Qué diferencias y semejanzas hay entre Java y JavaScript?</li>
    <li>¿Qué métodos tiene el objeto Date? (Menciona al menos 5*)</li>
    <li>¿Qué métodos tienen los arreglos? (Menciona al menos 5*)</li>
    <li>¿Cómo se declara una variable con alcance local dentro de una función?</li>
    <li>¿Qué implicaciones tiene utilizar variables globales dentro de funciones?</li>
    <li>Describe Material design</li>
    <li>¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?</li>
    <li>¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?</li>
    <li>Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?</li>
    <li>Describe el archivo package.json.</li>
</ol>
</div>
    `;
    html += html_footer;
    response.send(html);
});

router.get('/respuestas', (request, response, next) => {
  let html = html_header;
  html += `
  <div class="container m-5 p-3">

  <ol>
  <li>Internet es una red global de redes de computadoras interconectadas, mientras que la World Wide Web es un sistema de información que permite el acceso a recursos de Internet mediante documentos vinculados entre sí.</li>

  <li>Las partes de un URL son el protocolo, el dominio, el puerto, la ruta, la cadena de consulta y el fragmento.</li>

  <li>GET se utiliza para recuperar datos, HEAD para obtener encabezados, POST para enviar datos para ser procesados, PUT para actualizar recursos, PATCH para modificar parcialmente un recurso y DELETE para eliminar un recurso.</li>

  <li>Se debe utilizar el método POST al enviar un formulario HTML, ya que envía los datos de forma segura en el cuerpo de la solicitud HTTP.</li>

  <li>Se utiliza el método GET cuando se accede a una página a través de un URL en un navegador web.</li>

  <li>El código 200 significa "OK". No ocurrió ningún error, la solicitud fue exitosa y se devolvió el recurso solicitado correctamente.</li>

  <li>Sí, es responsabilidad del desarrollador corregir un error 404, ya que indica que el recurso solicitado no fue encontrado en el servidor.</li>

  <li>Sí, es responsabilidad del desarrollador corregir un error 500, ya que indica un error interno del servidor.</li>

  <li>Significa que el atributo ya no se recomienda utilizar y puede ser eliminado en futuras versiones de HTML. Algunos elementos desaprobados de HTML 4 en HTML5 incluyen &lt;font&gt;, &lt;center&gt;, y &lt;strike&gt;.</li>

  <li>Algunas diferencias principales son la introducción de nuevas etiquetas semánticas, soporte mejorado para multimedia, atributos desaprobados, y API de JavaScript mejorada en HTML5.</li>

  <li>Los componentes de estructura de una tabla incluyen filas (&lt;tr&gt;), celdas de encabezado (&lt;th&gt;) y celdas de datos (&lt;td&gt;). Los componentes de estilo pueden incluir propiedades como bordes, fondos y márgenes.</li>

  <li>Los principales controles de una forma HTML5 incluyen &lt;input&gt;, &lt;textarea&gt;, &lt;select&gt;, &lt;button&gt;, &lt;label&gt;, entre otros.</li>

  <li>Puedes verificar el soporte de HTML5 en tu navegador utilizando el sitio web http://html5test.com/.</li>

  <li>El ciclo de vida de los sistemas de información incluye etapas como planificación, análisis, diseño, implementación, pruebas, despliegue, mantenimiento y eventual retirada.</li>

  <li>El ciclo de desarrollo de sistemas de información varía según la metodología utilizada, pero generalmente incluye etapas como definición de requerimientos, diseño, desarrollo, pruebas, implementación y mantenimiento.</li>

  <li>El uso de !important en CSS debe evitarse en la medida de lo posible, ya que puede causar problemas de mantenimiento y dificultar la modificación del estilo en el futuro. Se debe priorizar el uso de selectores específicos y la cascada natural de CSS.</li>

  <li>La imagen de fondo de una página HTML debe elegirse con cuidado para asegurarse de que no distraiga demasiado del contenido principal, que se vea bien en diferentes dispositivos y que tenga un tamaño de archivo razonable para no afectar negativamente la velocidad de carga de la página.</li>

  <li>La elección de unidades depende del contexto y del diseño deseado. % es útil para diseños fluidos y adaptables, px es más preciso y pt se utiliza comúnmente para texto impreso. Es importante considerar la accesibilidad y la experiencia del usuario al elegir unidades.</li>

  <li>Una versión minimizada del CSS reduce el tamaño del archivo CSS al eliminar comentarios, espacios en blanco y otros caracteres no esenciales, lo que resulta en tiempos de carga más rápidos para los usuarios.</li>

  <li>Java es un lenguaje de programación orientado a objetos utilizado principalmente para aplicaciones de servidor y aplicaciones de escritorio, mientras que JavaScript es un lenguaje de secuencias de comandos utilizado principalmente para la programación del lado del cliente en páginas web. Ambos tienen sintaxis similares a C y comparten algunas características, pero son distintos en cuanto a su propósito y entorno de ejecución.</li>

  <li>Algunos métodos del objeto Date incluyen getDate(), getMonth(), getFullYear(), getHours(), getMinutes(), getSeconds(), getTime(), toLocaleString(), y toString().</li>

  <li>Algunos métodos de los arreglos incluyen push(), pop(), shift(), unshift(), splice(), slice(), concat(), join(), indexOf(), y forEach().</li>

  <li>Una variable con alcance local dentro de una función se declara utilizando la palabra clave var, let o const dentro del cuerpo de la función.</li>

  <li>Utilizar variables globales dentro de funciones puede causar problemas de colisión de nombres, dificultar la depuración y hacer que el código sea menos modular y reutilizable. Se recomienda evitar el uso excesivo de variables globales y preferir el encapsulamiento de variables dentro de funciones cuando sea posible.</li>

  <li>Material Design es un sistema de diseño desarrollado por Google que se centra en la usabilidad, la accesibilidad y la estética. Se caracteriza por el uso de sombras, profundidad, movimiento y colores vibrantes para crear una experiencia de usuario coherente en diferentes plataformas y dispositivos.</li>

  <li>Es una buena práctica utilizar JavaScript para validar los inputs de las formas antes de enviar los datos al servidor porque proporciona una experiencia de usuario más rápida y receptiva al validar los datos en el cliente antes de enviarlos al servidor, lo que puede reducir el número de solicitudes innecesarias al servidor y mejorar la eficiencia del sistema.</li>

  <li>Las validaciones hechas con JavaScript en el cliente pueden ser eludidas fácilmente por un usuario malintencionado mediante la manipulación directa del código JavaScript o la desactivación del JavaScript en el navegador. Por lo tanto, es importante realizar validaciones adicionales en el servidor para garantizar la seguridad de los datos.</li>

  <li>Aunque las validaciones de JavaScript en el cliente pueden ser eludidas, todavía son útiles para mejorar la experiencia del usuario y reducir la carga en el servidor al validar los datos antes de enviarlos. Sin embargo, es crucial complementar estas validaciones con validaciones adicionales en el servidor para garantizar la seguridad y la integridad de los datos.</li>

  <li>El archivo package.json es un archivo de configuración en proyectos Node.js que contiene información sobre el proyecto, sus dependencias, scripts de ejecución y más. Es esencial para gestionar y ejecutar proyectos Node.js.




  </li>
</ol>
  </div>
  `;
  html += html_footer;
  response.send(html);
});

module.exports = router;