// Base de datos local de productos clasificados por categoría
const productos = [
    // ---------- Escalada ----------
    { Nombre: "Arnés", img: "https://images.arcteryx.com/F24/1350x1710/Skaha-Harness-Lampyre-Boxcar.jpg", desc: "Arnés de seguridad ergonómico para escalada deportiva.", categoria: "escalada", precio: "1799" },
    { Nombre: "Cuerda Dinámica", img: "https://www.teufelberger.com/media/catalog/product/cache/ad06d83191629f33f6df1b655e73fe3f/a/p/apex.jpg", desc: "Cuerda para absorber impactos y caídas en escalada.", categoria: "escalada", precio: "3499" },
    { Nombre: "Mosquetón con seguro", img: "https://m.media-amazon.com/images/I/51JMBbFK-dL._AC_.jpg", desc: "Mosquetón con cierre automático para mayor seguridad.", categoria: "escalada", precio: "349" },
    { Nombre: "Casco", img: "https://m.media-amazon.com/images/I/61zWMe28UlL._AC_SL1500_.jpg", desc: "Casco resistente para proteger tu cabeza en todo momento.", categoria: "escalada", precio: "1299" },
    { Nombre: "Gatas", img: "https://contents.mediadecathlon.com/p2613846/1cr1/k$e33abc7dddd7a50e86c3b848a927624e/gatas-escalada-gris-cometa.jpg?format=auto&f=768x0", desc: "Zapatos de precisión y comodidad para escalar mejor.", categoria: "escalada", precio: "2199" },

    // ---------- Cañonismo ----------
    { Nombre: "Descensor", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAIXVHZeV6s6wysx9QlY2QMGJ8ucIc3Cq7080f8Jf57Z-YsLiMQRBBJxNrI-Qnkx3GW1I&usqp=CAU", desc: "Equipo esencial para descensos técnicos.", categoria: "cañonismo", precio: "4799" },
    { Nombre: "Ascensores", img: "https://www.climbingwallservices.com/cdn/shop/products/B17WRAPetzlAscension23540217R_e130620a-9d94-4942-8ff3-98b8907c54e8_grande.jpg?v=1622195018", desc: "Sube por cuerda con total confianza.", categoria: "cañonismo", precio: "1599" },
    { Nombre: "Arnés especial", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9n2BV90Os5atK_iJXxO-qZT3-GDeAXvXjLA&s", desc: "Kit de seguridad avanzada para aventuras extremas.", categoria: "cañonismo", precio: "2499" },
    { Nombre: "Cuerda Estática 11.7mm", img: "https://www.sorbus-intl.co.uk/wp-content/uploads/2023/03/teufelberger-xstatic-climbing-rope.jpg", desc: "Perfecta para maniobras verticales controladas.", categoria: "cañonismo", precio: "3799" },
    { Nombre: "Mochila 50L", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_uFxkWeSmDxxGs-inMXypAURuiAuyQ4bvQ&s", desc: "Transporta tu equipo sin esfuerzo y con estilo.", categoria: "cañonismo", precio: "4599" },

    // ---------- Alpinismo ----------
    { Nombre: "Crampones", img: "https://res.cloudinary.com/ekoweb/image/upload/s--ZwNMxQ9u--/f_auto,h_600,q_auto:eco,w_600/v1/products/9-27158/views/9-27158_lynx-leverlock-universel_t24a-llu_01", desc: "Agarre firme en hielo y nieve.", categoria: "alpinismo", precio: "3499" },
    { Nombre: "Piolettes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJFt4hXgZEtSSJXvlRufRwcCZ78AsNSGwOA&s", desc: "Herramienta clave para escaladas técnicas.", categoria: "alpinismo", precio: "4699" },
    { Nombre: "Traje completo -10° C", img: "https://www.phdesigns.co.uk/images/omega-suit-hs2-013lg.jpg", desc: "Diseñado para soportar climas extremos.", categoria: "alpinismo", precio: "8799" },
    { Nombre: "Mochila Extraligera 30L", img: "https://us.blueice.com/cdn/shop/files/StacheUL25-1front-web_1.jpg?v=1718042591&width=1100", desc: "Ideal para excursiones de alto rendimiento.", categoria: "alpinismo", precio: "3499" },

    // ---------- Exploración ----------
    { Nombre: "Botas Senderismo", img: "https://d1nymbkeomeoqg.cloudfront.net/photos/18/92/310773_29276_XXL.jpg", desc: "Cómodas, impermeables y resistentes.", categoria: "exploracion", precio: "4999" },
    { Nombre: "Bastones Senderismo", img: "https://res.cloudinary.com/ekoweb/image/upload/s--6ADljju8--/f_auto,h_600,q_auto:eco,w_600/v1/products/9-125901/views/9-125901_ultra-carbon-foldable_l47043200_01", desc: "Ayuda a mantener el equilibrio en cualquier terreno.", categoria: "exploracion", precio: "699" },
    { Nombre: "Lámpara Recargable", img: "https://images.snowleader.com/cdn-cgi/image/f=auto,fit=scale-down,q=85/https://images.snowleader.com/media/catalog/product/cache/1/image/0dc2d03fe217f8c83829496872af24a0/c/o/cosmo-350-octane-simple-blackdiamo-blad01951_01.jpg", desc: "Ilumina tus pasos, incluso en la noche más oscura.", categoria: "exploracion", precio: "1499" },
    { Nombre: "Chamarra impermeable", img: "https://www.fjern.equipment/cdn/shop/products/mens-forsvar-eco-waterproof-jacket-indigo-7_2048x.jpg?v=1659431169", desc: "Mantente seco sin importar el clima.", categoria: "exploracion", precio: "999" },

    // ---------- Campismo ----------
    { Nombre: "Casa de campaña", img: "https://www.outdoorsports.com/cdn/shop/files/Camping-Tents-The_North_Face-Wawona_4-Light_Exuberance_Orange-Hero_Fly_1200x.png?v=1687528345", desc: "Tu hogar temporal bajo las estrellas.", categoria: "campismo", precio: "4299" },
    { Nombre: "Bolsa de dormir", img: "https://teton.mx/cdn/shop/products/teton-sports-celsius-grand-xxl-0-f-sleeping-bag-39525311742190.jpg?v=1745598282", desc: "Duerme cómodo y cálido donde sea.", categoria: "campismo", precio: "2499" },
    { Nombre: "Bajosleeping inflable", img: "https://klymit.com/cdn/shop/products/Klymit_StaticV_06SVGR01C_Front_Deep_NoValve_2000x2000_1606fbeb-ea1b-4b5a-a643-e29f48b9d1e2.jpg?v=1741634066", desc: "Colchón compacto y funcional.", categoria: "campismo", precio: "2799" },
    { Nombre: "Utensilios", img: "https://m.media-amazon.com/images/I/813WahUDNaL._AC_SL1500_.jpg", desc: "Todo lo que necesitas para cocinar al aire libre.", categoria: "campismo", precio: "799" }
];

// ----------------------------------------------------------
// Función: crea y agrega la tarjeta de un producto al DOM
// ----------------------------------------------------------
function addItem(producto) {
  const tarjeta = `
    <div class="product-card ${producto.categoria}">
        <div class="card-header">
          <span>$ ${producto.precio}</span>
        </div>
        <img src="${producto.img}" alt="${producto.Nombre}" class="clickable-img" data-action="view">
        <h3>${producto.Nombre}</h3>
        <p>${producto.desc}</p>
        <button class="btn btn-primary add-to-cart">Añadir al carrito</button>
    </div>
  `;
  document.getElementById("list-items").insertAdjacentHTML("beforeend", tarjeta);
}
// ----------------------------------------------------------
// Función: añadir producto al carrito
// ----------------------------------------------------------
function addToCart(producto) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cart.find(item => item.Nombre === producto.Nombre);
  
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      Nombre: producto.Nombre,
      precio: Number(producto.precio), // Convertir a número
      img: producto.img,
      quantity: 1
    });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCounter();
}

