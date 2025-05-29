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

function renderProductos() {
    const container = document.getElementById('list-items');
    container.innerHTML = '';
    
    const productosLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];
    const productosTotales = [...productosLocalStorage, ...productos];
    
    productosTotales.forEach(producto => {
        const tarjeta = document.createElement('div');
        tarjeta.className = `product-card ${producto.categoria}`;
        tarjeta.innerHTML = `
            <div class="card-header">
                <span>$ ${producto.precio}</span>
            </div>
            <img src="${producto.img}" alt="${producto.Nombre}" class="clickable-img">
            <h3>${producto.Nombre}</h3>
            <p>${producto.desc}</p>
            <button class="agregar-carrito" data-id="${producto.Nombre}">Empacar en la mochila</button>
        `;
        container.appendChild(tarjeta);
        
        // Añadir evento al botón "Agregar al carrito"
        const btnAgregar = tarjeta.querySelector('.agregar-carrito');
        btnAgregar.addEventListener('click', () => {
            agregarAlCarrito(producto);
        });
    });
}

// ----------------------------------------------------------
// Función: añadir producto al carrito
// ----------------------------------------------------------
function agregarAlCarrito(producto) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.Nombre === producto.Nombre);
    
    if (existingProduct) {
        existingProduct.cantidad += 1;
    } else {
        cart.push({
            Nombre: producto.Nombre,
            precio: Number(producto.precio),
            img: producto.img,
            cantidad: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
    
    // Disparar evento para actualizar navbar en todas las páginas
    const event = new Event('carritoActualizado');
    document.dispatchEvent(event);
    
    // Mostrar notificación segura para todas las páginas
    if (typeof Swal !== 'undefined' && Swal.fire) {
        // SweetAlert en páginas donde está disponible
        Swal.fire({
            icon: 'success',
            title: '¡Producto agregado!',
            text: `${producto.Nombre} se añadió a tu mochila`,
            timer: 2000,
            showConfirmButton: false
        });
    } else {
        // Notificación alternativa para otras páginas
        showCustomNotification(`${producto.Nombre} añadido a tu mochila!`);
    }
}

// ----------------------------------------------------------
// Función: mostrar notificación personalizada
// ----------------------------------------------------------
function showCustomNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `<span>${message}</span>`;
    document.body.appendChild(notification);
    
    // Auto-eliminar después de 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ----------------------------------------------------------
// Función: actualizar contador del carrito
// ----------------------------------------------------------
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((acc, item) => acc + (item.cantidad || 0), 0);
    const cartCountElement = document.getElementById('cart-count');
    
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

function showCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-items-container');
    const cartTotal = document.getElementById('cart-total-amount');
    
    let html = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.cantidad * Number(item.precio);
        total += itemTotal;
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

    cartContainer.innerHTML = html || '<p class="empty-msg">Tu carrito está vacío</p>';
    cartTotal.textContent = total.toFixed(2);
    
    const dropdown = document.getElementById('cart-dropdown');
    if (dropdown) dropdown.style.display = 'block';
    
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
        item.cantidad = Math.max(1, parseInt(newQuantity));
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCounter();
        showCart();
    }
}

function removeItem(productName) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.Nombre !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();
    updateCartCounter();
}

function hideCart() {
    const dropdown = document.getElementById('cart-dropdown');
    if (dropdown) dropdown.style.display = 'none';
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
// Función: abre el modal con la información del producto (MODIFICADA)
// ----------------------------------------------------------
function setupModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');

    // Delegación de eventos para manejar productos dinámicos
    document.addEventListener('click', function(e) {
        // Manejar clic en imágenes de productos
        if (e.target.classList.contains('clickable-img')) {
            const tarjeta = e.target.closest('.product-card');
            if (tarjeta) {
                const productoNombre = tarjeta.querySelector('h3').textContent;
                
                // Buscar en todos los productos (base + localStorage)
                const productosLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];
                const todosLosProductos = [...productos, ...productosLocalStorage];
                
                const producto = todosLosProductos.find(p => p.Nombre === productoNombre);
                
                if (producto) {
                    // Actualizar elementos del modal
                    const modalImg = document.getElementById('modal-img');
                    const modalTitle = document.getElementById('modal-title');
                    const modalDesc = document.getElementById('modal-desc');
                    
                    if (modalImg && modalTitle && modalDesc) {
                        modalImg.src = producto.img;
                        modalImg.alt = producto.Nombre;
                        modalTitle.textContent = producto.Nombre;
                        modalDesc.textContent = producto.desc;
                        
                        // Mostrar el modal
                        modal.style.display = 'flex';
                        
                        // Añadir evento al botón del modal
                        const modalBtn = document.querySelector('.agregar-carrito-modal');
                        if (modalBtn) {
                            modalBtn.onclick = () => {
                                agregarAlCarrito(producto);
                                modal.style.display = 'none';
                            };
                        }
                    }
                }
            }
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// ----------------------------------------------------------
// Inicialización de la aplicación
// ----------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // Renderizar productos iniciales
    renderProductos();
    
    // Configurar modal
    setupModal();
    
    // Escuchar eventos de actualización del carrito
    document.addEventListener('carritoActualizado', updateCartCounter);
    
    // Configurar eventos del carrito
    document.addEventListener('click', (e) => {
        if (e.target.id === 'cart-icon') {
            showCart();
        } else if (!e.target.closest('.cart-container')) {
            hideCart();
        }
    });

    // Configurar filtros
    document.querySelectorAll(".menu-item").forEach(btn => {
        btn.addEventListener("click", () => {
            filtrarProductos(btn.dataset.categoria);
            document.querySelectorAll(".menu-item").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });

    // Inicializar contador del carrito
    updateCartCounter();
    
    // Forzar actualización inicial
    document.dispatchEvent(new Event('carritoActualizado'));
});