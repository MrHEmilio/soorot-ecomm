/**
 *  ========== Validación de Datos con Botón "Enviar" ==========
 */ // FALTA NOMBRAR LOS PROBLEMAS DE CADA VALIDACIÓN DE CAMPOS

document.addEventListener("DOMContentLoaded", function () {  
    // Obtiene los elementos del formulario
    const inputName = document.getElementById("nombre");
    const inputEmail = document.getElementById("email");
    const inputPhone = document.getElementById("telefono");
    const inputMessage = document.getElementById("mensaje");
    const btnEnviar = document.getElementById("btnEnviar");
    const contactForm = document.getElementById("contactForm");
  
    // Inicializar EMAIL JS para Enviar Datos de Inputs
    emailjs.init("tCk0Yz0O6OB4wkfGp");

    // Funcion para enviar Email con emailjs
    function sendEmail(name, email, phone, message) {
      emailjs.send("service_p80rvz4", "template_8vpq9g9", {
          nombre_usuario: name,
          correo_usuario: email,
          telefono_usuario: phone,
          mensaje_usuario: message,
      })
      .then(function(response) {
          // Sweet Alert 
          document.activeElement.blur();
          Swal.fire({
              icon: "success",
              title: "Correo enviado",
              text: "Tu mensaje fue enviado con éxito.",
          });
          // Se reinician los campos
          inputName.value = ""
          inputEmail.value = ""
          inputPhone.value = ""
          inputMessage.value = ""
          // inputName.focus();  **No estoy logrando quitar el error aria-hidden = "true" si lo dejo en focus al name
      }, 
      function (error) {
          // Sweet Alert
          document.activeElement.blur();
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Hubo un error al enviar tu mensaje. Intenta de nuevo más tarde.",
          });
      });    
  } // Función sendEmail

  // Función para Validación 
  function checkInput() {
    const name = inputName.value.trim();
    const email = inputEmail.value.trim();
    const phone = inputPhone.value.trim();
    const message = inputMessage.value.trim();

    // Mostrar mensaje de alerta si falta algun campo
    if (!name || !email || !phone || !message) {
      Swal.fire("Por favor llena todos los campos correctamente.")
      return;
    }
    // Validar nombre (mínimo 3 caracteres)
    if (name.length < 3) {
        Swal.fire("Nombre inválido", "Introduce mínimo 3 caracteres.");
        return;
    }

    // Validar correo electrónico
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        Swal.fire("Correo inválido", "Ingresa un correo electrónico válido: ejemplo@dominio.com ");
        return;
    }

    // Limpiar número telefónico de espacios, guiones y paréntesis
    const cleanPhone = phone.replace(/[\s-()]/g, "");

    // Validación compuesta, mas de 10 digitos, no empieza con 0, sin números iguales, sin secuencias 
    if (
    !/^[1-9]\d{9}$/.test(cleanPhone) || // No tiene 10 dígitos o empieza con 0
    /^(\d)\1{9}$/.test(cleanPhone) ||   // Todos los dígitos son iguales
    /0123456789|1234567890|9876543210|0987654321/.test(cleanPhone) // Secuencias conocidas
    ) {
    Swal.fire(
        "Teléfono inválido",
        "Debe tener 10 dígitos, no comenzar con 0, y no ser repetitivo o secuencial."
    );
    return;
    }


    // Validar mensaje mínimo 15 caracteres
    if (message.length < 15) {
        Swal.fire("Mensaje muy corto", "El mensaje debe tener al menos 15 caracteres.");
        return;
    }

    // Si todo está bien, retornamos los valores en un objeto
    return { name, email, phone, message };
  }

  btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    const inputData = checkInput();

    // Si hubo errores de validación, no continuar
    if (!inputData) return;

    // Llamar a sendEmail con los datos validados
    sendEmail(inputData.name, inputData.email, inputData.phone, inputData.message);
  });

}); // Event Listener DOM Content Loaded


  