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
    if (!mobileMenu || !mobileMenuBtn) return;

    mobileMenu.classList.toggle('hidden');
    
    // Toggle hamburger icon
    const icon = mobileMenuBtn.querySelector('i');
    if (!icon) return;

    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('ph-x');
        icon.classList.add('ph-list');
    } else {
        icon.classList.remove('ph-list');
        icon.classList.add('ph-x');
    }
}

function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuBtn) return;

    mobileMenu.classList.add('hidden');
    const icon = mobileMenuBtn.querySelector('i');
    if (!icon) return;

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
    // Redirect to WhatsApp
    window.open('https://wa.me/21650279797', '_blank');
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
});

// Expose core functions globally for inline onclick handlers
window.navigateTo = navigateTo;
window.openConsultationModal = openConsultationModal;
window.closeConsultationModal = closeConsultationModal;
window.showToast = showToast;

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

// ============================================
// SERVICES CAROUSEL - TRUE INFINITE LOOP WITH DRAG
// ============================================

const carousel = {
    track: null,
    wrapper: null,
    originalItems: [],
    currentIndex: 0,
    itemWidthPercent: 33.333,
    isTransitioning: false,
    autoInterval: null,
    // Drag state
    isDragging: false,
    startX: 0,
    currentX: 0,
    dragOffset: 0,
    wrapperWidth: 0
};

function initServicesCarousel() {
    carousel.track = document.getElementById('services-carousel');
    carousel.wrapper = document.getElementById('carousel-wrapper');
    
    if (!carousel.track || !carousel.wrapper) {
        console.error('Carousel elements not found!');
        return;
    }
    
    // Store original items (remove any existing clones first)
    const existingClones = carousel.track.querySelectorAll('[data-clone]');
    existingClones.forEach(clone => clone.remove());
    
    carousel.originalItems = Array.from(carousel.track.children);
    const itemCount = carousel.originalItems.length;
    
    if (itemCount === 0) return;
    
    // Calculate visible items
    const visibleItems = window.innerWidth >= 768 ? 3 : 1;
    carousel.itemWidthPercent = 100 / visibleItems;
    carousel.wrapperWidth = carousel.wrapper.offsetWidth;
    
    // Clone items for infinite effect
    const clonesToAdd = Math.max(visibleItems, 3);
    
    // Prepend clones (last items)
    for (let i = itemCount - 1; i >= Math.max(0, itemCount - clonesToAdd); i--) {
        const clone = carousel.originalItems[i].cloneNode(true);
        clone.setAttribute('data-clone', 'prepend');
        carousel.track.insertBefore(clone, carousel.track.firstChild);
    }
    
    // Append clones (first items)
    for (let i = 0; i < Math.min(clonesToAdd, itemCount); i++) {
        const clone = carousel.originalItems[i].cloneNode(true);
        clone.setAttribute('data-clone', 'append');
        carousel.track.appendChild(clone);
    }
    
    // Start at first real item (after prepended clones)
    carousel.currentIndex = clonesToAdd;
    setPosition(false);
    
    // Listen for transition end to handle infinite loop reset
    carousel.track.addEventListener('transitionend', handleInfiniteReset);
    
    // Touch events
    carousel.wrapper.addEventListener('touchstart', onDragStart, { passive: true });
    carousel.wrapper.addEventListener('touchmove', onDragMove, { passive: true });
    carousel.wrapper.addEventListener('touchend', onDragEnd);
    
    // Mouse drag events
    carousel.wrapper.addEventListener('mousedown', onDragStart);
    carousel.wrapper.addEventListener('mousemove', onDragMove);
    carousel.wrapper.addEventListener('mouseup', onDragEnd);
    carousel.wrapper.addEventListener('mouseleave', onDragEnd);
    
    // Prevent image dragging
    carousel.track.querySelectorAll('img').forEach(img => {
        img.setAttribute('draggable', 'false');
    });
    
    // Set cursor style
    carousel.wrapper.style.cursor = 'grab';
    
    // Start auto-slide
    startAutoSlide();
}

