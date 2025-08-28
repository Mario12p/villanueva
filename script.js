function comprar(producto) {
    const numero = "573004848985"; // Tu número en formato internacional
    const mensaje = `Hola 👋 ${producto}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}
