// ============================================
// JSUN - Main Application Logic
// ============================================

// DOM Elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const consultationModal = document.getElementById('consultation-modal');
const closeModalBtn = document.getElementById('close-modal');
const consultationBtnDesktop = document.getElementById('btn-consultation-desktop');
const consultationBtnMobile = document.getElementById('btn-consultation-mobile');
const heroForm = document.getElementById('hero-form');
const contactForm = document.getElementById('contact-form');
const paymentForm = document.getElementById('payment-form');
const successToast = document.getElementById('success-toast');

// ============================================
// NAVIGATION / ROUTER
// ============================================

function navigateTo(pageId) {
    // Hide all view sections
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show target section
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.remove('hidden');
    }

    // Close mobile menu if open
    closeMobileMenu();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update active nav link (optional visual feedback)
    updateActiveNavLink(pageId);
}

function updateActiveNavLink(pageId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-primary', 'font-bold');
        link.classList.add('text-medium');
    });
}

// ============================================
// MOBILE MENU
// ============================================

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
    
    // Toggle hamburger icon
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('ph-x');
        icon.classList.add('ph-list');
    } else {
        icon.classList.remove('ph-list');
        icon.classList.add('ph-x');
    }
}

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.remove('ph-x');
    icon.classList.add('ph-list');
}

// Mobile Menu Event Listener
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// ============================================
// CONSULTATION MODAL
// ============================================

function openConsultationModal() {
    consultationModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeConsultationModal() {
    consultationModal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scroll
}

// Modal Event Listeners
if (consultationBtnDesktop) {
    consultationBtnDesktop.addEventListener('click', openConsultationModal);
}

if (consultationBtnMobile) {
    consultationBtnMobile.addEventListener('click', () => {
        closeMobileMenu();
        openConsultationModal();
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeConsultationModal);
}

// Close modal on backdrop click
if (consultationModal) {
    consultationModal.addEventListener('click', (e) => {
        if (e.target === consultationModal) {
            closeConsultationModal();
        }
    });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeConsultationModal();
    }
});

// ============================================
// FORM HANDLING
// ============================================

// Hero Form Submit
if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Demande envoyée! Nous vous contacterons dans 24h.');
        heroForm.reset();
    });
}

// Contact Form Submit
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Message envoyé avec succès!');
        contactForm.reset();
    });
}

// Payment Form Submit (Demo)
if (paymentForm) {
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate payment processing
        const btn = paymentForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="ph ph-spinner animate-spin mr-2"></i>Traitement...';
        btn.disabled = true;

        setTimeout(() => {
            closeConsultationModal();
            showToast('Paiement simulé réussi! (Mode Démo)');
            paymentForm.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 2000);
    });
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(message, duration = 4000) {
    const toastMessage = document.getElementById('toast-message');
    if (toastMessage) {
        toastMessage.textContent = message;
    }
    
    successToast.classList.remove('hidden');
    successToast.classList.add('animate-slide-in');

    setTimeout(() => {
        successToast.classList.add('hidden');
        successToast.classList.remove('animate-slide-in');
    }, duration);
}

// ============================================
// SCROLL EFFECTS
// ============================================

// Navbar shadow on scroll
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

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

// ============================================
// LAZY LOADING IMAGES
// ============================================

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// INITIALIZE APP
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Ensure home view is visible by default
    navigateTo('home-view');
    
    // Initialize lazy loading
    lazyLoadImages();

    console.log('🚀 JSUN App Initialized');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('fr-TN', {
        style: 'currency',
        currency: 'TND',
        minimumFractionDigits: 0
    }).format(amount);
}

// Validate email format
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validate phone format (Tunisia)
function isValidPhone(phone) {
    const regex = /^(\+216)?[0-9]{8}$/;
    return regex.test(phone.replace(/\s/g, ''));
}
