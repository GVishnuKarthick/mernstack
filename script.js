window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loading-screen').style.display = 'none';
        }, 500);
    }, 2000);
});

// GSAP Animations

document.addEventListener('DOMContentLoaded', () => {
   
    gsap.to('.hero h1', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 2.2
    });

    gsap.to('.hero p', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 2.4
    });

    gsap.to('.cta-button', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 2.6
    });

    
    gsap.to('.project-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.projects',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        }
    });

   
    gsap.to('.skill-icon', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.skills',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        }
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});