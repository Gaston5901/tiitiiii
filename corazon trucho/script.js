document.addEventListener('DOMContentLoaded', () => {

    const message = "Mi universo es un lugar mucho más hermoso desde que tú estás en él.";
    const messageElement = document.getElementById('message-text');

    function typeMessage(element, text, speed) {
        let i = 0;
        element.style.opacity = 1;
        const typing = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                element.style.borderRight = 'none';
            }
        }, speed);
    }

    function createStars() {
        const starContainer = document.getElementById('stars');
        const starCount = 300;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            const size = Math.random() * 3 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            starContainer.appendChild(star);
        }
    }

    // Nueva función para las partículas del corazón
    function createHeartParticles() {
        const particleContainer = document.getElementById('heart-particles');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            // Posiciones aleatorias para la animación
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 100 + 50;
            particle.style.setProperty('--dx', `${distance * Math.cos(angle)}px`);
            particle.style.setProperty('--dy', `${distance * Math.sin(angle)}px`);

            particleContainer.appendChild(particle);
        }
    }

    setTimeout(() => {
        typeMessage(messageElement, message, 50);
        createHeartParticles(); // Llama a la nueva función
    }, 3500);

    function createShootingStar() {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = `${Math.random() * 100}vw`;
        shootingStar.style.top = `${Math.random() * 50}vh`;
        document.getElementById('shooting-stars').appendChild(shootingStar);

        setTimeout(() => {
            shootingStar.remove();
        }, 5000);
    }

    setInterval(createShootingStar, 5000 + Math.random() * 5000);
    createStars();
});