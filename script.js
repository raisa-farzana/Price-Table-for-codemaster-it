function selectPlan(plan) {
    alert(`You selected the ${plan.charAt(0).toUpperCase() + plan.slice(1)} plan! We'll be in touch soon to discuss your project.`);
}

// Add smooth scroll animations
const cards = document.querySelectorAll('.pricing-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});