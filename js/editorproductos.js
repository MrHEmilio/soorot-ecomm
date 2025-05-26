document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('productName');
    const categorySelect = document.getElementById('productCategory');
    const descriptionTextarea = document.getElementById('productDescription');
    const productPrice = document.getElementById('precio');
    const createButton = document.getElementById('createProductBtn');
    const headerLoged = document.querySelector("#header-loged");
    let uploadedImageUrl = '';

if (!localStorage.getItem("usuarioActivo")){
        headerLoged.innerText = "Inicia sesión para crear un producto";
        headerLoged.insertAdjacentHTML("afterend", 
            `
            <a href="login.html"><button class="btn btn-primary">Iniciar sesión</button></a>
            `
        );
    } else {
    // CLOUDINARY 
    const cloudName = "deb2blqxi";
    const uploadPreset = "Soorot";

    const myWidget = cloudinary.createUploadWidget({
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        //Asignación de estilos
        styles: {
          palette: {
            window: "#1A4A36",
            windowBorder: "#232E26",
            tabIcon: "#D9EFDE",
            menuIcons: "#232E26",
            textDark: "#232E26",
            textLight: "#D9EFDE",
            link:  "#F8F4FF",
            action:  "#677D6A",
            inactiveTabIcon: "#D6BD98",
            error: "#F44235",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#E4EBF1"
          },
          frame: {
            background: "#677D6A"
          },
          fonts: {
              "'Lato', regular": "https://fonts.googleapis.com/css2?family=Lato",
          }
        }
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Hecho! Aquí está la información del archivo subido: ', result.info);
            uploadedImageUrl = result.info.secure_url;
            Swal.fire("Imagen subida con éxito." , "Ya puedes crear el producto.")

            const preview = document.getElementById('previewImage');
              if (preview) {
              preview.src = result.info.secure_url;
              preview.style.display = 'block';
            }
            return;
        }
    });

    document.getElementById("upload_widget").addEventListener("click", function () {
        myWidget.open();
    }, false);

    
    createButton.addEventListener('click', function (event) {
    event.preventDefault();

    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    const productName = nameInput.value.trim();
    const category = categorySelect.value;
    const description = descriptionTextarea.value.trim();
    const precio = productPrice.value.trim();
    const imageUrl = uploadedImageUrl;

    if (!productName || !imageUrl || !category || !description || !precio ) {
            Swal.fire("Todos los campos son obligatorios.")
            return;
    }

    const productObject = {
        Nombre: productName,
        img: imageUrl,
        desc: description,
        categoria: category,
        precio: precio
    };

    productos.push(productObject);
    localStorage.setItem('productos', JSON.stringify(productos));

    nameInput.value = '';
    categorySelect.value = '';
    descriptionTextarea.value = '';
    productPrice.value = '';
    uploadedImageUrl = '';
        
    Swal.fire("Producto creado exitosamente." , "Puedes verlo en la lista de productos.")
    return;
    });
}
});