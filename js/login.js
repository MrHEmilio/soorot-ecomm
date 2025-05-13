const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const entrar = document.getElementById("entrar");

 // Función para validación
entrar.addEventListener("click", function checkInput(event) {
    event.preventDefault();

    const usuarioCheck = usuario.value.trim();
    const passwordCheck = password.value.trim();

// Mostrar mensaje de alerta si falta algún campo
    if (!usuarioCheck || !passwordCheck) {
        Swal.fire("Por favor llena todos los campos correctamente.");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const usuarioValid = usuarios.find(user=>user.email===usuarioCheck && user.password===passwordCheck);

    if (usuarioValid) {
        Swal.fire("¡Te damos la bienvenida!")
        window.location.href="index.html";
        localStorage.setItem("usuarioActivo", usuarioValid.email);
   
    } else {
        Swal.fire("El usuario o la contraseña son incorrectos.");
        return;
    }
     
});

// 

