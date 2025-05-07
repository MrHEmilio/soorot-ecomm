//Validacion de datos con boton registrarse
//document.addEventListener("DOMContentLoaded", function () {  
    // Obtiene los elementos del formulario
const inputName = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("telefono");
const inputPassword = document.getElementById("password");
const inputPasswordC = document.getElementById("passwordC");
const inputCheck = document.getElementById("check");
const btnRegistrarse = document.getElementById("btnRegistrarse");
//const contactForm = document.getElementById("contactForm");

// Función para Validación 
function checkInput() {
const name = inputName.value.trim();
const email = inputEmail.value.trim();
const phone = inputPhone.value.trim();
const password = inputPassword.value.trim();
//const check = inputCheck.value();
const passwordC = inputPasswordC.value.trim();

// Mostrar mensaje de alerta si falta algun campo
if (!name || !email || !phone || !password || !passwordC) {
    Swal.fire("Por favor llena todos los campos correctamente.");
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

//Validacion de contraseña
const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
if(!regexPassword.test(password)){
    Swal.fire("La contraseña no es válida, mínimo tiene que tener 8 caracteres, una mayúscula, un caracter especial, un número.")
    return;
}

//Confirmar contraseña
if(password != passwordC){
    Swal.fire("La contraseña no coincide.")
    return;
}

// Si todo está bien, retornamos los valores en un objeto
return { name, email, phone, password, passwordC};
}

btnRegistrarse.addEventListener("click", function (event) {
event.preventDefault();

const inputData = checkInput();

// Si hubo errores de validación, no continuar
if (!inputData) return;


});

//}); // Event Listener DOM Content Loaded