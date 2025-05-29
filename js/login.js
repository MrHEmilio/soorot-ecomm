document.addEventListener("DOMContentLoaded", () => {

const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const entrar = document.getElementById("entrar");
const formDis = document.querySelector(".formulario-desactivado");


if (localStorage.getItem("usuarioActivo")){
    entrar.innerText = `Cerrar Sesión`;
    entrar.addEventListener("click", function(){
         localStorage.removeItem("usuarioActivo");
         location.reload();
    
        });
    formDis.innerHTML = `
        <p class="header-contact header-contact4">
            Esperamos que vuelvas pronto
        </p>
        `;
}else {

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

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioValid = usuarios.find(user=>user.email===usuarioCheck && user.password===passwordCheck);

    if (usuarioValid) {
        Swal.fire("¡Te damos la bienvenida!",
            "Serás redirigido a la página principal en breve."
        ).then(() => {
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        })
        localStorage.setItem("usuarioActivo", usuarioValid.email);
    } else {
        Swal.fire("El usuario o la contraseña son incorrectos.");
        return;
    }
     
});

}// if else el usuario está activo




// 
});// Este DOMCotnentLoaded es para darle tiempo a la navbar de cargar.