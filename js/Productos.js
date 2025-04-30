// Base de datos de productos
const productos = {
    "Descensores": {
    img: "https://m.media-amazon.com/images/I/71t1j8oPNsL._AC_SL1500_.jpg",
    desc: "Equipo esencial para descensos técnicos en cañonismo o rappel controlado."
    },
    "Ascensores": {
    img: "https://m.media-amazon.com/images/I/61lVy-BVuDL._AC_SL1500_.jpg",
    desc: "Dispositivo para ascender por cuerda de forma segura y eficiente."
    },
    "Arsenal especial": {
    img: "https://m.media-amazon.com/images/I/61I7E7GQ0IL._AC_SL1500_.jpg",
    desc: "Equipo de seguridad avanzado para situaciones técnicas y rescate."
    },
    "Cuerdas Estáticas": {
    img: "https://m.media-amazon.com/images/I/71RSyXBES0L._AC_SL1500_.jpg",
    desc: "Cuerdas de bajo estiramiento, ideales para maniobras verticales controladas."
    },
    "Mochilas": {
    img: "https://m.media-amazon.com/images/I/71QxZ2DArBL._AC_SL1500_.jpg",
    desc: "Mochilas resistentes diseñadas para exploración de montaña o campismo."
    }
};

  // Función para mostrar la información del producto seleccionado en un modal
function mostrarInfo(nombre) {
    const producto = productos[nombre]; // Obtiene el producto desde la base de datos
    if (!producto) return; // Si no existe, no hace nada

    // Llena los elementos del modal con los datos del producto
    document.getElementById('modal-title').innerText = nombre;
    document.getElementById('modal-img').src = producto.img;
    document.getElementById('modal-desc').innerText = producto.desc;
    document.getElementById('modal').style.display = 'flex'; // Muestra el modal
}

  // Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modal').style.display = 'none'; // Oculta el modal
}

  // Función para filtrar productos según la categoría seleccionada
function filtrarProductos(categoria, botonSeleccionado) {
    document.querySelectorAll(".product-card").forEach(card => {
      // Muestra solo productos que pertenecen a la categoría o todos si es "general"
    card.style.display = categoria === "general" || card.classList.contains(categoria) ? "block" : "none";
    });

    // Quita la clase 'active' de todos los botones
    document.querySelectorAll(".menu-item").forEach(b => b.classList.remove("active"));

    // Agrega la clase 'active' al botón seleccionado
    botonSeleccionado.classList.add("active");
}

  // Función que configura todos los eventos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    // Botones de categoría
    document.querySelectorAll('.menu-item').forEach(boton => {
    const categoria = boton.dataset.categoria;
    boton.addEventListener('click', () => filtrarProductos(categoria, boton));
    });

    // Tarjetas de producto que abren el modal al hacer clic
    document.querySelectorAll('.product-card').forEach(card => {
    const nombre = card.dataset.nombre;
    card.addEventListener('click', () => mostrarInfo(nombre));
    });

    // Botón para cerrar el modal
    document.getElementById('cerrar-modal').addEventListener('click', cerrarModal);

    // Cierra el modal si se hace clic fuera del contenido del modal
    document.getElementById('modal').addEventListener('click', e => {
    if (e.target.id === 'modal') cerrarModal();
    });
});