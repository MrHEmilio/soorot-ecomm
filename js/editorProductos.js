//** INICIO DE BLOQUE DE CÓDIGO PARA CLOUDIFY */

// Declaraciones para Cloudify dependen de quien haya hecho el signup en la plataforma

const cloudName = "deb2blqxi"; // replace with your own cloud name
const uploadPreset = "Soorot"; // replace with your own upload preset

//Crea e inicializa el widget en memoria
var myWidget = cloudinary.createUploadWidget({
  cloudName: cloudName,
  uploadPreset: uploadPreset, 
  //Asignación de estilos
  styles: {
    palette: {
      window: "#1A4A36",
      windowBorder: "#232E26",
      tabIcon: "#D9EFDE",
      menuIcons: "#232E26",
      textDark: "#232E26",
      textLight: "#D9EFDE",
      link:  "#F8F4FF",
      action:  "#677D6A",
      inactiveTabIcon: "#D6BD98",
      error: "#F44235",
      inProgress: "#0078FF",
      complete: "#20B832",
      sourceBg: "#E4EBF1"
    },
    frame: {
      background: "#677D6A"
    },
    fonts: {
        "'Lato', regular": "https://fonts.googleapis.com/css2?family=Lato",
    }
  }
}, (error, result) => { 
  if (!error && result && result.event === "success") { 
    console.log('Hecho! Aqui esta la información del archivo subido: ', result.info); 
  }
});

// Abre el widget al hacer clic
document.getElementById("upload_widget").addEventListener("click", function () {
  myWidget.open();
}, false);

//** FINAL DE BLOQUE DE CÓDIGO PARA CLOUDIFY */