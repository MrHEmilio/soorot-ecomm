// navbar.js
console.log('Navbar script loaded');

export function insertarNavbar() {
  const nav = document.createElement("nav"); 
  nav.className = "navbar navbar-expand-lg bg-body-tertiary";
  nav.innerHTML = `
    <div class="container-fluid">
        <span class="navbar-logo-img">
            <a class="navbar-logo" href="index.html">
                <img src="assets/logo-soorot.svg" alt="Logo Soorot" id="logoSoorot">
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
            <div class="buttons-navbar" id="div-logs">
                <div class="cart-container">
                    <button id="cart-icon">
                        🛒 <span id="cart-count">0</span>
                    </button>
                    <div id="cart-dropdown" class="cart-dropdown">
                        <div class="cart-items-container"></div>
                        <div class="cart-total">
                            Total: $<span id="cart-total-amount">0.00</span>
                        </div>
                        <button class="clear-cart">Vaciar carrito</button>
                    </div>
                </div>
                <div class="navbar-buttons">
                    <a href="contactanos.html" class="btn btn-outline-success">Contáctanos</a>
                    <a href="registrouser.html" class="btn btn-success">Registro</a>
                </div>
            </div>  
        </div>
    </div>
  `;
  
  // Añadir estilos dinámicos
  const style = document.createElement('style');
  style.textContent = `
    .buttons-navbar {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    .cart-container {
      position: relative;
      margin-right: 20px;
    }
    
    .navbar-buttons {
      display: flex;
      gap: 10px;
    }
    
    #cart-dropdown {
      display: none;
      position: absolute;
      right: 0;
      top: 100%;
      background: var(--verde-blanco);
      border: 1px solid var(--verde-grisaceo);
      padding: 1rem;
      min-width: 300px;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    @media (max-width: 768px) {
      .buttons-navbar {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
      }
      
      .cart-container {
        margin-right: 0;
        width: 100%;
      }
      
      #cart-dropdown {
        right: 0;
        left: auto;
        width: 100%;
      }
      
      .navbar-buttons {
        width: 100%;
        flex-direction: column;
      }
    }
  `;
  
  document.body.prepend(nav);
  document.head.appendChild(style);
  
  // Inicializar funcionalidad del carrito
  inicializarCarrito();
  console.log('Navbar inserted successfully');
}

// Funcionalidad del carrito
function inicializarCarrito() {
  // Verificar si los elementos existen
  const cartIcon = document.getElementById('cart-icon');
  const cartDropdown = document.getElementById('cart-dropdown');
  
  if (!cartIcon || !cartDropdown) return;
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Mostrar/ocultar carrito
  cartIcon.addEventListener('click', () => {
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
  });

  // Cerrar al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.cart-container')) {
      cartDropdown.style.display = 'none';
    }
  });
  
  // Escuchar cambios en el carrito
  document.addEventListener('carritoActualizado', actualizarCarrito);
  
  // Actualizar visualización
  actualizarCarrito();
  
  // Vaciar carrito
  const clearCartBtn = document.querySelector('.clear-cart');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      localStorage.setItem('cart', JSON.stringify([]));
      const event = new Event('carritoActualizado');
      document.dispatchEvent(event);
    });
  }
}

// Modificar actualizarCarrito para manejar datos inválidos
function actualizarCarrito() {
  try {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total-amount');
    const cartItemsContainer = document.querySelector('.cart-items-container');
    
    if (!cartCount || !cartTotal || !cartItemsContainer) return;
    
    // Calcular total seguro
    const total = cart.reduce((sum, item) => {
      const precio = parseFloat(item.precio) || 0;
      const cantidad = parseInt(item.cantidad) || 0;
      return sum + (precio * cantidad);
    }, 0);
    
    // Actualizar UI
    cartCount.textContent = cart.reduce((sum, item) => sum + (parseInt(item.cantidad) || 0), 0);
    cartTotal.textContent = total.toFixed(2);
    
    // Actualizar items del carrito
    let html = '';
    cart.forEach(item => {
      const itemTotal = item.cantidad * Number(item.precio);
      html += `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.Nombre}" width="50">
          <div>
            <h5>${item.Nombre}</h5>
            <div class="item-controls">
              <input type="number" 
                class="quantity-input" 
                value="${item.cantidad}" 
                min="1" 
                data-name="${item.Nombre}">
              <button class="btn-remove" data-name="${item.Nombre}">🗑️</button>
            </div>
            <p>$${Number(item.precio).toFixed(2)} c/u</p>
          </div>
        </div>
      `;
    });
    
    cartItemsContainer.innerHTML = html || '<p class="empty-msg">Tu carrito está vacío</p>';
    
    // Agregar eventos a los nuevos elementos
    document.querySelectorAll('.quantity-input').forEach(input => {
      input.addEventListener('change', (e) => {
        const productName = e.target.dataset.name;
        const newQuantity = e.target.value;
        updateCartQuantity(productName, newQuantity);
      });
    });
    
    document.querySelectorAll('.btn-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const productName = e.target.dataset.name;
        removeFromCart(productName);
      });
    });
    
  } catch (error) {
    console.error("Error actualizando carrito:", error);
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total-amount');
    
    if (cartCount) cartCount.textContent = "0";
    if (cartTotal) cartTotal.textContent = "0.00";
  }
}