// Drag handlers
function onDragStart(e) {
    if (carousel.isTransitioning) return;
    
    carousel.isDragging = true;
    carousel.wrapper.style.cursor = 'grabbing';
    carousel.startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    carousel.dragOffset = 0;
    carousel.wrapperWidth = carousel.wrapper.offsetWidth;
    
    // Disable transition during drag
    carousel.track.style.transition = 'none';
    
    stopAutoSlide();
    
    // Prevent text selection
    e.preventDefault && e.type === 'mousedown' && e.preventDefault();
}

function onDragMove(e) {
    if (!carousel.isDragging) return;
    
    carousel.currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    carousel.dragOffset = carousel.currentX - carousel.startX;
    
    // Calculate current position + drag offset
    const baseTranslate = carousel.currentIndex * carousel.itemWidthPercent;
    const dragPercent = (carousel.dragOffset / carousel.wrapperWidth) * 100;
    
    carousel.track.style.transform = `translateX(${-baseTranslate + dragPercent}%)`;
}

function onDragEnd(e) {
    if (!carousel.isDragging) return;
    
    carousel.isDragging = false;
    carousel.wrapper.style.cursor = 'grab';
    
    // Determine if we should slide based on drag distance
    const threshold = carousel.wrapperWidth * 0.15; // 15% of wrapper width
    
    if (Math.abs(carousel.dragOffset) > threshold) {
        // Slide in the direction of drag
        if (carousel.dragOffset > 0) {
            slideServices('prev');
        } else {
            slideServices('next');
        }
    } else {
        // Snap back to current position
        setPosition(true);
    }
    
    carousel.dragOffset = 0;
    startAutoSlide();
}

function setPosition(animate = true) {
    if (!carousel.track) return;
    
    const translateX = carousel.currentIndex * carousel.itemWidthPercent;
    carousel.track.style.transition = animate ? 'transform 400ms ease-out' : 'none';
    carousel.track.style.transform = `translateX(-${translateX}%)`;
}

function slideServices(direction) {
    if (carousel.isTransitioning) return;
    
    carousel.isTransitioning = true;
    carousel.currentIndex += (direction === 'next' ? 1 : -1);
    setPosition(true);
}

function handleInfiniteReset() {
    carousel.isTransitioning = false;
    
    if (!carousel.track) return;
    
    const allItems = carousel.track.children;
    const totalItems = allItems.length;
    const originalCount = carousel.originalItems.length;
    const cloneCount = Math.max(window.innerWidth >= 768 ? 3 : 1, 3);
    
    // If we've moved into the appended clones (past real items)
    if (carousel.currentIndex >= originalCount + cloneCount) {
        carousel.currentIndex = cloneCount;
        setPosition(false);
    }
    // If we've moved into the prepended clones (before real items)
    else if (carousel.currentIndex < cloneCount) {
        carousel.currentIndex = originalCount + cloneCount - 1;
        setPosition(false);
    }
    
    updateDots();
}

function updateDots() {
    const cloneCount = Math.max(window.innerWidth >= 768 ? 3 : 1, 3);
    const realIndex = carousel.currentIndex - cloneCount;
    const originalCount = carousel.originalItems.length;
    const visibleItems = window.innerWidth >= 768 ? 3 : 1;
    const pageCount = Math.ceil(originalCount / visibleItems);
    const currentPage = Math.floor(realIndex / visibleItems) % pageCount;
    
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
        if (i === currentPage) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-secondary');
        } else {
            dot.classList.remove('bg-secondary');
            dot.classList.add('bg-gray-300');
        }
    });
}

function goToSlide(pageIndex) {
    const cloneCount = Math.max(window.innerWidth >= 768 ? 3 : 1, 3);
    const visibleItems = window.innerWidth >= 768 ? 3 : 1;
    carousel.currentIndex = cloneCount + (pageIndex * visibleItems);
    setPosition(true);
}

// Auto-slide
function startAutoSlide() {
    stopAutoSlide();
    carousel.autoInterval = setInterval(function() {
        slideServices('next');
    }, 5000);
}

