function showEnvelope() {
    const rosaContainer = document.getElementById('rosa-container');
    const envelopeContainer = document.getElementById('envelope-container');
    const body = document.body;

    body.style.backgroundColor = '#f0e6f6';

    // Oculta la rosa con una transición suave
    rosaContainer.style.opacity = '0';
    rosaContainer.style.visibility = 'hidden';

    // Muestra el sobre
    envelopeContainer.style.visibility = 'visible';
    envelopeContainer.style.opacity = '1';
    envelopeContainer.classList.remove('hidden'); // Aseguramos que la clase se elimine
}

function openEnvelope() {
    const envelopeContainer = document.getElementById('envelope-container');
    const fullLetter = document.getElementById('full-letter');
    const messageOverlay = document.querySelector('.message-overlay');

    if (!envelopeContainer.classList.contains('open')) {
        messageOverlay.style.opacity = '0';
        envelopeContainer.classList.add('open');

        setTimeout(() => {
            // Usa visibilidad y opacidad para la transición
            envelopeContainer.style.opacity = '0';
            envelopeContainer.style.visibility = 'hidden';
            
            fullLetter.style.visibility = 'visible';
            fullLetter.style.opacity = '1';
            fullLetter.style.display = 'flex'; // Asegura que la carta se muestre
        }, 1000);
    }
}

function returnToRosa() {
    const rosaContainer = document.getElementById('rosa-container');
    const fullLetter = document.getElementById('full-letter');
    const envelopeContainer = document.getElementById('envelope-container'); // Obtener el elemento

    const body = document.body;

    // Cambia el fondo de vuelta al de la rosa
    body.style.backgroundColor = '#0c0f1e';

    // Oculta la carta con transiciones suaves
    fullLetter.style.display = 'none';
    fullLetter.style.visibility = 'hidden';
    
    // Vuelve a poner el sobre en su estado inicial, listo para la siguiente animación
    envelopeContainer.classList.remove('open');
    envelopeContainer.style.opacity = '0';
    envelopeContainer.style.visibility = 'hidden';
    envelopeContainer.classList.add('hidden');

    // Muestra el contenedor de la rosa
    rosaContainer.style.visibility = 'visible';
    rosaContainer.style.opacity = '1';
    rosaContainer.classList.remove('hidden');
}