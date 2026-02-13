function iniciarExperiencia() {
    document.getElementById('inicio').classList.add('hidden');
    document.getElementById('escena-carta').classList.remove('hidden');
    document.getElementById('musica').play();
    lanzarConfeti();
}

function abrirSobre() {
    document.querySelector('.envelope-wrapper').classList.toggle('open');
}

function lanzarConfeti() {
    for (let i = 0; i < 50; i++) {
        const corazon = document.createElement('div');
        corazon.innerHTML = '❤️';
        corazon.className = 'particula';
        corazon.style.left = Math.random() * 100 + 'vw';
        corazon.style.animationDuration = (Math.random() * 3 + 2) + 's';
        corazon.style.opacity = Math.random();
        corazon.style.fontSize = Math.random() * 20 + 10 + 'px';
        document.body.appendChild(corazon);
    }
}