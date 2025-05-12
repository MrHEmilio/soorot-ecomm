// Escucha el evento 'submit' del formulario de inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    // Previene el comportamiento por defecto del formulario (recargar la página)
    event.preventDefault();

    // Obtiene el valor del campo de nombre de usuario
    const username = document.getElementById('username').value;
    // Obtiene el valor del campo de contraseña
    const password = document.getElementById('password').value;

    // Verifica si las credenciales coinciden con las esperadas
    if (username === 'admin' && password === 'password123') {
        // Muestra un mensaje de éxito si las credenciales son correctas
        alert('Login successful!');
        // Aquí puedes redirigir a otra página o realizar otras acciones
    } else {
        // Muestra un mensaje de error si las credenciales son incorrectas
        alert('Invalid username or password.');
    }
});
