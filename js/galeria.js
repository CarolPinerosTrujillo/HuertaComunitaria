/* Carruseles de la galería: solo avanzan mientras el puntero (o el foco) esté sobre ellos. */
(function () {
  'use strict';

  if (typeof bootstrap === 'undefined') { return; }

  document.querySelectorAll('.carrusel-actividad .carousel').forEach(function (el) {
    if (typeof bootstrap.Carousel === 'undefined') { return; }

    var instancia = bootstrap.Carousel.getOrCreateInstance(el, { ride: false, pause: false, interval: 4000 });

    var iniciar = function () { instancia.cycle(); };
    var detener = function () { instancia.pause(); };

    el.addEventListener('mouseenter', iniciar);
    el.addEventListener('mouseleave', detener);
    el.addEventListener('focusin', iniciar);
    el.addEventListener('focusout', detener);
  });
})();