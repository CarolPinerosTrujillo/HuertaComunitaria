<div align="center">

# 🌱 Huerta Comunitaria de Hayuelos

**Cultivando comunidad, cosechando vida** 🌿

---

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

<a href="https://CarolPinerosTrujillo.github.io/HuertaComunitaria/">🚀 Ver la página en vivo</a>

</div>

---

## 🌻 ¿Qué es este proyecto?

Este es el sitio web de la **Huerta Comunitaria de Hayuelos**, un **proyecto social** donde un grupo de vecinos se une con un propósito compartido: **tratar sus residuos, recuperar el suelo y aprovecharlos para cuidar la tierra**.

Fomentamos el **compostaje**, el **uso responsable de los recursos** y el **aprendizaje conjunto** sobre agricultura y huertas comunitarias. La página es el escaparate digital de este movimiento: presenta quiénes somos, qué hacemos, nuestras actividades, una galería de momentos, una guía interactiva de compostaje paso a paso, un blog y un formulario para unirse.

> 💛 *No solo cultivamos alimentos... cultivamos comunidad.*

---

## 🧭 Secciones del sitio

El menú (presente en todas las páginas) es: **Inicio · Sobre nosotros · Actividades · Galería · Compostaje · Blog** + botón **Únete** que lleva al formulario.

| Página | Descripción |
|--------|-------------|
| 🏠 **Inicio** | Landing: ¿qué hacemos?, sobre nosotros, galería, preguntas frecuentes y mapa |
| 🌾 **Actividades** | Jornadas de siembra, talleres, cosechas y calendario de la huerta |
| 📸 **Galería** | Fotos y emoticones que retratan la vida de la huerta |
| 🧫 **Compostaje** | Guía interactiva: infografía con burbujas que abren cada paso o residuo en grande |
| 📝 **Blog** | Historias y aprendizajes de la comunidad |
| ✉️ **Contacto** | Formulario funcional (envía correos) + mapa de ubicación |

---

## 🛠️ Tecnologías utilizadas

- **HTML5** — estructura semántica de las páginas
- **CSS3** — estilos, paleta de colores y diseño responsive
- **Bootstrap 5.3** — componentes (navbar, cards, carousel, accordion, tablas, formularios)
- **JavaScript** — componentes de Bootstrap, interactividad de la guía de compostaje (hotspots y modales) y envío del formulario de contacto
- **FormSubmit** — backend del formulario de contacto para recibir los mensajes por correo
- **SweetAlert2** — alertas de confirmación y errores con la paleta del sitio
- **Google Fonts** — tipografías *Edu VIC WA NT Hand* (títulos) y *Quicksand* (texto)
- **WebP** — imágenes optimizadas (infografías, pasos y fotos de la galería)
- **Flaticon** — emoticones e iconos de la sección "¿Qué hacemos?"
- **Google Maps Embed** — mapa de ubicación en el footer

---

## 🎨 Identidad visual

Pensamos en los colores de la tierra:

- 🟤 **Café / madera** — la tierra y el arraigo
- 🟡 **Amarillo / ámbar** — el sol y la vitalidad
- 🌿 **Verde** — la naturaleza y el crecimiento
- 🥛 **Crema / blanco** — la calidez y la comunidad

---

## ⏳ Pendientes por implementar

- [x] **Formulario de contacto funcional** — envía los mensajes por correo vía FormSubmit, con validación, honeypot antispam y alertas SweetAlert2.
- [ ] **Sistema de booking** para inscribirse a actividades y talleres.
- [ ] **Más fotos reales de la huerta** en la galería (ya hay algunas).
- [ ] **Blog dinámico** con sistema de administración de entradas.
- [ ] **Modo oscuro** 🌙.
- [ ] **Multilingüe** (español / inglés).
- [ ] **SEO y accesibilidad avanzada** (metas de SEO por página, auditoría ARIA ampliada).

---

## 🚀 Deploy

La aplicación está desplegada en **GitHub Pages**:

🔗 [**https://CarolPinerosTrujillo.github.io/HuertaComunitaria/**](https://CarolPinerosTrujillo.github.io/HuertaComunitaria/)

---

## 🏗️ Cómo correrlo localmente

Como es un sitio estático, puedes abrirlo en el navegador. **Ojo:** el formulario de contacto solo envía por HTTP/HTTPS, así que no lo pruebes con `file://` (doble clic); usa un servidor local:

```bash
# Clonar el repositorio
git clone https://github.com/CarolPinerosTrujillo/HuertaComunitaria.git

# Entrar a la carpeta
cd HuertaComunitaria

# Opción 1: servidor local con Python
python -m http.server 8000
# Luego abre http://localhost:8000

# Opción 2: con VS Code, abrir la carpeta y lanzar Live Server
```

---

## 🤝 Contribuir

¿Te gusta el proyecto y quieres sumar? Eres bienvenido 🌱

1. Haz *fork* del repositorio
2. Crea tu rama de cambios (`git checkout -b feature/mejora`)
3. Haz *commit* (`git commit -m 'Agrego mejora'`)
4. Haz *push* a tu rama
5. Abre un *Pull Request*

---

<div align="center">

**Hecho con 🌱 y mucho amor por la comunidad de Hayuelos**

<img src="img/icons/logo.png" alt="Logo Huerta Comunitaria de Hayuelos" width="80" style="border-radius: 50%;">

*Iconos por [Flaticon](https://www.flaticon.es/)*

</div>
