// ==========================================
// Portfolio Website - JavaScript Functions
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navToggle?.contains(event.target) || navMenu?.contains(event.target);
        if (!isClickInsideNav && navMenu?.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle?.classList.remove('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navMenu?.classList.remove('active');
                navToggle?.classList.remove('active');
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
            } else {
                navbar.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
            }
        });
    }

    // Typing effect for hero subtitle
    const typedTextElement = document.querySelector('.typed-text');
    if (typedTextElement) {
        const titles = [
            'Python Expert',
            'AI Engineer',
            'DevOps Enthusiast',
            'Technical Lead',
            'Cloud Architect',
            'Full Stack Developer'
        ];
        
        let titleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentTitle = titles[titleIndex];
            
            if (isDeleting) {
                typedTextElement.textContent = currentTitle.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typedTextElement.textContent = currentTitle.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentTitle.length) {
                // Pause at end of word
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        }

        // Start typing effect
        setTimeout(type, 1000);
    }

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-bar');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.9;

            if (barTop < triggerBottom) {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    };

    if (skillBars.length > 0) {
        window.addEventListener('scroll', animateSkillBars);
        animateSkillBars(); // Initial check
    }

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.capability-card, .expertise-item, .tech-card, .value-card, .stat-box, .experience-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.85;

            if (elementTop < triggerBottom) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    const initAnimatedElements = () => {
        const elements = document.querySelectorAll('.capability-card, .expertise-item, .tech-card, .value-card, .stat-box, .experience-card');
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
    };

    initAnimatedElements();
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Counter animation for stats
    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16); // 60 FPS
        let current = start;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        };

        updateCounter();
    };

    // Animate stats when they come into view
    const statElements = document.querySelectorAll('.stat-item h3, .stat-box h3');
    const animateStats = () => {
        statElements.forEach(stat => {
            const statTop = stat.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.9;

            if (statTop < triggerBottom && !stat.dataset.animated) {
                const text = stat.textContent.trim();
                const numberMatch = text.match(/(\d+)/);
                if (numberMatch) {
                    const number = parseInt(numberMatch[1]);
                    const suffix = text.replace(numberMatch[0], '').trim();
                    stat.dataset.animated = 'true';
                    
                    // Temporarily clear the content
                    stat.textContent = '0' + suffix;
                    
                    // Animate to the target number
                    let current = 0;
                    const increment = number / 100;
                    const interval = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            stat.textContent = number + suffix;
                            clearInterval(interval);
                        } else {
                            stat.textContent = Math.floor(current) + suffix;
                        }
                    }, 20);
                }
            }
        });
    };

    if (statElements.length > 0) {
        window.addEventListener('scroll', animateStats);
        animateStats(); // Initial check
    }

    // Contact form is now handled by FormSubmit.co
    // No JavaScript needed - form submits directly to the service
    // The service sends emails to your configured address

    // Add active state to current page in navigation
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Intersection Observer for fade-in animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.capability-card, .expertise-item, .tech-card, .value-card, .stat-box, .experience-card, .contact-method').forEach(el => {
            observer.observe(el);
        });
    }

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = hero.querySelector('.hero-content');
            if (parallax && scrolled < hero.offsetHeight) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
                parallax.style.opacity = 1 - (scrolled / hero.offsetHeight);
            }
        });
    }

    // Add loading animation to external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a subtle loading indication
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 300);
        });
    });

    // Console message for developers
    console.log('%c👋 Hello Developer!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
    console.log('%cInterested in the code? Feel free to reach out!', 'font-size: 14px; color: #6b7280;');
    console.log('%cBuilt with Flask, Python, and ❤️', 'font-size: 12px; color: #10b981;');
});

// Utility function to debounce scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Add smooth scroll behavior for browsers that don't support it natively
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const targetPosition = target.offsetTop - 80;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };
    smoothScrollPolyfill();
}
