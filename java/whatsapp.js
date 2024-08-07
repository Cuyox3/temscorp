document.querySelector("#whatsapp-icon").addEventListener("click", e => {
    e.preventDefault();

    let telefono = "+525585632112"; // Número de WhatsApp al que se enviarán los datos

    // Define el mensaje predefinido
    let mensaje = "Me gustaría pedir informes acerca del producto:";

    // Construye la URL para WhatsApp
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;


    // Abre la URL en una nueva ventana o pestaña
    window.open(url, '_blank');
});
