function openEnvelope() {
    const envelopeContainer = document.querySelector('.envelope-container');
    const fullLetter = document.getElementById('full-letter');
    const messageOverlay = document.querySelector('.message-overlay');
    
    // Solo si no está abierto
    if (!envelopeContainer.classList.contains('open')) {
        // Ocultamos el mensaje de "Toca para abrir"
        messageOverlay.style.opacity = '0';
        
        // Añadimos la clase para la animación de rotura
        envelopeContainer.classList.add('open');

        // Esperamos un momento para que termine la animación del corazón
        setTimeout(() => {
            // Quitamos el sobre de la pantalla
            envelopeContainer.style.display = 'none';
            // Mostramos la carta a pantalla completa y la hacemos visible
            fullLetter.style.visibility = 'visible';
            fullLetter.style.display = 'flex';
        }, 1000); // 1000ms = 1 segundo, lo que dura la animación del corazón
    }
}