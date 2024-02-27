function incrementar(producto) {
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
  });