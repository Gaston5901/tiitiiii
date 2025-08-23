function showEnvelope() {
    const rosaContainer = document.getElementById('rosa-container');
    const envelopeContainer = document.getElementById('envelope-container');
    const body = document.body;

    body.style.backgroundColor = '#f0e6f6';

    rosaContainer.classList.add('hidden');
    rosaContainer.style.opacity = '0';

    envelopeContainer.classList.remove('hidden');
    setTimeout(() => {
        envelopeContainer.style.opacity = '1';
    }, 10);
}

function openEnvelope() {
    const envelopeContainer = document.getElementById('envelope-container');
    const fullLetter = document.getElementById('full-letter');
    const messageOverlay = document.querySelector('.message-overlay');

    if (!envelopeContainer.classList.contains('open')) {
        messageOverlay.style.opacity = '0';
        envelopeContainer.classList.add('open');

        setTimeout(() => {
            envelopeContainer.style.display = 'none';
            fullLetter.style.visibility = 'visible';
            fullLetter.style.display = 'flex';
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

    // Oculta la carta y el sobre
    fullLetter.style.display = 'none';
    fullLetter.style.visibility = 'hidden';
    document.getElementById('envelope-container').classList.add('hidden');

    // Muestra el contenedor de la rosa
    rosaContainer.classList.remove('hidden');
    setTimeout(() => {
        rosaContainer.style.opacity = '1';
    }, 10);
}