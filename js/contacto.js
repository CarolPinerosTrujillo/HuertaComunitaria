(function () {
  'use strict';

  var FORM = document.getElementById('formContacto');
  if (!FORM) { return; }

  var campos = {
    nombre: document.getElementById('nombre'),
    correo: document.getElementById('correo'),
    telefono: document.getElementById('telefono'),
    interes: document.getElementById('interes'),
    mensaje: document.getElementById('mensaje'),
    honey: document.getElementById('_honey')
  };
  var btn = document.getElementById('btnEnviar');
  var textoOriginal = btn.textContent;

  var CORREO_VISIBLE = 'huertahayuelo2025s@gmail.com';
  var ENDPOINT = 'https://formsubmit.co/ajax/caroll25m@gmail.com';

  var RE_NOMBRE = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü][A-Za-zÁÉÍÓÚáéíóúÑñÜü\s.'-]{1,99}$/;
  var RE_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var RE_TELEFONO = /^[0-9+()\-\s]{7,20}$/;

  function sanear(valor) {
    return String(valor || '')
      .replace(/[\u0000-\u001F\u007F]/g, '')
      .replace(/[<>]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function errorEn(campo, texto) {
    Swal.fire({
      icon: 'warning',
      title: 'Revisa el formulario',
      text: texto,
      confirmButtonText: 'Entendido'
    });
    if (campo && typeof campo.focus === 'function') {
      campo.focus();
      if (typeof campo.scrollIntoView === 'function') {
        campo.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
    return false;
  }

  function validar() {
    var nombre = sanear(campos.nombre.value);
    var correo = sanear(campos.correo.value);
    var telefono = sanear(campos.telefono.value);
    var mensaje = sanear(campos.mensaje.value);

    if (!nombre) { return errorEn(campos.nombre, 'Escribe tu nombre, por favor.'); }
    if (!RE_NOMBRE.test(nombre)) { return errorEn(campos.nombre, 'El nombre solo puede llevar letras y espacios (2 a 100 caracteres).'); }
    if (!correo) { return errorEn(campos.correo, 'Ingresa tu correo electrónico.'); }
    if (!RE_CORREO.test(correo)) { return errorEn(campos.correo, 'El correo electrónico no parece válido.'); }
    if (telefono && !RE_TELEFONO.test(telefono)) { return errorEn(campos.telefono, 'El teléfono solo puede tener números, espacios y + - ( ) (7 a 20 caracteres).'); }
    if (!campos.interes.value) { return errorEn(campos.interes, 'Selecciona en qué te interesa participar.'); }
    if (mensaje.length > 1000) { return errorEn(campos.mensaje, 'El mensaje no puede superar los 1000 caracteres.'); }
    return true;
  }

  function terminarMostrarExito() {
    FORM.reset();
    Swal.fire({
      icon: 'success',
      title: '¡Mensaje enviado!',
      text: 'Gracias por escribirnos. Te responderemos pronto.',
      confirmButtonText: 'Perfecto'
    });
  }

  function terminarMostrarError() {
    Swal.fire({
      icon: 'error',
      title: 'No pudimos enviar tu mensaje',
      text: 'Intenta de nuevo en unos minutos o escríbenos a ' + CORREO_VISIBLE + '.',
      confirmButtonText: 'Cerrar'
    });
  }

  function bloquearTemporalmente(ms) {
    btn.disabled = true;
    setTimeout(function () { btn.disabled = false; }, ms);
  }

  FORM.addEventListener('submit', function (evento) {
    evento.preventDefault();
    evento.stopPropagation();

    // Honeypot: si una bot lo llenó, ignoramos el envío en silencio.
    if (campos.honey && campos.honey.value) {
      FORM.reset();
      return;
    }

    if (!validar()) { return; }

    var payload = {
      _subject: 'Mensaje del sitio web · Huerta de Hayuelos',
      nombre: sanear(campos.nombre.value),
      correo: sanear(campos.correo.value),
      telefono: sanear(campos.telefono.value),
      interes: campos.interes.value,
      mensaje: sanear(campos.mensaje.value),
      _honey: ''
    };

    btn.disabled = true;
    btn.textContent = 'Enviando…';

    var ok = false;
    fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(function (respuesta) { return respuesta.json(); })
      .then(function (datos) {
        ok = datos && datos.success === 'true';
        if (ok) {
          terminarMostrarExito();
        } else {
          terminarMostrarError();
        }
      })
      .catch(function () {
        terminarMostrarError();
      })
      .finally(function () {
        btn.textContent = textoOriginal;
        bloquearTemporalmente(10000);
      });
  });
})();