function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
  const cartCountElement = document.getElementById('cart-count');
  
  if (cartCountElement) {
    cartCountElement.textContent = totalItems;
  } else {
    console.error('Elemento cart-count no encontrado');
  }
}

function showCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-items-container');
    const cartTotal = document.getElementById('cart-total-amount');
    
    let html = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.quantity * Number(item.precio);
        total += itemTotal;
        html += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.Nombre}" width="50">
                <div>
                    <h5>${item.Nombre}</h5>
                    <div class="item-controls">
                        <input type="number" 
                              class="quantity-input" 
                              value="${item.quantity}" 
                              min="1" 
                              data-name="${item.Nombre}">
                        <button class="btn-remove" data-name="${item.Nombre}">🗑️</button>
                    </div>
                    <p>$${Number(item.precio).toFixed(2)} c/u</p>
                </div>
            </div>
        `;
    });

    cartContainer.innerHTML = html || '<p class="empty-msg">Tu carrito está vacío</p>';
    cartTotal.textContent = total.toFixed(2);
    
    // Mostrar dropdown
    const dropdown = document.getElementById('cart-dropdown');
    dropdown.style.display = 'block';
    
    // Actualizar eventos dinámicos
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', (e) => {
            updateQuantity(e.target.dataset.name, e.target.value);
        });
    });
    
    document.querySelectorAll('.btn-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            removeItem(e.target.dataset.name);
        });
    });
}

function updateQuantity(productName, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    const item = cart.find(item => item.Nombre === productName);
    if(item) {
        item.quantity = Math.max(1, parseInt(newQuantity));
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCounter();
        showCart();
    }
}

function hideCart() {
    document.getElementById('cart-dropdown').style.display = 'none';
}

// ----------------------------------------------------------
// Función: filtra las tarjetas según la categoría elegida
// ----------------------------------------------------------
function filtrarProductos(categoria) {
  document.querySelectorAll(".product-card").forEach(card => {
    const mostrar = categoria === "general" || card.classList.contains(categoria);
    card.style.display = mostrar ? "flex" : "none";
  });
}

// ----------------------------------------------------------
// Función: abre el modal con la información del producto
// ----------------------------------------------------------
function mostrarModal(producto) {
  document.getElementById("modal-img").src = producto.img;
  document.getElementById("modal-title").textContent = producto.Nombre;
  document.getElementById("modal-desc").textContent = producto.desc;
  document.getElementById("modal").style.display = "flex";
}

// ----------------------------------------------------------
// Cuando el DOM está listo, renderiza y conecta eventos
// ----------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Cargar productos
  const productosLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];
  const productosTotales = productosLocalStorage.concat(productos);
  productosTotales.forEach(addItem);

  // Filtrado de productos
  document.querySelectorAll(".menu-item").forEach(btn => {
    btn.addEventListener("click", () => {
      filtrarProductos(btn.dataset.categoria);
      document.querySelectorAll(".menu-item").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Eventos principales
  document.getElementById("list-items").addEventListener("click", e => {
    const tarjeta = e.target.closest(".product-card");
    if (!tarjeta) return;

    const nombre = tarjeta.querySelector("h3").textContent;
    const producto = productosTotales.find(p => p.Nombre === nombre);
    if (!producto) return;

    if (e.target.classList.contains('add-to-cart')) {
      addToCart(producto);
    } else if (e.target.dataset.action === "view") {
      mostrarModal(producto);
    }
  });

  // Carrito y modales
  updateCartCounter();
  
  document.getElementById('cart-icon').addEventListener('click', showCart);

  document.getElementById("modal").addEventListener("click", e => {
    // Cerrar modal
    if (e.target.id === "modal" || e.target.classList.contains('cerrar-modal')) {
      document.getElementById("modal").style.display = "none";
    }
    
    // Manejar acciones del carrito
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (e.target.classList.contains('remove-item')) {
      const productName = e.target.dataset.name;
      const newCart = cart.filter(item => item.Nombre !== productName);
      localStorage.setItem('cart', JSON.stringify(newCart));
      showCart();
      updateCartCounter();
    }
    
    if (e.target.classList.contains('clear-cart')) {
      localStorage.removeItem('cart');
      showCart();
      updateCartCounter();
    }
  });
});