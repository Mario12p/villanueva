        function comprar(producto) {
            // Reemplaza este número con el tuyo en formato internacional sin espacios ni signos
            const numero = "573004848985"; 

            // Construir el mensaje con el nombre del producto
            const mensaje = `Hola, estoy interesado en el siguiente producto: ${producto}. ¿Está disponible? Quiero más información.`;
            
            // Construir el enlace de WhatsApp
            const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
            
            // Abrir WhatsApp en una nueva pestaña
            window.open(url, "_blank");
        }