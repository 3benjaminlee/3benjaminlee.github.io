document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality removed since header is gone
    

    // Smooth scroll for navigation links - only if they exist
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    if (anchorLinks.length > 0) {
        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections for fade-in animation - only if they exist
    const sections = document.querySelectorAll('section');
    if (sections.length > 0) {
        sections.forEach(section => {
            observer.observe(section);
        });

        // Trigger initial animations
        setTimeout(() => {
            sections.forEach(section => {
                section.classList.add('fade-in');
            });
        }, 100);
    }
}); 
