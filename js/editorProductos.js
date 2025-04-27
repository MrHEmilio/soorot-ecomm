const productos = []
    // Ejemplo de un producto
    // {
    //   id: 1,
    //   name: "Producto 1",
    //   image: "assets/product-images/producto1.jpg",
    //   description: "Descripción del producto 1",
    //   quantity: 10,
    //   price: "199.99",
    //   link: "productos.html#producto1"
    // },
      
  const dropdown = document.getElementById("productDropdown");
  const card = document.getElementById("productCardContainer");
  const img = document.getElementById("productImage");
  const title = document.getElementById("productTitle");
  const desc = document.getElementById("productDescription");
  const qty = document.getElementById("productQty");
  const price = document.getElementById("productPrice");
  const link = document.getElementById("productLink");
  const editBtn = document.getElementById("editBtn");
  
  let edicionDinamica = false;
  let prodSeleccionado = null;
  
  // Agregar productos a dropdown
  productos.forEach((productos, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.className = "dropdown-item";
    a.textContent = product.name;
    a.addEventListener("click", () => loadProduct(index));
    li.appendChild(a);
    dropdown.appendChild(li);
  });
  
  // Cargar producto en cada tarjeta
  function loadProduct(index) {
    prodSeleccionado = productos[index];
    img.src = prodSeleccionado.image;
    title.textContent = prodSeleccionado.name;
    desc.value = prodSeleccionado.description;
    qty.value = prodSeleccionado.quantity;
    price.value = prodSeleccionado.price;
    link.href = prodSeleccionado.link;
  
    desc.disabled = true;
    qty.disabled = true;
    price.disabled = true;
    editBtn.textContent = "Editar";
  
    card.classList.remove("d-none");
    edicionDinamica = false;
  }
  
  // Click en botón de guardar cambios 
  // editBtn.addEventListener("click", () => {

    //Enseñar una tarjeta de ejemplo 

    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
          const card = document.getElementById('productCardContainer');
          card.classList.remove('d-none');
        }, 3000); // 3 seconds
      });