function showEnvelope() {
    const rosaContainer = document.getElementById('rosa-container');
    const envelopeContainer = document.getElementById('envelope-container');
    const body = document.body;
    
    // Cambia el fondo del cuerpo a blanco/rosa suave
    body.style.backgroundColor = '#f0e6f6';

    // Inicia la transición de ocultar la rosa
    rosaContainer.style.opacity = '0';

    // Después de que la transición de la rosa haya terminado (1 segundo), cambia su visibilidad y muestra el sobre
    setTimeout(() => {
        rosaContainer.style.visibility = 'hidden';
        envelopeContainer.style.visibility = 'visible';
        envelopeContainer.style.opacity = '1';
    }, 1000);
}

function openEnvelope() {
    const envelopeContainer = document.getElementById('envelope-container');
    const fullLetter = document.getElementById('full-letter');
    const messageOverlay = document.querySelector('.message-overlay');

    if (!envelopeContainer.classList.contains('open')) {
        // Oculta el mensaje
        messageOverlay.style.opacity = '0';
        // Inicia la animación de la solapa
        envelopeContainer.classList.add('open');

        // Espera a que la animación de la solapa termine (0.5 segundos) para mostrar la carta
        setTimeout(() => {
            envelopeContainer.style.opacity = '0';
            envelopeContainer.style.visibility = 'hidden';
            
            fullLetter.style.visibility = 'visible';
            fullLetter.style.opacity = '1';
        }, 500); // El tiempo coincide con la transición de la solapa
    }
}

function returnToRosa() {
    const rosaContainer = document.getElementById('rosa-container');
    const fullLetter = document.getElementById('full-letter');
    const envelopeContainer = document.getElementById('envelope-container');
    const body = document.body;

    // Cambia el fondo de vuelta al de la rosa
    body.style.backgroundColor = '#0c0f1e';

    // Oculta la carta con una transición suave
    fullLetter.style.opacity = '0';

    // Después de que la transición de la carta haya terminado, cambia su visibilidad
    setTimeout(() => {
        fullLetter.style.visibility = 'hidden';
        
        // Restablece el estado del sobre para que esté listo para la próxima vez
        envelopeContainer.classList.remove('open');
        envelopeContainer.style.opacity = '0';
        envelopeContainer.style.visibility = 'hidden';
        
        // Muestra el contenedor de la rosa
        rosaContainer.style.visibility = 'visible';
        rosaContainer.style.opacity = '1';
    }, 1000); // El tiempo coincide con la transición de la carta
}