// Actualizar cantidad en el carrito
function updateCartQuantity(productName, newQuantity) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cart.find(item => item.Nombre === productName);
  if (item) {
    item.cantidad = Math.max(1, parseInt(newQuantity));
    localStorage.setItem('cart', JSON.stringify(cart));
    const event = new Event('carritoActualizado');
    document.dispatchEvent(event);
  }
}

// Eliminar item del carrito
function removeFromCart(productName) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.Nombre !== productName);
  localStorage.setItem('cart', JSON.stringify(cart));
  const event = new Event('carritoActualizado');
  document.dispatchEvent(event);
}

export function insertarfooter() {
  console.log('Inserting footer...');
  const footer = document.createElement("footer");
  footer.className = "contenedor-footer";
  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-column logo-column">
        <img src="./assets/logo-soorot-white.svg" alt="logo-soorot" class="footer-logo">
      </div>
      
      <div class="footer-column links-column">
        <div class="footer-links">
          <div class="link-group">
            <h3>Soorot</h3>
            <ul>
              <li><a href="./index.html">Inicio</a></li>
              <li><a href="./nosotros.html">Acerca de nosotros</a></li>
              <li><a href="./productos.html">Productos</a></li>
            </ul>
          </div>
          
          <div class="link-group">
            <h3>Cuenta</h3>
            <ul>
              <li><a href="./contactanos.html">Contáctanos</a></li>
              <li><a href="./registrouser.html">Regístrate</a></li>
              <li><a href="./login.html">Iniciar sesión</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-column legal-column">
        <div class="legal-links">
          <ul>
            <li><a href="avisoprivacidad.html">Aviso de privacidad</a></li> 
            <li><a href="terminoscondiciones.html">Términos y condiciones</a></li>
            <li><a href="editorProductos.html">Editor de productos</a></li>
          </ul>
        </div>
        
        <div class="social-media">
          <a href="http://www.github.com/" target="_blank" class="social-icon icon-github"></a>
          <a href="http://www.instagram.com/" target="_blank" class="social-icon icon-instagram"></a>
          <a href="http://www.facebook.com/" target="_blank" class="social-icon icon-facebook"></a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>© 2025 Soorot. Todos los derechos reservados.</p>
    </div>
  `;

  // Añadir estilos del footer
  const footerStyle = document.createElement('style');
  footerStyle.textContent = `
    .contenedor-footer {
      background: var(--verde-oscuro);
      color: var(--beige-arena);
      padding: 2rem 1rem;
      margin-top: auto;
    }
    
    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .footer-logo {
      max-height: 150px;
      width: auto;
    }
    
    .footer-links {
      display: flex;
      gap: 2rem;
    }
    
    .link-group h3 {
      color: var(--verde-claro);
      margin-bottom: 1rem;
    }
    
    .footer-column ul {
      list-style: none;
      padding: 0;
    }
    
    .footer-column a {
      color: var(--beige-arena);
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .footer-column a:hover {
      color: var(--verde-claro);
    }
    
    .social-media {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }
    
    .social-icon {
      font-size: 1.5rem;
      color: var(--beige-arena);
    }
    
    .footer-bottom {
      text-align: center;
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid var(--verde-grisaceo);
    }
  `;

  document.body.appendChild(footer);
  document.head.appendChild(footerStyle);
  console.log('Footer inserted successfully');
}