function stopAutoSlide() {
    if (carousel.autoInterval) {
        clearInterval(carousel.autoInterval);
        carousel.autoInterval = null;
    }
}

// Rebuild on resize
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Remove all clones and reinitialize
        if (carousel.track) {
            const clones = carousel.track.querySelectorAll('[data-clone]');
            clones.forEach(clone => clone.remove());
        }
        initServicesCarousel();
    }, 250);
});

// Make functions globally available
window.slideServices = slideServices;
window.goToSlide = goToSlide;
window.initServicesCarousel = initServicesCarousel;

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================

const testimonialCarousel = {
    track: null,
    currentIndex: 0,
    totalSlides: 3,
    autoInterval: null,
    isTransitioning: false
};

function initTestimonialCarousel() {
    testimonialCarousel.track = document.getElementById('testimonials-track');
    if (!testimonialCarousel.track) return;
    
    // Get original slides
    const originalSlides = Array.from(testimonialCarousel.track.children).filter(el => !el.dataset.clone);
    testimonialCarousel.totalSlides = originalSlides.length;
    
    // Remove existing clones
    testimonialCarousel.track.querySelectorAll('[data-clone]').forEach(el => el.remove());
    
    // Clone first and last slides for infinite effect
    if (originalSlides.length > 0) {
        // Clone last slide to prepend
        const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);
        lastClone.setAttribute('data-clone', 'last');
        testimonialCarousel.track.insertBefore(lastClone, testimonialCarousel.track.firstChild);
        
        // Clone first slide to append
        const firstClone = originalSlides[0].cloneNode(true);
        firstClone.setAttribute('data-clone', 'first');
        testimonialCarousel.track.appendChild(firstClone);
    }
    
    // Start at index 1 (first real slide, after the prepended clone)
    testimonialCarousel.currentIndex = 1;
    updateTestimonialPosition(false);
    
    // Listen for transition end
    testimonialCarousel.track.addEventListener('transitionend', handleTestimonialTransitionEnd);
    
    startTestimonialAutoSlide();
}

function handleTestimonialTransitionEnd() {
    testimonialCarousel.isTransitioning = false;
    
    // If at clone, jump to real slide without animation
    if (testimonialCarousel.currentIndex === 0) {
        // At last clone (prepended), jump to real last slide
        testimonialCarousel.currentIndex = testimonialCarousel.totalSlides;
        updateTestimonialPosition(false);
    } else if (testimonialCarousel.currentIndex === testimonialCarousel.totalSlides + 1) {
        // At first clone (appended), jump to real first slide
        testimonialCarousel.currentIndex = 1;
        updateTestimonialPosition(false);
    }
    
    updateTestimonialDots();
}

function slideTestimonial(direction) {
    if (testimonialCarousel.isTransitioning) return;
    
    testimonialCarousel.isTransitioning = true;
    
    if (direction === 'next') {
        testimonialCarousel.currentIndex++;
    } else {
        testimonialCarousel.currentIndex--;
    }
    
    updateTestimonialPosition(true);
    startTestimonialAutoSlide();
}

function goToTestimonial(index) {
    if (testimonialCarousel.isTransitioning) return;
    testimonialCarousel.isTransitioning = true;
    testimonialCarousel.currentIndex = index + 1; // +1 because of prepended clone
    updateTestimonialPosition(true);
    startTestimonialAutoSlide();
}

function updateTestimonialPosition(animate) {
    if (!testimonialCarousel.track) return;
    const translateX = testimonialCarousel.currentIndex * 100;
    testimonialCarousel.track.style.transition = animate ? 'transform 500ms ease-out' : 'none';
    testimonialCarousel.track.style.transform = `translateX(-${translateX}%)`;
}

