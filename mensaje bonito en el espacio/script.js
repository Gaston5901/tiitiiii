document.addEventListener('DOMContentLoaded', () => {
    const animationContainer = document.querySelector('.heart-animation');
    const body = document.body;
    const countdownElement = document.getElementById('countdown');
    const phraseElement = document.querySelector('.phrase');

    // Función para crear y animar corazones
    const createHeart = () => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 4 + 4}s`;
        
        animationContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    };

    setInterval(createHeart, 600);

    // Función para crear la animación de fuegos artificiales
    const createFireworks = () => {
        const fireworkCount = 10;
        for (let i = 0; i < fireworkCount; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.left = `${Math.random() * 100}vw`;
            firework.style.top = `${Math.random() * 100}vh`;
            firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
            firework.style.animationDelay = `${Math.random()}s`;
            
            body.appendChild(firework);
            
            firework.onanimationend = () => {
                firework.remove();
            };
        }
    };

    // Lógica del contador
    let count = 3;
    
    // Mostramos el contador
    countdownElement.classList.remove('hidden');

    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            countdownElement.textContent = count;
        } else {
            clearInterval(countdownInterval);
            countdownElement.style.display = 'none';

            // Cambiamos la frase
            phraseElement.textContent = 'Te quiero mucho<33';

            // Iniciamos la animación de fuegos artificiales
            setInterval(createFireworks, 2000);
        }
    }, 1000);
});