// ===========================
// SMOOTH SCROLL NAVIGATION
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// MOBILE MENU TOGGLE (Futuro)
// ===========================
// Código preparado para futura implementação de menu hambúrguer

// ===========================
// SCROLL REVEAL ANIMATIONS (Opcional)
// ===========================
// Código preparado para adicionar animações ao rolar a página