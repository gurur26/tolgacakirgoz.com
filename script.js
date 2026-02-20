document.addEventListener('DOMContentLoaded', () => {
    // 1. Slider
    const track = document.querySelector('.slider-track');
    if (track) {
        const items = Array.from(track.children);
        items.forEach(item => { const clone = item.cloneNode(true); track.appendChild(clone); });
    }

    // 2. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });

    // 3. Form Gönderim
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            btn.innerHTML = 'Gönderildi!';
            btn.style.background = '#10b981';
            form.reset();
            setTimeout(() => { btn.innerHTML = 'Gönder'; btn.style.background = ''; }, 3000);
        });
    }
});