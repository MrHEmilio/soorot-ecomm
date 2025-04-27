export function insertarNavbar(){
    const nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg bg-body-tertiary";
    nav.innerHTML = `
        <div class="container-fluid">
            <span class="navbar-logo-img">
                <a class="navbar-logo" href="index.html">
                    <img src="/assets/logo-soorot.svg" alt="Logo Soorot" id="logoSoorot">
                </a>    
            </span>
            <span class="navbar-logo-str">
                <a class="navbar-brand" id="logoString" href="index.html">
                    <span id="soorot-text-logo">Soorot</span>
                </a>
            </span>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="acercade.html">Acerca de nosotros</a>
                    </li>
                </ul>
                <div class="buttons-navbar">
                    <a href="contactanos.html"><button type="button" class="btn btn-outline-success">Contáctanos</button></a>
                    <button type="button" class="btn btn-success">Ingresa</button>
                </div>  
            </div>
        </div>
    `;
    document.body.prepend(nav);
}
