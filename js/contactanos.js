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