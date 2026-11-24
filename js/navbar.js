/* Navbar compacta: se vuelve translúcida al recorrer la página
   y muestra sus opciones al pasar el mouse (en pantallas con cursor). */
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.navbar');
  if (!nav) return;

  function actualizarNavbar() {
    nav.classList.toggle('navbar-transparente', window.scrollY > 60);
  }

  actualizarNavbar();
  window.addEventListener('scroll', actualizarNavbar, { passive: true });

  // En móvil, con el menú desplegado la barra debe verse sólida y legible.
  const menu = document.getElementById('navbarText');
  if (menu) {
    menu.addEventListener('shown.bs.collapse', function () {
      nav.classList.add('menu-abierto');
    });
    menu.addEventListener('hidden.bs.collapse', function () {
      nav.classList.remove('menu-abierto');
    });
  }
});
