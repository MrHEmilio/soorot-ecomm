// Base de datos local de productos categorizados y listos para renderizar
const productos = [
    // Escalada
    { "Nombre": "Arnés", "img": "https://m.media-amazon.com/images/I/61mtAYBUcCL._AC_SX679_.jpg", "desc": "Arnés de seguridad ergonómico para escalada deportiva.", "categoria": "escalada" },
    { "Nombre": "Cuerda Dinámica", "img": "https://www.teufelberger.com/media/catalog/product/cache/ad06d83191629f33f6df1b655e73fe3f/a/p/apex.jpg", "desc": "Cuerda para absorber impactos y caídas en escalada.", "categoria": "escalada" },
    { "Nombre": "Mosquetón con seguro", "img": "https://m.media-amazon.com/images/I/51JMBbFK-dL._AC_.jpg", "desc": "Mosquetón con cierre automático para mayor seguridad.", "categoria": "escalada" },
    { "Nombre": "Casco", "img": "https://m.media-amazon.com/images/I/61zWMe28UlL._AC_SL1500_.jpg", "desc": "Casco resistente para proteger tu cabeza en todo momento.", "categoria": "escalada" },
    { "Nombre": "Gatas", "img": "https://contents.mediadecathlon.com/p2613846/1cr1/k$e33abc7dddd7a50e86c3b848a927624e/gatas-escalada-gris-cometa.jpg?format=auto&f=768x0", "desc": "Zapatos de precisión y comodidad para escalar mejor.", "categoria": "escalada" },
  
    // Cañonismo
    { "Nombre": "Descensor", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAIXVHZeV6s6wysx9QlY2QMGJ8ucIc3Cq7080f8Jf57Z-YsLiMQRBBJxNrI-Qnkx3GW1I&usqp=CAU", "desc": "Equipo esencial para descensos técnicos.", "categoria": "cañonismo" },
    { "Nombre": "Ascensores", "img": "https://www.climbingwallservices.com/cdn/shop/products/B17WRAPetzlAscension23540217R_e130620a-9d94-4942-8ff3-98b8907c54e8_grande.jpg?v=1622195018", "desc": "Sube por cuerda con total confianza.", "categoria": "cañonismo" },
    { "Nombre": "Arnés especial", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9n2BV90Os5atK_iJXxO-qZT3-GDeAXvXjLA&s", "desc": "Kit de seguridad avanzada para aventuras extremas.", "categoria": "cañonismo" },
    { "Nombre": "Cuerda Estática 11.7mm", "img": "https://www.sorbus-intl.co.uk/wp-content/uploads/2023/03/teufelberger-xstatic-climbing-rope.jpg", "desc": "Perfecta para maniobras verticales controladas.", "categoria": "cañonismo" },
    { "Nombre": "Mochila 50L", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_uFxkWeSmDxxGs-inMXypAURuiAuyQ4bvQ&s", "desc": "Transporta tu equipo sin esfuerzo y con estilo.", "categoria": "cañonismo" },
  
    // Alpinismo
    { "Nombre": "Crampones", "img": "https://res.cloudinary.com/ekoweb/image/upload/s--ZwNMxQ9u--/f_auto,h_600,q_auto:eco,w_600/v1/products/9-27158/views/9-27158_lynx-leverlock-universel_t24a-llu_01", "desc": "Agarre firme en hielo y nieve.", "categoria": "alpinismo" },
    { "Nombre": "Piolettes", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJFt4hXgZEtSSJXvlRufRwcCZ78AsNSGwOA&s", "desc": "Herramienta clave para escaladas técnicas.", "categoria": "alpinismo" },
    { "Nombre": "Traje completo -10° C", "img": "https://www.phdesigns.co.uk/images/omega-suit-hs2-013lg.jpg", "desc": "Diseñado para soportar climas extremos.", "categoria": "alpinismo" },
    { "Nombre": "Mochila Extraligera 30L", "img": "https://us.blueice.com/cdn/shop/files/StacheUL25-1front-web_1.jpg?v=1718042591&width=1100", "desc": "Ideal para excursiones de alto rendimiento.", "categoria": "alpinismo" },
  
    // Exploración
    { "Nombre": "Botas Senderismo", "img": "https://d1nymbkeomeoqg.cloudfront.net/photos/18/92/310773_29276_XXL.jpg", "desc": "Cómodas, impermeables y resistentes.", "categoria": "exploracion" },
    { "Nombre": "Bastones Senderismo", "img": "https://res.cloudinary.com/ekoweb/image/upload/s--6ADljju8--/f_auto,h_600,q_auto:eco,w_600/v1/products/9-125901/views/9-125901_ultra-carbon-foldable_l47043200_01", "desc": "Ayuda a mantener el equilibrio en cualquier terreno.", "categoria": "exploracion" },
    { "Nombre": "Lámpara Recargable", "img": "https://media.pelican.com/img/products/flashlights/2760/pelican-best-high-lumen-led-camping-headlamp.jpg", "desc": "Ilumina tus pasos, incluso en la noche más oscura.", "categoria": "exploracion" },
    { "Nombre": "Chamarra impermeable", "img": "https://www.fjern.equipment/cdn/shop/products/mens-forsvar-eco-waterproof-jacket-indigo-7_2048x.jpg?v=1659431169", "desc": "Mantente seco sin importar el clima.", "categoria": "exploracion" },
  
    // Campismo
    { "Nombre": "Casa de campaña", "img": "https://www.rei.com/media/cb065d7d-9b9a-4277-a814-cb2e5922aef6.jpg?size=784x588", "desc": "Tu hogar temporal bajo las estrellas.", "categoria": "campismo" },
    { "Nombre": "Bolsa de dormir", "img": "https://teton.mx/cdn/shop/products/teton-sports-celsius-grand-xxl-0-f-sleeping-bag-39525311742190.jpg?v=1745598282", "desc": "Duerme cómodo y cálido donde sea.", "categoria": "campismo" },
    { "Nombre": "Bajosleeping inflable", "img": "https://klymit.com/cdn/shop/products/Klymit_StaticV_06SVGR01C_Front_Deep_NoValve_2000x2000_1606fbeb-ea1b-4b5a-a643-e29f48b9d1e2.jpg?v=1741634066", "desc": "Colchón compacto y funcional.", "categoria": "campismo" },
    { "Nombre": "Utensilios", "img": "https://m.media-amazon.com/images/I/813WahUDNaL._AC_SL1500_.jpg", "desc": "Todo lo que necesitas para cocinar al aire libre.", "categoria": "campismo" }
  ];
// Función para renderizar una tarjeta de producto
function addItem(item) {
    const itemHTML = `
      <div class="col-md-4 col-sm-6 mb-4 d-flex">
        <div class="card product-card ${item.categoria} w-100">
          <div class="card-header d-flex justify-content-between align-items-center">
            <button class="btn btn-outline-success btn-sm fw-bold">Edit</button>
            <span class="text-success fw-bold">$ --</span>
          </div>
          <img class="bd-placeholder-img" src="${item.img}" alt="${item.Nombre}">
          <div class="card-body">
            <h3 class="card-title">${item.Nombre}</h3>
            <p class="card-text">${item.desc}</p>
          </div>
        </div>
      </div>
    `;
  
    const itemsContainer = document.getElementById("list-items");
    if (itemsContainer) {
      itemsContainer.insertAdjacentHTML("beforeend", itemHTML);
    } else {
      console.warn("Contenedor 'list-items' no encontrado");
    }
  }
  
  // Lógica al cargar el DOM
  document.addEventListener("DOMContentLoaded", () => {
    productos.forEach(item => addItem(item));
  
    document.querySelectorAll(".menu-item").forEach(boton => {
      boton.addEventListener("click", () => {
        const categoria = boton.dataset.categoria;
        filtrarProductos(categoria, boton);
      });
    });
  });
  
  // Función para filtrar por categoría
  function filtrarProductos(categoria, botonSeleccionado) {
    const tarjetas = document.querySelectorAll(".product-card");
    tarjetas.forEach(card => {
      card.parentElement.style.display = (categoria === "general" || card.classList.contains(categoria)) ? "flex" : "none";
    });
  
    document.querySelectorAll(".menu-item").forEach(btn => btn.classList.remove("active"));
    botonSeleccionado.classList.add("active");
  }
  