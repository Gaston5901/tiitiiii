function showEnvelope() {
    const rosaContainer = document.getElementById('rosa-container');
    const envelopeContainer = document.getElementById('envelope-container');
    const body = document.body;

    // Cambia el fondo del cuerpo a blanco/rosa suave
    body.style.backgroundColor = '#f0e6f6';

    // Oculta la rosa con una transición suave
    rosaContainer.style.opacity = '0';
    rosaContainer.style.visibility = 'hidden';

    // Muestra el sobre con una transición suave
    envelopeContainer.style.visibility = 'visible';
    envelopeContainer.style.opacity = '1';
}

function openEnvelope() {
    const envelopeContainer = document.getElementById('envelope-container');
    const fullLetter = document.getElementById('full-letter');
    const messageOverlay = document.querySelector('.message-overlay');

    if (!envelopeContainer.classList.contains('open')) {
        messageOverlay.style.opacity = '0';
        envelopeContainer.classList.add('open');

        // Usa setTimeout para dar tiempo a la animación de la solapa
        setTimeout(() => {
            // Oculta el sobre y muestra la carta con una transición suave
            envelopeContainer.style.opacity = '0';
            envelopeContainer.style.visibility = 'hidden';
            
            fullLetter.style.visibility = 'visible';
            fullLetter.style.opacity = '1';
        }, 1000);
    }
}

// Nueva función para volver a la rosa
function returnToRosa() {
    const rosaContainer = document.getElementById('rosa-container');
    const fullLetter = document.getElementById('full-letter');
    const body = document.body;

    // Cambia el fondo de vuelta al de la rosa
    body.style.backgroundColor = '#0c0f1e';

    // Oculta la carta con una transición suave
    fullLetter.style.opacity = '0';
    fullLetter.style.visibility = 'hidden';

    // Muestra el contenedor de la rosa con una transición suave
    rosaContainer.style.visibility = 'visible';
    rosaContainer.style.opacity = '1';
}