function updateTestimonialDots() {
    // Calculate real index (0-based, excluding clones)
    let realIndex = testimonialCarousel.currentIndex - 1;
    if (realIndex < 0) realIndex = testimonialCarousel.totalSlides - 1;
    if (realIndex >= testimonialCarousel.totalSlides) realIndex = 0;
    
    const dots = document.querySelectorAll('.testimonial-dot');
    dots.forEach((dot, i) => {
        if (i === realIndex) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-secondary');
        } else {
            dot.classList.remove('bg-secondary');
            dot.classList.add('bg-gray-300');
        }
    });
}

function startTestimonialAutoSlide() {
    if (testimonialCarousel.autoInterval) {
        clearInterval(testimonialCarousel.autoInterval);
    }
    testimonialCarousel.autoInterval = setInterval(function() {
        slideTestimonial('next');
    }, 6000);
}

// Make testimonial functions global
window.slideTestimonial = slideTestimonial;
window.goToTestimonial = goToTestimonial;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initServicesCarousel, 100);
        setTimeout(initTestimonialCarousel, 150);
    });
} else {
    setTimeout(initServicesCarousel, 100);
    setTimeout(initTestimonialCarousel, 150);
}

// ============================================
// FAQ ACCORDION
// ============================================

function toggleFaq(button) {
    const faqItem = button.closest('.faq-item');
    const content = faqItem.querySelector('.faq-content');
    const icon = faqItem.querySelector('.faq-icon i');
    const iconWrapper = faqItem.querySelector('.faq-icon');
    
    // Check if this FAQ is currently open
    const isOpen = !content.classList.contains('hidden');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        const itemContent = item.querySelector('.faq-content');
        const itemIcon = item.querySelector('.faq-icon i');
        const itemIconWrapper = item.querySelector('.faq-icon');
        
        if (item !== faqItem && !itemContent.classList.contains('hidden')) {
            itemContent.classList.add('hidden');
            itemIcon.classList.remove('rotate-45');
            itemIconWrapper.classList.remove('bg-primary', 'text-white');
            itemIconWrapper.classList.add('bg-slate-100');
            item.classList.remove('ring-2', 'ring-primary/20');
        }
    });
    
    // Toggle current FAQ item
    if (isOpen) {
        // Close it
        content.classList.add('hidden');
        icon.classList.remove('rotate-45');
        iconWrapper.classList.remove('bg-primary');
        iconWrapper.classList.add('bg-slate-100');
        iconWrapper.querySelector('i').classList.remove('text-white');
        iconWrapper.querySelector('i').classList.add('text-slate-600');
        faqItem.classList.remove('ring-2', 'ring-primary/20');
    } else {
        // Open it
        content.classList.remove('hidden');
        icon.classList.add('rotate-45');
        iconWrapper.classList.remove('bg-slate-100');
        iconWrapper.classList.add('bg-primary');
        iconWrapper.querySelector('i').classList.remove('text-slate-600');
        iconWrapper.querySelector('i').classList.add('text-white');
        faqItem.classList.add('ring-2', 'ring-primary/20');
    }
}

// Make FAQ function globally available
window.toggleFaq = toggleFaq;

// ============================================
// CONTACT FORM HANDLER
// ============================================

const contactFormElement = document.getElementById('contact-form');
if (contactFormElement) {
    contactFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        // Simple validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            showToast('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="ph ph-spinner animate-spin mr-2"></i>Envoi en cours...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Reset form
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            showToast('Message envoyé avec succès! Nous vous répondrons sous 24h.', 'success');
        }, 1500);
    });
}

function showToast(message, type = 'success') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `fixed bottom-4 right-4 z-50 px-6 py-4 rounded-xl shadow-2xl transform translate-y-full opacity-0 transition-all duration-300 flex items-center gap-3 max-w-md ${
        type === 'success' 
            ? 'bg-emerald-500 text-white' 
            : 'bg-red-500 text-white'
    }`;
    
    const icon = type === 'success' ? 'check-circle' : 'warning-circle';
    toast.innerHTML = `
        <i class="ph-fill ph-${icon} text-2xl flex-shrink-0"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-full', 'opacity-0');
    });
    
    // Remove after delay
    setTimeout(() => {
        toast.classList.add('translate-y-full', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}
