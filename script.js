// ============================================
// BOOKING CONFIGURATION
// Update this URL with your Cal.com booking link
// Leave empty to use email fallback
// ============================================
const BOOKING_URL = 'https://cal.com/voxa/voxa-intro'; // Cal.com booking URL
const FALLBACK_EMAIL = 'albert@voxa.dk';
const FALLBACK_SUBJECT = 'Book opstarts-møde';

// Lightweight traffic tracking (CountAPI)
const TRACKING_ENABLED = true;
const TRACKING_NAMESPACE = 'voxa_dk';

function trackVisit() {
    if (!TRACKING_ENABLED) return;

    const endpoint = `https://api.countapi.xyz/hit/${TRACKING_NAMESPACE}/visits_total`;
    fetch(endpoint, { method: 'GET', mode: 'cors', cache: 'no-store' }).catch(() => {});
}

// Initialize booking links
function initBookingLinks() {
    const bookingButtons = document.querySelectorAll('[data-booking]');

    bookingButtons.forEach(btn => {
        if (BOOKING_URL) {
            btn.href = BOOKING_URL;
            btn.target = '_blank';
            btn.rel = 'noopener noreferrer';
        } else {
            // Fallback to email
            btn.href = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(FALLBACK_SUBJECT)}`;
        }
    });
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all items and reset aria-expanded
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Add animation on scroll (respect reduced motion preference)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.bullet, .use-case, .step, .who-card, .trust-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// Initialize tracking + booking links on page load
trackVisit();
initBookingLinks();
