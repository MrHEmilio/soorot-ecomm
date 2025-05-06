document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('productName');
    const imageUrlInput = document.getElementById('productImageUrl');
    const categorySelect = document.getElementById('productCategory');
    const descriptionTextarea = document.getElementById('productDescription');
    const createButton = document.getElementById('createProductBtn');
    const listItems = document.getElementById("list-items");
  
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
  
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
      listItems.insertAdjacentHTML("beforeend", tarjeta);
    }
  
    // Renderizar tarjetas al cargar la página
    productos.forEach(addItem);
  
    // Crear nuevo producto
    createButton.addEventListener('click', function (event) {
      event.preventDefault();
  
      // 🔁 Releer productos desde localStorage en cada clic
      productos = JSON.parse(localStorage.getItem('productos')) || [];
  
      const productName = nameInput.value.trim();
      const imageUrl = imageUrlInput.value.trim();
      const category = categorySelect.value;
      const description = descriptionTextarea.value.trim();
  
      if (!productName || !imageUrl || !category || !description) {
        alert("Todos los campos son obligatorios.");
        return;
      }
  
      const productObject = {
        Nombre: productName,
        img: imageUrl,
        desc: description,
        categoria: category
      };
  
      productos.push(productObject);
      localStorage.setItem('productos', JSON.stringify(productos));
  
      addItem(productObject);  // Mostrar tarjeta
  
      // ✅ Limpiar campos del formulario
      nameInput.value = '';
      imageUrlInput.value = '';
      categorySelect.value = '';
      descriptionTextarea.value = '';
    });
  
    function filtrarProductos(categoria) {
      document.querySelectorAll(".product-card").forEach(card => {
        const mostrar = categoria === "general" || card.classList.contains(categoria);
        card.style.display = mostrar ? "flex" : "none";
      });
    }
  
    function mostrarModal(producto) {
      document.getElementById("modal-img").src = producto.img;
      document.getElementById("modal-title").textContent = producto.Nombre;
      document.getElementById("modal-desc").textContent = producto.desc;
      document.getElementById("modal").style.display = "flex";
    }
  
    document.querySelectorAll(".menu-item").forEach(btn => {
      btn.addEventListener("click", () => {
        filtrarProductos(btn.dataset.categoria);
        document.querySelectorAll(".menu-item").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  
    listItems.addEventListener("click", e => {
      const tarjeta = e.target.closest(".product-card");
      if (!tarjeta) return;
  
      const nombre = tarjeta.querySelector("h3").textContent;
      const producto = productos.find(p => p.Nombre === nombre);
  
      if (e.target.dataset.action === "view") {
        mostrarModal(producto);
      }
  
      if (e.target.dataset.action === "edit") {
        alert("Editar producto: " + producto.Nombre);
      }
    });
  
    document.getElementById("cerrar-modal").addEventListener("click", () => {
      document.getElementById("modal").style.display = "none";
    });
  
    document.getElementById("modal").addEventListener("click", e => {
      if (e.target.id === "modal") {
        document.getElementById("modal").style.display = "none";
      }
    });
  });
  