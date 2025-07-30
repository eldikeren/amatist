// Particles.js Configuration with Original Colors
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = 'he';
        this.init();
    }

    init() {
        this.setupLanguageSwitcher();
        this.updateLanguage('he');
    }

    setupLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.currentTarget.dataset.lang;
                this.updateLanguage(lang);
            });
        });
    }

    updateLanguage(lang) {
        this.currentLang = lang;
        
        // Update HTML direction
        document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update all translatable elements
        this.updateElements();
    }

    updateElements() {
        const elements = document.querySelectorAll('[data-he][data-en]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${this.currentLang}`);
            if (text) {
                element.textContent = text;
            }
        });

        // Update form placeholders
        this.updateFormPlaceholders();
    }

    updateFormPlaceholders() {
        const placeholders = {
            he: {
                name: 'שם מלא',
                phone: 'טלפון',
                email: 'אימייל',
                message: 'הודעה'
            },
            en: {
                name: 'Full Name',
                phone: 'Phone',
                email: 'Email',
                message: 'Message'
            }
        };

        const inputs = {
            name: document.getElementById('name'),
            phone: document.getElementById('phone'),
            email: document.getElementById('email'),
            message: document.getElementById('message')
        };

        Object.keys(inputs).forEach(key => {
            if (inputs[key]) {
                inputs[key].placeholder = placeholders[this.currentLang][key];
            }
        });
    }
}

// Floating Navigation Management
class NavigationManager {
    constructor() {
        this.currentSection = 'hero';
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupMobileToggle();
        this.setupScrollSpy();
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId);
            });
        });
    }

    setupMobileToggle() {
        const toggle = document.querySelector('.nav-toggle');
        const menu = document.querySelector('.nav-menu');
        
        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                toggle.classList.toggle('active');
                menu.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                    toggle.classList.remove('active');
                    menu.classList.remove('active');
                }
            });
        }
    }

    setupScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 200) {
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
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Product Card Management
class ProductManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupProductToggles();
        this.setupProductAnimations();
    }

    setupProductToggles() {
        const toggles = document.querySelectorAll('.product-toggle');
        toggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                const card = e.currentTarget.closest('.product-card');
                this.toggleProductDetails(card);
            });
        });
    }

    toggleProductDetails(card) {
        const isExpanded = card.classList.contains('expanded');
        const toggle = card.querySelector('.product-toggle');
        const toggleText = toggle.querySelector('.toggle-text');
        
        if (isExpanded) {
            card.classList.remove('expanded');
            toggleText.textContent = toggleText.getAttribute(`data-${languageManager.currentLang}`);
        } else {
            card.classList.add('expanded');
            const expandedText = languageManager.currentLang === 'he' ? 'הסתר פרטים' : 'Hide Details';
            toggleText.textContent = expandedText;
        }
    }

    setupProductAnimations() {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
}

// Animation Manager
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupParallaxEffect();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.detail-item, .product-card, .advantage-item, .contact-item, .stat-item');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    setupParallaxEffect() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
}

// Form Management
class FormManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupFormSubmission();
    }

    setupFormSubmission() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(form);
            });
        }
    }

    handleFormSubmission(form) {
        const submitBtn = form.querySelector('.submit-button');
        const originalText = submitBtn.querySelector('.submit-text').textContent;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.querySelector('.submit-text').textContent = languageManager.currentLang === 'he' ? 'שולח...' : 'Sending...';
        
        // Simulate form submission
        setTimeout(() => {
            this.showNotification(
                languageManager.currentLang === 'he' ? 'ההודעה נשלחה בהצלחה!' : 'Message sent successfully!',
                'success'
            );
            
            // Reset form
            form.reset();
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.querySelector('.submit-text').textContent = originalText;
        }, 2000);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            background: ${this.getNotificationColor(type)};
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 350px;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Setup close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }
        }, 5000);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    getNotificationColor(type) {
        const colors = {
            success: 'linear-gradient(135deg, #10b981, #059669)',
            error: 'linear-gradient(135deg, #ef4444, #dc2626)',
            warning: 'linear-gradient(135deg, #f59e0b, #d97706)',
            info: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
        };
        return colors[type] || colors.info;
    }
}

// Performance Optimizations
class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.setupPreloading();
    }

    setupLazyLoading() {
        // Placeholder for future lazy loading implementation
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    setupPreloading() {
        // Preload critical resources
        const criticalResources = [
            'ron.jpg'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = resource;
            document.head.appendChild(link);
        });
    }
}

// Accessibility Manager
class AccessibilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupTouchSupport();
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Escape key to close mobile menu
            if (e.key === 'Escape') {
                const toggle = document.querySelector('.nav-toggle');
                const menu = document.querySelector('.nav-menu');
                if (toggle && menu) {
                    toggle.classList.remove('active');
                    menu.classList.remove('active');
                }
            }
        });
    }

    setupTouchSupport() {
        // Add touch support for mobile devices
        let touchStartY = 0;
        let touchEndY = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartY = e.changedTouches[0].screenY;
        });

        document.addEventListener('touchend', (e) => {
            touchEndY = e.changedTouches[0].screenY;
            this.handleSwipe();
        });
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up
                this.scrollToNextSection();
            } else {
                // Swipe down
                this.scrollToPreviousSection();
            }
        }
    }

    scrollToNextSection() {
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const currentSection = this.getCurrentSection();
        const currentIndex = sections.findIndex(section => section.id === currentSection);
        
        if (currentIndex < sections.length - 1) {
            const nextSection = sections[currentIndex + 1];
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    scrollToPreviousSection() {
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const currentSection = this.getCurrentSection();
        const currentIndex = sections.findIndex(section => section.id === currentSection);
        
        if (currentIndex > 0) {
            const prevSection = sections[currentIndex - 1];
            prevSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    getCurrentSection() {
        const sections = document.querySelectorAll('section[id]');
        let current = 'hero';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        return current;
    }
}

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    window.languageManager = new LanguageManager();
    window.navigationManager = new NavigationManager();
    window.productManager = new ProductManager();
    window.animationManager = new AnimationManager();
    window.formManager = new FormManager();
    window.performanceManager = new PerformanceManager();
    window.accessibilityManager = new AccessibilityManager();

    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add loading animation
    document.body.classList.add('loaded');

    // Initialize any additional features
    console.log('Amatist Chemicals website loaded successfully!');
});

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate any layout-dependent features
    if (window.navigationManager) {
        // Refresh navigation if needed
    }
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, pause animations if needed
    } else {
        // Page is visible again, resume animations
    }
}); 