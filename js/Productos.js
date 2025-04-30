// Base de datos local de productos categorizados y listos para renderizar
const productos = [
    // Escalada
    { "Nombre": "Arnés", "img": "https://m.media-amazon.com/images/I/61mtAYBUcCL._AC_SX679_.jpg", "desc": "Arnés de seguridad ergonómico para escalada deportiva." },
    { "Nombre": "Cuerda Dinámica", "img": "https://www.teufelberger.com/media/catalog/product/cache/ad06d83191629f33f6df1b655e73fe3f/a/p/apex.jpg", "desc": "Cuerda para absorber impactos y caídas en escalada." },
    { "Nombre": "Mosquetón con seguro", "img": "https://m.media-amazon.com/images/I/51JMBbFK-dL._AC_.jpg", "desc": "Mosquetón con cierre automático para mayor seguridad." },
    { "Nombre": "Casco", "img": "https://m.media-amazon.com/images/I/61zWMe28UlL._AC_SL1500_.jpg", "desc": "Casco resistente para proteger tu cabeza en todo momento." },
    { "Nombre": "Gatas", "img": "https://contents.mediadecathlon.com/p2613846/1cr1/k$e33abc7dddd7a50e86c3b848a927624e/gatas-escalada-gris-cometa.jpg?format=auto&f=768x0", "desc": "Zapatos de precisión y comodidad para escalar mejor." },

    // Cañonismo
    { "Nombre": "Descensor", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAIXVHZeV6s6wysx9QlY2QMGJ8ucIc3Cq7080f8Jf57Z-YsLiMQRBBJxNrI-Qnkx3GW1I&usqp=CAU", "desc": "Equipo esencial para descensos técnicos." },
    { "Nombre": "Ascensores", "img": "https://www.climbingwallservices.com/cdn/shop/products/B17WRAPetzlAscension23540217R_e130620a-9d94-4942-8ff3-98b8907c54e8_grande.jpg?v=1622195018", "desc": "Sube por cuerda con total confianza." },
    { "Nombre": "Arnés especial", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9n2BV90Os5atK_iJXxO-qZT3-GDeAXvXjLA&s", "desc": "Kit de seguridad avanzada para aventuras extremas." },
    { "Nombre": "Cuerda Estática 11.7mm", "img": "https://www.sorbus-intl.co.uk/wp-content/uploads/2023/03/teufelberger-xstatic-climbing-rope.jpg", "desc": "Perfecta para maniobras verticales controladas." },
    { "Nombre": "Mochila 50L", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_uFxkWeSmDxxGs-inMXypAURuiAuyQ4bvQ&s", "desc": "Transporta tu equipo sin esfuerzo y con estilo." },

    // Alpinismo
    { "Nombre": "Crampones", "img": "https://res.cloudinary.com/ekoweb/image/upload/s--ZwNMxQ9u--/f_auto,h_600,q_auto:eco,w_600/v1/products/9-27158/views/9-27158_lynx-leverlock-universel_t24a-llu_01", "desc": "Agarre firme en hielo y nieve." },
    { "Nombre": "Piolettes", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJFt4hXgZEtSSJXvlRufRwcCZ78AsNSGwOA&s", "desc": "Herramienta clave para escaladas técnicas." },
    { "Nombre": "Traje completo -10° C", "img": "https://www.phdesigns.co.uk/images/omega-suit-hs2-013lg.jpg", "desc": "Diseñado para soportar climas extremos." },
    { "Nombre": "Mochila Extraligera 30L", "img": "https://us.blueice.com/cdn/shop/files/StacheUL25-1front-web_1.jpg?v=1718042591&width=1100", "desc": "Ideal para excursiones de alto rendimiento." },

    // Exploración
    { "Nombre": "Botas Senderismo", "img": "https://d1nymbkeomeoqg.cloudfront.net/photos/18/92/310773_29276_XXL.jpg", "desc": "Cómodas, impermeables y resistentes." },
    { "Nombre": "Bastones Senderismo", "img": "https://res.cloudinary.com/ekoweb/image/upload/s--6ADljju8--/f_auto,h_600,q_auto:eco,w_600/v1/products/9-125901/views/9-125901_ultra-carbon-foldable_l47043200_01", "desc": "Ayuda a mantener el equilibrio en cualquier terreno." },
    { "Nombre": "Lámpara Recargable", "img": "https://media.pelican.com/img/products/flashlights/2760/pelican-best-high-lumen-led-camping-headlamp.jpg", "desc": "Ilumina tus pasos, incluso en la noche más oscura." },
    { "Nombre": "Chamarra impermeable", "img": "https://www.fjern.equipment/cdn/shop/products/mens-forsvar-eco-waterproof-jacket-indigo-7_2048x.jpg?v=1659431169", "desc": "Mantente seco sin importar el clima." },

    // Camping
    { "Nombre": "Casa de campaña", "img": "https://www.rei.com/media/cb065d7d-9b9a-4277-a814-cb2e5922aef6.jpg?size=784x588", "desc": "Tu hogar temporal bajo las estrellas." },
    { "Nombre": "Bolsa de dormir", "img": "https://teton.mx/cdn/shop/products/teton-sports-celsius-grand-xxl-0-f-sleeping-bag-39525311742190.jpg?v=1745598282", "desc": "Duerme cómodo y cálido donde sea." },
    { "Nombre": "Bajosleeping inflable", "img": "https://klymit.com/cdn/shop/products/Klymit_StaticV_06SVGR01C_Front_Deep_NoValve_2000x2000_1606fbeb-ea1b-4b5a-a643-e29f48b9d1e2.jpg?v=1741634066", "desc": "Colchón compacto y funcional." },
    { "Nombre": "Utensilios", "img": "https://m.media-amazon.com/images/I/813WahUDNaL._AC_SL1500_.jpg", "desc": "Todo lo que necesitas para cocinar al aire libre." }
];

// Renderiza una tarjeta en el DOM con la información del producto
function addItem(item) {
  const itemHTML = `
    <div class="card">
      <img class="bd-placeholder-img" src="${item.img}" alt="image">
      <div class="card-body">
        <p class="card-text">${item.Nombre}</p>
        <p>${item.desc}</p>
        <small class="text-muted">$ --</small>
      </div>
    </div>`;

  const itemsContainer = document.getElementById("list-items");
  if (itemsContainer) {
    itemsContainer.innerHTML += itemHTML;
    console.log(`Producto agregado: ${item.Nombre}`);
  } else {
    console.warn("Contenedor 'list-items' no encontrado");
  }
}

// Cuando el DOM esté cargado, se activa la lógica principal
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM completamente cargado");

  // Renderizar productos locales
  productos.forEach(item => addItem(item));

  // Evento para cargar productos desde API externa
  const loadProductsButton = document.querySelector(".btn.btn-primary.my-2");
  if (loadProductsButton) {
    loadProductsButton.addEventListener("click", () => {
      console.log("Botón presionado: Cargando productos desde API...");

      fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => {
          const products = data.slice(0, 9);
          const productCards = document.querySelectorAll(".card");

          products.forEach((product, index) => {
            const card = productCards[index];
            if (!card) return;

            const cardImage = card.querySelector(".bd-placeholder-img");
            const cardText = card.querySelector(".card-text");
            const description = card.querySelector(".card-body p:nth-of-type(2)");
            const price = card.querySelector(".card-body small");

            if (cardImage) cardImage.setAttribute("src", product.images[1] || product.images[0]);
            if (cardText) cardText.textContent = product.title;
            if (description) description.textContent = product.description;
            if (price) price.textContent = `$${product.price}`;

            console.log(`Producto actualizado desde API: ${product.title}`);
          });
        })
        .catch(error => console.error("Error al obtener productos desde API:", error));
    });
  } else {
    console.warn("Botón de carga de productos no encontrado en el DOM");
  }
});
