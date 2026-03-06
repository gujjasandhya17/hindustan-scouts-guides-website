/* =================================
   HSGA Website - Main Script
   ================================= */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            
            // Update active link
            navItems.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
        }
    });

    // Gallery lightbox
    initLightbox();

    // Contact form
    initContactForm();

    // Smooth scroll for buttons
    initSmoothScroll();
});

// Lightbox Functionality
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    let currentIndex = 0;

    if (!lightbox || galleryItems.length === 0) return;

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentIndex = index;
            showLightbox();
        });
    });

    function showLightbox() {
        const img = galleryItems[currentIndex].querySelector('img');
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            lightbox.classList.remove('active');
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            showLightbox();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            showLightbox();
        });
    }

    // Close lightbox when clicking outside
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (lightbox.classList.contains('active')) {
                if (e.key === 'ArrowLeft') {
                    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
                    showLightbox();
                } else if (e.key === 'ArrowRight') {
                    currentIndex = (currentIndex + 1) % galleryItems.length;
                    showLightbox();
                } else if (e.key === 'Escape') {
                    lightbox.classList.remove('active');
                }
            }
        });
    }
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !phone || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email');
            return;
        }

        // Phone validation (basic)
        const phoneRegex = /^\+?[\d\s\-()]{7,}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number');
            return;
        }

        // In a real application, you would send this data to a server
        alert('Thank you for contacting us! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animation for elements
function addScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.card, .activity-card, .leader-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addScrollAnimation);
} else {
    addScrollAnimation();
}
