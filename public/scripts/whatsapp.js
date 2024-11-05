document.querySelectorAll(".whatsapp-icon").forEach(button => {
    button.addEventListener("click", e => {
        e.preventDefault();

        let telefono = "+525585632112"; // Número de WhatsApp al que se enviarán los datos

        // Obtén el valor del atributo "data-producto" del botón clickeado
        let producto = button.getAttribute("data-producto");

        // Encuentra el input dentro del mismo formulario y obtiene el valor de la cantidad
        let cantidad = button.closest("form").querySelector("input[type='number']").value;

        // Verifica si "producto" tiene un valor y construye el mensaje
        let mensaje = "Me gustaría cotizar ";

        if (producto && producto.trim()) {
            // Verifica el producto y cambia el texto según la cantidad 
            if (producto.toLowerCase() === "cama de hospital") {
                mensaje += cantidad > 1 ? `${cantidad} camas de hospital` : `${cantidad} cama de hospital`;
            } else if (producto.toLowerCase() === "silla de ruedas") {
                mensaje += cantidad > 1 ? `${cantidad} sillas de ruedas` : `${cantidad} silla de ruedas`;
            } else if (producto.toLowerCase() === "generador de ozono") {
                mensaje += cantidad > 1 ? `${cantidad} generadores de ozono` : `${cantidad} generador de ozono`;
            } else if (producto.toLowerCase() === "tanque de oxigeno") {
                mensaje += cantidad > 1 ? `${cantidad} tanque de oxigeno` : `${cantidad} tanque de oxigeno`;
            } else {
                mensaje += `${cantidad} ${producto}`;
            }
        } else {
            mensaje = "Me gustaría pedir informes."; // Mensaje genérico si no hay producto
        }

        // Construye la URL para WhatsApp
        let url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;

        // Abre la URL en una nueva ventana o pestaña
        window.open(url, '_blank');
    });
});
