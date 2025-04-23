// ========== Validación de Datos con Botón "Enviar" ==========
document.addEventListener("DOMContentLoaded", function () {  
    // Obtiene los elementos del formulario
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const mensaje = document.getElementById("mensaje");
    const btnEnviar = document.getElementById("btnEnviar");
  
    // Evento al hacer clic en el botón "Enviar"
    btnEnviar.addEventListener("click", function (event) {
      event.preventDefault();
      limpiarAlertas();
  
      let isValid = true;
  
      nombre.value = nombre.value.trim().toUpperCase();
      email.value = email.value.trim();
      telefono.value = telefono.value.trim();
      mensaje.value = mensaje.value.trim();
  
      if (nombre.value.length < 3) {
        alerta(nombre, "Inserta tu nombre completo.");
        isValid = false;
      }
  
      const regexEmail = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
      if (!regexEmail.test(email.value)) {
        alerta(email, "Correo electrónico inválido.");
        isValid = false;
      }
  
      if (!/^\d{10}$/.test(telefono.value)) {
        alerta(telefono, "Teléfono inválido. Debe tener 10 dígitos.");
        isValid = false;
      }
  
      if (mensaje.value.length < 15) {
        alerta(mensaje, "El mensaje debe tener al menos 15 caracteres.");
        isValid = false;
      }
  
      if (!isValid) return;
  
      console.log("Nombre:", nombre.value);
      console.log("Email:", email.value);
      console.log("Teléfono:", telefono.value);
      console.log("Mensaje:", mensaje.value);
  
      nombre.value = "";
      email.value = "";
      telefono.value = "";
      mensaje.value = "";
      nombre.focus();
    });
  
    function alerta(input, mensaje) {
      const alerta = document.createElement("div");
      alerta.textContent = mensaje;
      alerta.style.color = "red";
      alerta.style.marginBottom = "4px";
      alerta.classList.add("alerta");
      input.style.border = "2px solid red";
      input.parentNode.insertBefore(alerta, input);
    }
  
    function limpiarAlertas() {
      const alertas = document.querySelectorAll(".alerta");
      alertas.forEach(a => a.remove());
      [nombre, email, telefono, mensaje].forEach(input => {
        input.style.border = "";
      });
    }
  });
  