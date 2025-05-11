export function insertarNavbar() {
  const nav = document.createElement("nav"); 
  nav.className = "navbar navbar-expand-lg bg-body-tertiary";
  nav.innerHTML = `
        <div class="container-fluid">
            <span class="navbar-logo-img">
                <a class="navbar-logo" href="index.html">
                    <img src="/assets/logo-soorot.svg" alt="Logo Soorot" id="logoSoorot">
                </a>    
            </span>
            <span class="navbar-logo-str">
                <a class="navbar-brand" id="logoString" href="index.html">
                    <span id="soorot-text-logo">Soorot</span>
                </a>
            </span>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active nav-link-collapsed" aria-current="page" href="productos.html">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-collapsed" aria-current="page" href="nosotros.html">Acerca de nosotros</a>
                    </li>
                </ul>
                <div class="buttons-navbar">
                    <a href="contactanos.html"><button type="button" class="btn btn-outline-success">Contáctanos</button></a>
                    <a href="registrouser.html"><button type="button" class="btn btn-success">Registro</button></a>
                </div>  
            </div>
        </div>
    `;
  document.body.prepend(nav);
}

export function insertarfooter() {
  const footer = document.createElement("footer");
  footer.className = "contenedor-footer";
  footer.innerHTML = `
        <div class="footer-container">
        <div class="footer-column">
          <img src="./assets/logo-soorot.svg" alt="" />
        </div>
        <div class="footer-column">
          <h3>Soorot</h3>
          <ul>
            <li><a href="./index.html">Inicio</a></li>
            <li><a href="./acercade.html">Acerca de nosotros</a></li>
            <li><a href="./productos.html">Productos</a></li>
            <li><a href="./contactanos.html">Contáctanos</a></li>
            <li><a href="./ingresa.html">Ingresa</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <form>
            <label for="email">Ingresa tu correo</label>
            <input
              type="email"
              id="email_footer"
              name="email"
              placeholder="Ingresa tu correo..."
            />
            <button type="submit">Enviar</button>
            <p></p>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Soorot. Todos los derechos reservados.</p>
        <ul>
          <li><a href="avisoprivacidad.html">Aviso de privacidad</a></li> 
          <li><a href="terminoscondiciones.html">Terminos y condiciones</a></li>
          <li><a href="editorProductos.html">Editor de productos</a></li>
        </ul>
        <div class="social-media">
          <a href="http://www.github.com/"
            target="_blank"
            class="icon-github"></a>
          <a  href="http://www.instagram.com/"
            target="_blank"
            class="icon-instagram"></a>
          <a href="http://www.facebook.com/"
            target="_blank"
            class="icon-facebook2"></a>
          <!-- <a href="./contactanos.html" target="_blank" class="icon-bubble"></a> -->
        </div>
      </div>
    `;
  document.body.appendChild(footer);
}