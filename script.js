// ========== Navigation Active Link Management ==========
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === '#home' && currentPage === '/') {
            link.classList.add('active');
        }
    });

    // Update active link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Handle nav link click
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// ========== Smooth Scrolling ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ========== Button Scale Animation ==========
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (e.target.closest('.carousel-btn') || e.target.closest('.cta-btn')) {
            return;
        }
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// ========== Testimonial Carousel ==========
let currentTestimonialPage = 0;
const testimonialsPerPage = 3;

function updateTestimonials() {
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card, index) => {
        if (index >= currentTestimonialPage * testimonialsPerPage &&
            index < (currentTestimonialPage + 1) * testimonialsPerPage) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(document.querySelectorAll('.testimonial-card').length / testimonialsPerPage);
        currentTestimonialPage = (currentTestimonialPage - 1 + totalPages) % totalPages;
        updateTestimonials();
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(document.querySelectorAll('.testimonial-card').length / testimonialsPerPage);
        currentTestimonialPage = (currentTestimonialPage + 1) % totalPages;
        updateTestimonials();
    });
}

updateTestimonials();

// ========== Scroll-Triggered Animations ==========
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .process-step, .testimonial-card').forEach(element => {
    observer.observe(element);
});

// ========== Navigation Shadow on Scroll ==========
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.style.boxShadow = '0 0 25px rgba(0, 212, 255, 0.2)';
    } else {
        nav.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.1)';
    }
});

// ========== CTA Button Handler ==========
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = 'Processing...';
        setTimeout(() => {
            this.textContent = originalText;
        }, 1000);
    });
}

// ========== Service Card Hover ==========
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========== Mobile Menu Setup (Placeholder) ==========
function setupMobileMenu() {
    // Placeholder for mobile menu functionality
    // Can be expanded with hamburger menu implementation
}

setupMobileMenu();
