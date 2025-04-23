document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los botones con la clase "learn-more"
    const learnMoreButtons = document.querySelectorAll(".learn-more");
  
    // Obtiene el elemento del modal y sus elementos internos
    const modal = document.getElementById("modal"); // Modal principal
    const modalImage = modal.querySelector(".modal-image"); // Imagen dentro del modal
    const modalTitle = modal.querySelector(".modal-title"); // Título dentro del modal
    const modalDescription = modal.querySelector(".modal-description"); // Descripción dentro del modal
    const closeModalButton = modal.querySelector(".close"); // Botón para cerrar el modal
    const prevButton = modal.querySelector(".prev"); // Botón para ir a la imagen anterior
    const nextButton = modal.querySelector(".next"); // Botón para ir a la imagen siguiente
  
    let currentIndex = 0; // Índice de la tarjeta actualmente seleccionada
  
    // Obtener los datos de todas las tarjetas a partir de los botones "Learn More"
    const cardsData = Array.from(learnMoreButtons).map(button => ({
        image: button.getAttribute("data-image"), // Imagen asociada a la tarjeta
        title: button.getAttribute("data-title"), // Título de la tarjeta
        description: button.getAttribute("data-description"), // Descripción de la tarjeta
    }));
  
    // Función para actualizar el contenido del modal
    const updateModalContent = (index) => {
        const { image, title, description } = cardsData[index]; // Obtiene los datos de la tarjeta correspondiente
        modalImage.src = image; // Actualiza la imagen del modal
        modalTitle.textContent = title; // Actualiza el título del modal
        modalDescription.textContent = description; // Actualiza la descripción del modal
    };
  
    // Función para abrir el modal
    const openModal = (index) => {
        currentIndex = index; // Establece el índice actual
        updateModalContent(currentIndex); // Actualiza el contenido del modal con la tarjeta seleccionada
        modal.style.display = "flex"; // Muestra el modal
    };
  
    // Función para cerrar el modal
    const closeModal = () => {
        modal.style.display = "none"; // Oculta el modal
    };
  
    // Función para mostrar la siguiente tarjeta en el modal
    const showNext = () => {
        currentIndex = (currentIndex + 1) % cardsData.length; // Incrementa el índice y vuelve al inicio si alcanza el final
        updateModalContent(currentIndex); // Actualiza el contenido del modal
    };
  
    // Función para mostrar la tarjeta anterior en el modal
    const showPrev = () => {
        currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length; // Decrementa el índice y vuelve al final si alcanza el principio
        updateModalContent(currentIndex); // Actualiza el contenido del modal
    };
  
    // Agrega eventos "click" a cada botón "Learn More"
    learnMoreButtons.forEach((button, index) => {
        button.addEventListener("click", () => openModal(index)); // Abre el modal con el índice de la tarjeta correspondiente
    });
  
    // Agrega evento "click" al botón de cerrar modal
    closeModalButton.addEventListener("click", closeModal);
  
    // Agrega eventos "click" a los botones de navegación dentro del modal
    prevButton.addEventListener("click", showPrev); // Botón anterior
    nextButton.addEventListener("click", showNext); // Botón siguiente
  
    // Agrega eventos de teclado para navegar en el modal
    document.addEventListener("keydown", (event) => {
        if (modal.style.display === "flex") { // Solo si el modal está visible
            if (event.key === "ArrowRight") showNext(); // Flecha derecha para avanzar
            if (event.key === "ArrowLeft") showPrev(); // Flecha izquierda para retroceder
            if (event.key === "Escape") closeModal(); // Escape para cerrar el modal
        }
    });
  });



// ========== Validación de Datos con Botón "Enviar" ==========

// Obtiene los elementos del formulario
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("btnEnviar");

// Evento al hacer clic en el botón "Enviar"
btnEnviar.addEventListener("click", function (event) {
  event.preventDefault(); // Evita el envío del formulario
  limpiarAlertas(); // Elimina mensajes de alerta previos

  let isValid = true; // Bandera para validar los campos

  // Limpia y transforma los valores de los campos
  nombre.value = nombre.value.trim().toUpperCase(); // Convierte el nombre a mayúsculas
  email.value = email.value.trim();
  telefono.value = telefono.value.trim();
  mensaje.value = mensaje.value.trim();

  // Validación del nombre (mínimo 3 caracteres)
  if (nombre.value.length < 3) {
    alerta(nombre, "Inserta tu nombre completo.");
    isValid = false;
  }

  // Validación del email con expresión regular
  const regexEmail = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
  if (!regexEmail.test(email.value)) {
    alerta(email, "Correo electrónico inválido.");
    isValid = false;
  }

  // Validación del teléfono (exactamente 10 dígitos)
  if (!/^\d{10}$/.test(telefono.value)) {
    alerta(telefono, "Teléfono inválido. Debe tener 10 dígitos.");
    isValid = false;
  }

  // Validación del mensaje (mínimo 15 caracteres)
  if (mensaje.value.length < 15) {
    alerta(mensaje, "El mensaje debe tener al menos 15 caracteres.");
    isValid = false;
  }

  // Si algún campo no es válido, se detiene el proceso
  if (!isValid) return;

  // Si todos los campos son válidos, se muestran los datos en consola
  console.log("Nombre:", nombre.value);
  console.log("Email:", email.value);
  console.log("Teléfono:", telefono.value);
  console.log("Mensaje:", mensaje.value);

  // Limpia los campos del formulario
  nombre.value = "";
  email.value = "";
  telefono.value = "";
  mensaje.value = "";

  // Enfoca nuevamente en el campo de nombre
  nombre.focus();
});

// Función para mostrar una alerta debajo del input con error
function alerta(input, mensaje) {
  const alerta = document.createElement("div");
  alerta.textContent = mensaje; // Mensaje de alerta
  alerta.style.color = "red"; // Color rojo para visibilidad
  alerta.style.marginBottom = "4px"; // Espaciado inferior
  alerta.classList.add("alerta"); // Clase para identificación
  input.style.border = "2px solid red"; // Marca el input en rojo
  input.parentNode.insertBefore(alerta, input); // Inserta la alerta antes del input
}

// Función para eliminar todas las alertas del formulario
function limpiarAlertas() {
  const alertas = document.querySelectorAll(".alerta"); // Selecciona todas las alertas activas
  alertas.forEach(a => a.remove()); // Elimina cada una

  // Restaura el borde de los inputs al valor original
  [nombre, email, telefono, mensaje].forEach(input => {
    input.style.border = "";
  });
}