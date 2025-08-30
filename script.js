

// Efeitos interativos
document.addEventListener('DOMContentLoaded', function() {
    const messageCard = document.querySelector('.message-card');
    const mainMessage = document.querySelector('.main-message');
    const music = document.getElementById('background-music');
    const musicButton = document.querySelector('.music-button');
    
    // Efeito de digitação na mensagem principal
    typeWriter(mainMessage, mainMessage.textContent, 0, 50);
    
    // Efeito de hover no card
    messageCard.addEventListener('mouseenter', () => {
        messageCard.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    messageCard.addEventListener('mouseleave', () => {
        messageCard.style.transform = 'translateY(0) scale(1)';
    });
    
    // Efeito de clique no card
    messageCard.addEventListener('click', () => {
        messageCard.style.transform = 'scale(0.98)';
        setTimeout(() => {
            messageCard.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Adicionar mais corações ao clicar
    messageCard.addEventListener('click', addFloatingHeart);

    // Iniciar música pausada com som desligado
    music.volume = 0.3;
    music.pause();
    musicButton.textContent = '🔇';
});

// Função para alternar mute/desmute da música
function toggleMusic() {
    const music = document.getElementById('background-music');
    const button = document.querySelector('.music-button');
    if (music.paused) {
        music.play();
        button.textContent = '🔊';
    } else {
        music.pause();
        button.textContent = '🔇';
    }
}

// Efeito de máquina de escrever
function typeWriter(element, text, i, speed) {
    if (i < text.length) {
        element.textContent = text.substring(0, i + 1);
        setTimeout(() => typeWriter(element, text, i + 1, speed), speed);
    }
}

// Adicionar corações flutuantes
function addFloatingHeart(event) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = event.clientX + 'px';
    heart.style.top = event.clientY + 'px';
    heart.style.fontSize = '2rem';
    heart.style.opacity = '0.7';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'float-heart 3s ease-in-out forwards';
    
    document.querySelector('.floating-hearts').appendChild(heart);
    
    // Remover após a animação
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Efeito de parallax suave
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const messageCard = document.querySelector('.message-card');
    const rate = scrolled * -0.1;
    messageCard.style.transform = `translateY(${rate}px)`;
});

// Keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        document.querySelector('.share-button').click();
    }
});

// Touch events para mobile
let touchStartY = 0;

document.addEventListener('touchstart', (event) => {
    touchStartY = event.touches[0].clientY;
});

document.addEventListener('touchend', (event) => {
    const touchEndY = event.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    
    if (diff > 50) {
        // Swipe para cima - adicionar coração
        addFloatingHeart({
            clientX: window.innerWidth / 2,
            clientY: window.innerHeight / 2
        });
    }
});

// Carregamento suave
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease-in';
});

// Prevenir comportamento padrão de toque
document.addEventListener('touchmove', (event) => {
    if (event.scale !== 1) {
        event.preventDefault();
    }
}, { passive: false });

// Service Worker para PWA (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics simples (opcional)
function trackEvent(eventName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName);
    }
    console.log('Event tracked:', eventName);
}

// Inicializar analytics no compartilhamento
document.querySelector('.share-button').addEventListener('click', () => {
    trackEvent('share_button_click');
});
