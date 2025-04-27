// Inicializar EmailJS
(function () {
  // Configuración inicial de EmailJS con tu User ID
  emailjs.init("tCk0Yz0O6OB4wkfGp"); // Reemplaza con tu User ID de EmailJS
})();

// Referencias a los elementos del formulario
const contactForm = document.getElementById("contactForm"); // Formulario principal
const inputName = document.getElementById("nombre"); // Campo de nombre
const inputEmail = document.getElementById("email"); // Campo de correo
const inputPhone = document.getElementById("telefono"); // Campo de teléfono
const inputMessage = document.getElementById("mensaje"); // Campo de mensaje

// Función para validar campos
function validarCampos(campos) {
  // Itera sobre cada campo recibido como argumento
  for (const campo of campos) {
    // Verifica si el campo está vacío
    if (!campo.value.trim()) {
      // Muestra un mensaje indicando qué campo falta
      alert(`Por favor llena el campo: ${campo.name}`);
      return false; // Retorna falso si algún campo está vacío
    }
  }
  return true; // Retorna verdadero si todos los campos están llenos
}

// Función para enviar datos con EmailJS
function enviarDatosEmailJS(data, mensajeExito, mensajeError) {
  // Llama a EmailJS para enviar los datos
  emailjs
    .send("service_p80rvz4", "template_8vpq9g9", data) // Reemplaza con tu Service ID y Template ID
    .then(
      function () {
        // Si el envío es exitoso, muestra un mensaje de éxito
        alert(mensajeExito);
        // Limpia el formulario después de enviar los datos
        contactForm.reset();
      },
      function (error) {
        // Si ocurre un error, muestra un mensaje con detalles
        alert(`${mensajeError}: ${error.text}. Inténtalo de nuevo.`);
        // Imprime el error en la consola para depuración
        console.error("Error:", error);
      }
    );
}

// Validar que el campo de nombre permita múltiples nombres y no acepte números
inputName.addEventListener("input", function () {
  const regex = /^[a-zA-Z\s]*$/; // Solo letras y espacios
  if (!regex.test(this.value)) {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, ""); // Elimina caracteres no válidos
    alert("Solo se permiten letras y espacios en el campo de nombre.");
  }
});

// Validar que el campo de teléfono tenga exactamente 10 dígitos y no acepte letras
inputPhone.addEventListener("input", function () {
  const regex = /^\d{0,10}$/; // Permite hasta 10 dígitos
  if (!regex.test(this.value)) {
    this.value = this.value.replace(/\D/g, ""); // Elimina caracteres no numéricos
    alert("Solo se permiten números en el campo de teléfono.");
  }
});

// Manejo del envío del formulario principal
contactForm.addEventListener("submit", function (event) {
  // Evita que el formulario recargue la página al enviarse
  event.preventDefault();

  // Validar que el campo de teléfono tenga exactamente 10 dígitos
  if (inputPhone.value.length !== 10) {
    alert("El número de teléfono debe tener exactamente 10 dígitos.");
    return;
  }

  // Validar que todos los campos estén llenos
  if (!validarCampos([inputName, inputEmail, inputPhone, inputMessage])) {
    return; // Detiene el envío si algún campo está vacío
  }

  // Preparar los datos a enviar
  const data = {
    nombre: inputName.value.trim(), // Obtiene el valor del campo nombre
    correo: inputEmail.value.trim(), // Obtiene el valor del campo correo
    telefono: inputPhone.value.trim(), // Obtiene el valor del campo teléfono
    mensaje: inputMessage.value.trim(), // Obtiene el valor del campo mensaje
  };

  // Llamar a la función para enviar los datos con EmailJS
  enviarDatosEmailJS(data, "Correo enviado con éxito", "Error al enviar el correo");
});

// Botón adicional para enviar datos específicos
document.getElementById("enviarDatos").addEventListener("click", function () {
  // Validar que los campos necesarios estén llenos
  if (!validarCampos([inputName, inputEmail, inputPhone])) {
    return; // Detiene el envío si algún campo está vacío
  }

  // Preparar los datos específicos a enviar
  const data = {
    nombre: inputName.value.trim(), // Obtiene el valor del campo nombre
    correo: inputEmail.value.trim(), // Obtiene el valor del campo correo
    telefono: inputPhone.value.trim(), // Obtiene el valor del campo teléfono
    mensaje: "Datos enviados desde el botón adicional", // Mensaje fijo para este botón
  };

  // Llamar a la función para enviar los datos con EmailJS
  enviarDatosEmailJS(data, "Datos enviados con éxito desde el botón adicional", "Error al enviar los datos");
});

// Botón de limpiar
document.getElementById("limpiar").addEventListener("click", function () {
  // Limpia todos los campos del formulario
  contactForm.reset();
  // Muestra un mensaje indicando que el formulario fue limpiado
  alert("Formulario limpiado correctamente");
});
