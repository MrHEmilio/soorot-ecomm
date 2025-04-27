export function insertarfooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div class="footer-container">
        <div class="footer-column">
          <img src="./assets/logo-soorot.svg" alt="" />
        </div>
        <div class="footer-column">
          <h3>Soorot</h3>
          <ul>
            <li><a href="#">Cerca</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contactanos</a></li>
            <li><a href="#"></a></li>
            <li><a href="#">Historia</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <form>
            <label for="email">Ingresa tu correo</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo..."
            />
            <button type="submit">Enviar</button>
            <p></p>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Soorot. All rights reserved.</p>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Cookies Settings</a></li>
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
          <a href="./contactanos.html" target="_blank" class="icon-bubble"></a>
        </div>
      </div>
    `;
    document.body.appendChild(footer);
}