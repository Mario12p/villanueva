function comprar(producto) {
  // 👉 coloca tu número de WhatsApp en formato internacional sin espacios ni signos
  const numero = "573004848985"; // Ejemplo: 57 (Colombia) + tu número

  // Enlace de WhatsApp
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  
  // Abrir WhatsApp en nueva pestaña
  window.open(url, "_blank");
}
