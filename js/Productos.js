// Variable global para almacenar productos de la API
let productos = [];

// ----------------------------------------------------------
// NUEVA FUNCIÓN: Cargar productos desde la API
// ----------------------------------------------------------
async function cargarProductosAPI() {
    const loadingIndicator = document.getElementById('loading-indicator');
    
    try {
        // Mostrar indicador de carga
        if (loadingIndicator) {
            loadingIndicator.style.display = 'block';
        }
        
        console.log('Cargando productos desde API...');
        
        const response = await fetch('http://18.221.114.96/soorot/productos/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const productosAPI = await response.json();
        console.log('Productos cargados desde API:', productosAPI);
        
        // Verificar si la respuesta tiene datos
        if (productosAPI && Array.isArray(productosAPI) && productosAPI.length > 0) {
            // Mapear los productos de la API al formato esperado
            productos = productosAPI.map(producto => ({
                Nombre: producto.nombre || producto.Nombre || 'Sin nombre',
                img: producto.imagen || producto.img || 'https://via.placeholder.com/300x200?text=Sin+imagen',
                desc: producto.descripcion || producto.desc || 'Sin descripción',
                categoria: producto.categoria || 'general',
                precio: producto.precio || '0'
            }));
            
            console.log('Productos procesados:', productos);
            
            // Re-renderizar con los nuevos productos
            renderProductos();
            
            return true;
        } else {
            console.error('La API no devolvió productos válidos');
            productos = []; // Mantener array vacío
            renderProductos(); // Mostrar mensaje de "no productos"
            return false;
        }
        
    } catch (error) {
        console.error('Error al cargar productos desde API:', error);
        productos = []; // Mantener array vacío en caso de error
        renderProductos(); // Mostrar mensaje de error
        return false;
        
    } finally {
        // Ocultar indicador de carga
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
    }
}

// ----------------------------------------------------------
// FUNCIÓN MEJORADA: renderizar productos
// ----------------------------------------------------------
function renderProductos() {
    const container = document.getElementById('list-items');
    if (!container) {
        console.error('Contenedor list-items no encontrado');
        return;
    }
    
    container.innerHTML = '';
    
    // Combinar productos de API con productos del localStorage
    const productosLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];
    const productosTotales = [...productos, ...productosLocalStorage];
    
    console.log(`Renderizando ${productosTotales.length} productos`);
    
    if (productosTotales.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 40px; color: #677D6A;"><h3>No se pudieron cargar los productos</h3><p>Verifica tu conexión e intenta recargar la página</p></div>';
        return;
    }
    
    productosTotales.forEach((producto, index) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = `product-card ${producto.categoria}`;
        tarjeta.innerHTML = `
            <div class="card-header">
                <span>$ ${producto.precio}</span>
            </div>
            <img src="${producto.img}" alt="${producto.Nombre}" class="clickable-img" loading="lazy">
            <h3>${producto.Nombre}</h3>
            <p>${producto.desc}</p>
            <button class="agregar-carrito" data-id="${producto.Nombre}">Empacar en la mochila</button>
        `;
        container.appendChild(tarjeta);
        
        // Añadir evento al botón "Agregar al carrito"
        const btnAgregar = tarjeta.querySelector('.agregar-carrito');
        btnAgregar.addEventListener('click', (e) => {
            e.preventDefault();
            agregarAlCarrito(producto);
        });
    });
}

// ----------------------------------------------------------
// Función: añadir producto al carrito (SIN CAMBIOS)
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
            timer: 800,
            showConfirmButton: false
        });
    } else {
        // Notificación alternativa para otras páginas
        showCustomNotification(`${producto.Nombre} añadido a tu mochila!`);
    }
}

// ----------------------------------------------------------
// Función: mostrar notificación personalizada (SIN CAMBIOS)
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
// Función: actualizar contador del carrito (SIN CAMBIOS)
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

    cartContainer.innerHTML = html || '<p class="empty-msg" style="color: #677D6A;">Tu carrito está vacío</p>';
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
// Función: filtra las tarjetas según la categoría elegida (SIN CAMBIOS)
// ----------------------------------------------------------
function filtrarProductos(categoria) {
    document.querySelectorAll(".product-card").forEach(card => {
        const mostrar = categoria === "general" || card.classList.contains(categoria);
        card.style.display = mostrar ? "flex" : "none";
    });
}

// ----------------------------------------------------------
// Función: abre el modal con la información del producto (SIN CAMBIOS)
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
                        const btnAgregar = tarjeta.querySelector('.agregar-carrito');
                        if (btnAgregar) {
                            btnAgregar.onclick = () => {
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
// INICIALIZACIÓN MEJORADA DE LA APLICACIÓN
// ----------------------------------------------------------
document.addEventListener("DOMContentLoaded", async () => {
    console.log('Iniciando aplicación...');
    
    // Configurar modal primero
    setupModal();
    
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
    
    // Escuchar eventos de actualización del carrito
    document.addEventListener('carritoActualizado', updateCartCounter);
    
    // *** CAMBIO PRINCIPAL: Solo cargar desde API ***
    const apiCargada = await cargarProductosAPI();
    
    if (!apiCargada) {
        console.error('No se pudieron cargar productos desde la API');
    }
    
    // Forzar actualización inicial
    document.dispatchEvent(new Event('carritoActualizado'));
    
    console.log('Aplicación inicializada correctamente');
});