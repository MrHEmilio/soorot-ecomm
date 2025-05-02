// Base de datos local de productos clasificados por categoría
const productos = [
    // ---------- Escalada ----------
    { Nombre: "Arnés", img: "https://images.arcteryx.com/F24/1350x1710/Skaha-Harness-Lampyre-Boxcar.jpg", desc: "Arnés de seguridad ergonómico para escalada deportiva.", categoria: "escalada" },
    { Nombre: "Cuerda Dinámica", img: "https://www.teufelberger.com/media/catalog/product/cache/ad06d83191629f33f6df1b655e73fe3f/a/p/apex.jpg", desc: "Cuerda para absorber impactos y caídas en escalada.", categoria: "escalada" },
    { Nombre: "Mosquetón con seguro", img: "https://m.media-amazon.com/images/I/51JMBbFK-dL._AC_.jpg", desc: "Mosquetón con cierre automático para mayor seguridad.", categoria: "escalada" },
    { Nombre: "Casco", img: "https://m.media-amazon.com/images/I/61zWMe28UlL._AC_SL1500_.jpg", desc: "Casco resistente para proteger tu cabeza en todo momento.", categoria: "escalada" },
    { Nombre: "Gatas", img: "https://contents.mediadecathlon.com/p2613846/1cr1/k$e33abc7dddd7a50e86c3b848a927624e/gatas-escalada-gris-cometa.jpg?format=auto&f=768x0", desc: "Zapatos de precisión y comodidad para escalar mejor.", categoria: "escalada" },

    // ---------- Cañonismo ----------
    { Nombre: "Descensor", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAIXVHZeV6s6wysx9QlY2QMGJ8ucIc3Cq7080f8Jf57Z-YsLiMQRBBJxNrI-Qnkx3GW1I&usqp=CAU", desc: "Equipo esencial para descensos técnicos.", categoria: "cañonismo" },
    { Nombre: "Ascensores", img: "https://www.climbingwallservices.com/cdn/shop/products/B17WRAPetzlAscension23540217R_e130620a-9d94-4942-8ff3-98b8907c54e8_grande.jpg?v=1622195018", desc: "Sube por cuerda con total confianza.", categoria: "cañonismo" },
    { Nombre: "Arnés especial", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9n2BV90Os5atK_iJXxO-qZT3-GDeAXvXjLA&s", desc: "Kit de seguridad avanzada para aventuras extremas.", categoria: "cañonismo" },
    { Nombre: "Cuerda Estática 11.7mm", img: "https://www.sorbus-intl.co.uk/wp-content/uploads/2023/03/teufelberger-xstatic-climbing-rope.jpg", desc: "Perfecta para maniobras verticales controladas.", categoria: "cañonismo" },
    { Nombre: "Mochila 50L", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_uFxkWeSmDxxGs-inMXypAURuiAuyQ4bvQ&s", desc: "Transporta tu equipo sin esfuerzo y con estilo.", categoria: "cañonismo" },

    // ---------- Alpinismo ----------
    { Nombre: "Crampones", img: "https://res.cloudinary.com/ekoweb/image/upload/s--ZwNMxQ9u--/f_auto,h_600,q_auto:eco,w_600/v1/products/9-27158/views/9-27158_lynx-leverlock-universel_t24a-llu_01", desc: "Agarre firme en hielo y nieve.", categoria: "alpinismo" },
    { Nombre: "Piolettes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJFt4hXgZEtSSJXvlRufRwcCZ78AsNSGwOA&s", desc: "Herramienta clave para escaladas técnicas.", categoria: "alpinismo" },
    { Nombre: "Traje completo -10° C", img: "https://www.phdesigns.co.uk/images/omega-suit-hs2-013lg.jpg", desc: "Diseñado para soportar climas extremos.", categoria: "alpinismo" },
    { Nombre: "Mochila Extraligera 30L", img: "https://us.blueice.com/cdn/shop/files/StacheUL25-1front-web_1.jpg?v=1718042591&width=1100", desc: "Ideal para excursiones de alto rendimiento.", categoria: "alpinismo" },

    // ---------- Exploración ----------
    { Nombre: "Botas Senderismo", img: "https://d1nymbkeomeoqg.cloudfront.net/photos/18/92/310773_29276_XXL.jpg", desc: "Cómodas, impermeables y resistentes.", categoria: "exploracion" },
    { Nombre: "Bastones Senderismo", img: "https://res.cloudinary.com/ekoweb/image/upload/s--6ADljju8--/f_auto,h_600,q_auto:eco,w_600/v1/products/9-125901/views/9-125901_ultra-carbon-foldable_l47043200_01", desc: "Ayuda a mantener el equilibrio en cualquier terreno.", categoria: "exploracion" },
    { Nombre: "Lámpara Recargable", img: "https://images.snowleader.com/cdn-cgi/image/f=auto,fit=scale-down,q=85/https://images.snowleader.com/media/catalog/product/cache/1/image/0dc2d03fe217f8c83829496872af24a0/c/o/cosmo-350-octane-simple-blackdiamo-blad01951_01.jpg", desc: "Ilumina tus pasos, incluso en la noche más oscura.", categoria: "exploracion" },
    { Nombre: "Chamarra impermeable", img: "https://www.fjern.equipment/cdn/shop/products/mens-forsvar-eco-waterproof-jacket-indigo-7_2048x.jpg?v=1659431169", desc: "Mantente seco sin importar el clima.", categoria: "exploracion" },

    // ---------- Campismo ----------
    { Nombre: "Casa de campaña", img: "https://www.outdoorsports.com/cdn/shop/files/Camping-Tents-The_North_Face-Wawona_4-Light_Exuberance_Orange-Hero_Fly_1200x.png?v=1687528345", desc: "Tu hogar temporal bajo las estrellas.", categoria: "campismo" },
    { Nombre: "Bolsa de dormir", img: "https://teton.mx/cdn/shop/products/teton-sports-celsius-grand-xxl-0-f-sleeping-bag-39525311742190.jpg?v=1745598282", desc: "Duerme cómodo y cálido donde sea.", categoria: "campismo" },
    { Nombre: "Bajosleeping inflable", img: "https://klymit.com/cdn/shop/products/Klymit_StaticV_06SVGR01C_Front_Deep_NoValve_2000x2000_1606fbeb-ea1b-4b5a-a643-e29f48b9d1e2.jpg?v=1741634066", desc: "Colchón compacto y funcional.", categoria: "campismo" },
    { Nombre: "Utensilios", img: "https://m.media-amazon.com/images/I/813WahUDNaL._AC_SL1500_.jpg", desc: "Todo lo que necesitas para cocinar al aire libre.", categoria: "campismo" }
];

  // ----------------------------------------------------------
  // Función: crea y agrega la tarjeta de un producto al DOM
  // ----------------------------------------------------------
function addItem(producto) {
    const tarjeta = `
    <div class="product-card ${producto.categoria}">
        <div class="card-header">
        <button class="btn-edit" data-action="edit">Edit</button>
        <span>$ --</span>
        </div>
        <img src="${producto.img}" alt="${producto.Nombre}" class="clickable-img" data-action="view">
        <h3>${producto.Nombre}</h3>
        <p>${producto.desc}</p>
    </div>
    `;
    document.getElementById("list-items").insertAdjacentHTML("beforeend", tarjeta);
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
    // 1) Renderizar todas las tarjetas
    productos.forEach(addItem);

    // 2) Manejar clicks en los botones de menú
    document.querySelectorAll(".menu-item").forEach(btn => {
    btn.addEventListener("click", () => {
        // Cambia categoría y botón activo
        filtrarProductos(btn.dataset.categoria);
        document.querySelectorAll(".menu-item").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
    });

    // 3) Delegar clicks en el contenedor de tarjetas
    document.getElementById("list-items").addEventListener("click", e => {
      const tarjeta = e.target.closest(".product-card");          // Tarjeta clickeada
    if (!tarjeta) return;

      const nombre = tarjeta.querySelector("h3").textContent;     // Nombre del producto
      const producto = productos.find(p => p.Nombre === nombre);  // Busca datos originales

      // --- Click en imagen: abre modal ---
    if (e.target.dataset.action === "view") {
        mostrarModal(producto);
    }

      // --- Click en botón Edit ---
    if (e.target.dataset.action === "edit") {
        alert("Editar producto: " + producto.Nombre);
        // Aquí puedes redirigir o abrir un formulario de edición, es importante que se haga esto es de lo mas importante 
        // para que el usuario pueda editar el producto, pero no se puede hacer en este momento.
    }
    });

    // 4) Cerrar el modal (botón o click fuera)
    document.getElementById("cerrar-modal").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
    });
    document.getElementById("modal").addEventListener("click", e => {
    if (e.target.id === "modal") document.getElementById("modal").style.display = "none";
    });
});

// Espera a que todo el HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {

  // Obtener referencias a los elementos del formulario usando sus nuevos IDs
  const nameInput = document.getElementById('productName');
  const imageUrlInput = document.getElementById('productImageUrl');
  const categorySelect = document.getElementById('productCategory');
  const descriptionTextarea = document.getElementById('productDescription');
  const createButton = document.getElementById('createProductBtn');

  // Añadir un 'escuchador' de eventos al botón. Se ejecutará cuando se haga clic.
  createButton.addEventListener('click', function() {

      // 1. Leer los valores actuales de los campos del formulario
      const productName = nameInput.value;
      const imageUrl = imageUrlInput.value;
      const category = categorySelect.value; // El .value de un select da el value del option seleccionado
      const description = descriptionTextarea.value;

      // 2. Crear el objeto JavaScript con la estructura deseada
      const productObject = {
          Nombre: productName,
          img: imageUrl,
          desc: description, // Asegúrate que el orden de las claves no importa en JS/JSON
          categoria: category
      };

      // 3. Mostrar el objeto en la consola del navegador (para verificar)
      console.log("Objeto JavaScript creado:");
      console.log(productObject);

      // 4. (Opcional) Convertir el objeto a una cadena JSON
      // El 'null, 2' es para formatear la salida JSON de forma legible en la consola
      const productJsonString = JSON.stringify(productObject, null, 2);
      console.log("\nCadena JSON generada:");
      console.log(productJsonString);

      nameInput.value = '';
      imageUrlInput.value = '';
      categorySelect.value = ''; // Resetea al valor de la opción por defecto (<option value="">)
      descriptionTextarea.value = '';
  });

});