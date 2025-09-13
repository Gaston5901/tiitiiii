document.addEventListener('DOMContentLoaded', () => {
    const btnContinuar = document.getElementById('btn-continuar');
    const containerInicio = document.querySelector('.container-inicio');
    const containerFlor = document.querySelector('.container-flor');
    const petalos = document.querySelectorAll('.petalo');
    const mensajePetalo = document.getElementById('mensaje-petalo');
    const cancion = document.getElementById('cancion');

    // Reproduce la canción
    cancion.play().catch(error => {
        console.log('La reproducción automática fue bloqueada por el navegador. El usuario debe interactuar para que suene la música.');
    });

    // Evento del botón "Continuar"
    btnContinuar.addEventListener('click', () => {
        containerInicio.classList.add('hidden');
        containerFlor.classList.remove('hidden');
    });

    // Evento de cada pétalo
    petalos.forEach(petalo => {
        petalo.addEventListener('click', () => {
            if (!petalo.classList.contains('eliminado')) {
                const frase = petalo.getAttribute('data-frase');
                mensajePetalo.textContent = frase;
                petalo.classList.add('eliminado');
            }
        });
    });
});