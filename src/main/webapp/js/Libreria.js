document.addEventListener('DOMContentLoaded', function () {

    // Muestra el mensaje de "sin resultados" si el grid llegó vacío
    var grid = document.getElementById('gridLibros');
    var mensajeVacio = document.getElementById('mensajeVacio');
    if (grid && mensajeVacio && grid.children.length === 0) {
        mensajeVacio.style.display = 'block';
    }

    // Escalona la animación de entrada de cada tarjeta
    var tarjetas = document.querySelectorAll('.tarjeta-libro');
    tarjetas.forEach(function (tarjeta, i) {
        tarjeta.style.animationDelay = (i * 0.06) + 's';
    });

    // Validación simple del precio en el formulario de registro
    var formRegistro = document.querySelector('.barra-registro');
    if (formRegistro) {
        formRegistro.addEventListener('submit', function (e) {
            var precio = formRegistro.querySelector('[name="precio"]');
            if (precio && parseFloat(precio.value) <= 0) {
                e.preventDefault();
                alert('El precio debe ser mayor a 0.');
                precio.focus();
            }
        });
    }

});