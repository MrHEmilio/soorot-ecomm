//Cargar el archivo HTML
fetch('footer.html')
    .then(response => response.text("Exitoso"))
    .then(html => {
        //Crear un elemento temporal para contener el HTML cargado 
        var temporal = document.createElement('footer');
        temporal.innerHTML = html;

        //Obtenemos el elemento nav
        var nav = temporal.querySelector('footer');

        //agregamos al documento
        var contenedor = document.getElementById('contenedor');
        contenedor.insertBefore(nav, contenedor.firstChild);
    });