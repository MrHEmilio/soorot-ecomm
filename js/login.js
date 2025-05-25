document.addEventListener("DOMContentLoaded", () => {

const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const entrar = document.getElementById("entrar");
const divBotones = document.querySelector("#div-logs");


function botonesLogout(user){
                    divBotones.innerHTML = `
                    <a href="#"><button type="button" class="btn btn-outline-success" style="border: none;">Hola, ${localStorage.getItem("usuarioActivo")}</button></a>
                    <a href="contactanos.html"><button type="button" class="btn btn-outline-success">Contáctanos</button></a>
                    `;
                
        };

if (localStorage.getItem("usuarioActivo")){
    botonesLogout();
    entrar.innerText = `Cerrar Sesión`;
    entrar.addEventListener("click", function(){
         localStorage.removeItem("usuarioActivo");
         location.reload();
    
        });
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
        botonesLogout();
    } else {
        Swal.fire("El usuario o la contraseña son incorrectos.");
        return;
    }
     
});

}// if else el usuario está activo




// 
});// Este DOMCotnentLoaded es para darle tiempo a la navbar de cargar.