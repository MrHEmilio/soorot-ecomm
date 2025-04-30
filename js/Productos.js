// Base de datos de productos
// const productos = {
//     "Descensores": {
//     img: "https://m.media-amazon.com/images/I/71t1j8oPNsL._AC_SL1500_.jpg",
//     desc: "Equipo esencial para descensos técnicos en cañonismo o rappel controlado."
//     },
//     "Ascensores": {
//     img: "https://m.media-amazon.com/images/I/61lVy-BVuDL._AC_SL1500_.jpg",
//     desc: "Dispositivo para ascender por cuerda de forma segura y eficiente."
//     },
//     "Arsenal especial": {
//     img: "https://m.media-amazon.com/images/I/61I7E7GQ0IL._AC_SL1500_.jpg",
//     desc: "Equipo de seguridad avanzado para situaciones técnicas y rescate."
//     },
//     "Cuerdas Estáticas": {
//     img: "https://m.media-amazon.com/images/I/71RSyXBES0L._AC_SL1500_.jpg",
//     desc: "Cuerdas de bajo estiramiento, ideales para maniobras verticales controladas."
//     },
//     "Mochilas": {
//     img: "https://m.media-amazon.com/images/I/71QxZ2DArBL._AC_SL1500_.jpg",
//     desc: "Mochilas resistentes diseñadas para exploración de montaña o campismo."
//     }
// };

//   // Función para mostrar la información del producto seleccionado en un modal
// function mostrarInfo(nombre) {
//     const producto = productos[nombre]; // Obtiene el producto desde la base de datos
//     if (!producto) return; // Si no existe, no hace nada

//     // Llena los elementos del modal con los datos del producto
//     document.getElementById('modal-title').innerText = nombre;
//     document.getElementById('modal-img').src = producto.img;
//     document.getElementById('modal-desc').innerText = producto.desc;
//     document.getElementById('modal').style.display = 'flex'; // Muestra el modal
// }

//   // Función para cerrar el modal
// function cerrarModal() {
//     document.getElementById('modal').style.display = 'none'; // Oculta el modal
// }

//   // Función para filtrar productos según la categoría seleccionada
// function filtrarProductos(categoria, botonSeleccionado) {
//     document.querySelectorAll(".product-card").forEach(card => {
//       // Muestra solo productos que pertenecen a la categoría o todos si es "general"
//     card.style.display = categoria === "general" || card.classList.contains(categoria) ? "block" : "none";
//     });

//     // Quita la clase 'active' de todos los botones
//     document.querySelectorAll(".menu-item").forEach(b => b.classList.remove("active"));

//     // Agrega la clase 'active' al botón seleccionado
//     botonSeleccionado.classList.add("active");
// }

//   // Función que configura todos los eventos al cargar la página
// document.addEventListener("DOMContentLoaded", () => {
//     // Botones de categoría
//     document.querySelectorAll('.menu-item').forEach(boton => {
//     const categoria = boton.dataset.categoria;
//     boton.addEventListener('click', () => filtrarProductos(categoria, boton));
//     });

//     // Tarjetas de producto que abren el modal al hacer clic
//     document.querySelectorAll('.product-card').forEach(card => {
//     const nombre = card.dataset.nombre;
//     card.addEventListener('click', () => mostrarInfo(nombre));
//     });

//     // Botón para cerrar el modal
//     document.getElementById('cerrar-modal').addEventListener('click', cerrarModal);

//     // Cierra el modal si se hace clic fuera del contenido del modal
//     document.getElementById('modal').addEventListener('click', e => {
//     if (e.target.id === 'modal') cerrarModal();
//     });
// });

