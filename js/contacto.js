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

  var CORREO_VISIBLE = 'huertahayuelos2025@gmail.com';
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

  function mostrarAlerta(opciones) {
    if (typeof Swal !== 'undefined') {
      Swal.fire(opciones);
    } else if (typeof window.alert === 'function') {
      window.alert(opciones.title + '\n\n' + (opciones.text || ''));
    } else if (typeof console !== 'undefined') {
      console.warn('[contacto.js] SweetAlert2 no cargó:', opciones);
    }
  }

  function errorEn(campo, texto) {
    mostrarAlerta({
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
    mostrarAlerta({
      icon: 'success',
      title: '¡Mensaje enviado!',
      text: 'Gracias por escribirnos. Te responderemos pronto.',
      confirmButtonText: 'Perfecto'
    });
  }

  function terminarMostrarError(motivo) {
    var texto = 'Intenta de nuevo en unos minutos o escríbenos a ' + CORREO_VISIBLE + '.';
    if (typeof motivo === 'string' && motivo) {
      var motivoLimpio = motivo.replace(/[\u0000-\u001F\u007F]/g, '').slice(0, 120);
      if (motivoLimpio) {
        texto = 'Motivo: ' + motivoLimpio + '\n\n' + texto;
      }
    }
    mostrarAlerta({
      icon: 'error',
      title: 'No pudimos enviar tu mensaje',
      text: texto,
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
      _captcha: 'false',
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
      .then(function (respuesta) {
        return respuesta.json().then(function (datos) {
          console.log('[contacto.js] FormSubmit - estado ' + respuesta.status, datos);
          return datos;
        });
      })
      .then(function (datos) {
        ok = datos && (datos.success === 'true' || datos.success === true);
        if (ok) {
          terminarMostrarExito();
        } else {
          terminarMostrarError(datos && datos.message);
        }
      })
      .catch(function (error) {
        console.warn('[contacto.js] Error de red o de parseo', error);
        terminarMostrarError();
      })
      .finally(function () {
        btn.textContent = textoOriginal;
        bloquearTemporalmente(10000);
      });
  });
})();