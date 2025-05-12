const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const entrar = document.getElementById("entrar");



 // Función para validación
entrar.addEventListener("click", function checkInput(event) {
    const usuarioCheck = usuario.value.trim();
    const passwordCheck = password.value.trim();

// Mostrar mensaje de alerta si falta algún campo
    if (!usuarioCheck || !passwordCheck) {
        Swal.fire("Por favor llena todos los campos correctamente.");
        return;
    }

});