const productos = [
  // Escalada 
  {
      "Nombre" : "Arnés",
      "img" : "https://m.media-amazon.com/images/I/61mtAYBUcCL._AC_SX679_.jpg",
      "desc" : ""
  }, 
  {
      "Nombre" : "Cuerda Dinámica",
      "img" : "https://www.teufelberger.com/media/catalog/product/cache/ad06d83191629f33f6df1b655e73fe3f/a/p/apex.jpg",
      "desc" : ""
  },
  {
      "Nombre" : "Mosquetón con seguro",
      "img" : "https://m.media-amazon.com/images/I/51JMBbFK-dL._AC_.jpg",
      "desc" : ""
  },
  {
      "Nombre" : "Casco",
      "img" : "https://m.media-amazon.com/images/I/61zWMe28UlL._AC_SL1500_.jpg",
      "desc" : ""
  },
  {
      "Nombre" : "Gatas",
      "img" : "https://contents.mediadecathlon.com/p2613846/1cr1/k$e33abc7dddd7a50e86c3b848a927624e/gatas-escalada-gris-cometa.jpg?format=auto&f=768x0",
      "desc" : ""
  },
  // Cañonismo
  {
      "Nombre": "Descensor", 
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAIXVHZeV6s6wysx9QlY2QMGJ8ucIc3Cq7080f8Jf57Z-YsLiMQRBBJxNrI-Qnkx3GW1I&usqp=CAU",
      "desc": "Equipo esencial para descensos técnicos."
  },
  {
      "Nombre" : "Ascensores",
      "img" : "https://www.climbingwallservices.com/cdn/shop/products/B17WRAPetzlAscension23540217R_e130620a-9d94-4942-8ff3-98b8907c54e8_grande.jpg?v=1622195018",
      "desc" : "Sube en cuerdas de forma segura."
  },
  {
      "Nombre" : "Arnés especial", 
      "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9n2BV90Os5atK_iJXxO-qZT3-GDeAXvXjLA&s",
      "desc" : "Kit completo para aventuras de cañonismo."
  },
  {
      "Nombre" : "Cuerda Estática 11.7mm", 
      "img" : "https://www.sorbus-intl.co.uk/wp-content/uploads/2023/03/teufelberger-xstatic-climbing-rope.jpg",
      "desc" : "Cuerdas resistentes para escalada técnica."
  },
  {
      "Nombre" : "Mochila 50L", 
      "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_uFxkWeSmDxxGs-inMXypAURuiAuyQ4bvQ&s",
      "desc" : "Perfectas para llevar todo en la montaña."
  },
  //Alpinismo
  {
      "Nombre" : "Crampones", 
      "img" : "https://res.cloudinary.com/ekoweb/image/upload/s--ZwNMxQ9u--/f_auto,h_600,q_auto:eco,w_600/v1/products/9-27158/views/9-27158_lynx-leverlock-universel_t24a-llu_01",
      "desc" : ""
  },
  {
      "Nombre" : "Piolettes", 
      "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJFt4hXgZEtSSJXvlRufRwcCZ78AsNSGwOA&s",
      "desc" : ""
  },
  {
      "Nombre" : "Traje completo -10° C", 
      "img" : "https://www.phdesigns.co.uk/images/omega-suit-hs2-013lg.jpg",
      "desc" : ""
  },
  {
      "Nombre" : "Mochila Extraligera 30L", 
      "img" : "https://us.blueice.com/cdn/shop/files/StacheUL25-1front-web_1.jpg?v=1718042591&width=1100",
      "desc" : ""
  },
  //Exploración
  {
      "Nombre" : "Botas Senderismo", 
      "img" : "https://d1nymbkeomeoqg.cloudfront.net/photos/18/92/310773_29276_XXL.jpg",
      "desc" : ""
  },
  {
      "Nombre" : "Bastones Senderismo", 
      "img" : "https://res.cloudinary.com/ekoweb/image/upload/s--6ADljju8--/f_auto,h_600,q_auto:eco,w_600/v1/products/9-125901/views/9-125901_ultra-carbon-foldable_l47043200_01",
      "desc" : ""
  },
  {
      "Nombre" : "Lámpara Recargable", 
      "img" : "https://media.pelican.com/img/products/flashlights/2760/pelican-best-high-lumen-led-camping-headlamp.jpg",
      "desc" : ""
  },
  {
      "Nombre" : "Chamarra impermeable", 
      "img" : "https://www.fjern.equipment/cdn/shop/products/mens-forsvar-eco-waterproof-jacket-indigo-7_2048x.jpg?v=1659431169",
      "desc" : ""
  },
  // Camping
  {
      "Nombre" : "Casa de campaña", 
      "img" : "https://www.rei.com/media/cb065d7d-9b9a-4277-a814-cb2e5922aef6.jpg?size=784x588",
      "desc" : ""
  },
  {
      "Nombre" : "Bolsa de dormir", 
      "img" : "https://teton.mx/cdn/shop/products/teton-sports-celsius-grand-xxl-0-f-sleeping-bag-39525311742190.jpg?v=1745598282",
      "desc" : ""
  },
  {
      "Nombre" : "Bajosleeping inflable", 
      "img" : "https://klymit.com/cdn/shop/products/Klymit_StaticV_06SVGR01C_Front_Deep_NoValve_2000x2000_1606fbeb-ea1b-4b5a-a643-e29f48b9d1e2.jpg?v=1741634066",
      "desc" : ""
  },
  {
      "Nombre" : "Utensilios", 
      "img" : "https://m.media-amazon.com/images/I/813WahUDNaL._AC_SL1500_.jpg",
      "desc" : ""
  },
  ]

// Funcion

function addItem(item){
  const itemHTML = `
    <div class="card">
      <img src="${item.img}" alt="image" id="imgTarjeta">
      <h3 id="nombreTarjeta">${item.Nombre}</h3>
      <p id="descTarjeta">${item.desc}</p>
      <span id="precioTarjeta"></span>
    </div>
    <br/>
  `;

  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}

productos.forEach(item => addItem(item));
