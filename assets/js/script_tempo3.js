var typed = new Typed(".typing", {
    strings: ["", "an ai scholar", "an ", "a fitness freak", "a science geek"],
    typeSpeed: 50,
    backSpeed: 60,
    loop: true
})


const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");
var resumeTabNav = function (resumeTabClick) {
    resumeTabContents.forEach((resumeTabContent) => {
        resumeTabContent.style.display = "none";
        resumeTabContent.classList.remove("active");
    });
    resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
        resumePortfolioTabBtn.classList.remove("active");
    });

    resumeTabContents[resumeTabClick].style.display = "flex";
    setTimeout(() => {
        resumeTabContents[resumeTabClick].classList.add("active");
    }, 100);
    resumePortfolioTabBtns[resumeTabClick].classList.add("active");
}
resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
    resumePortfolioTabBtn.addEventListener("click", () => {
        resumeTabNav(i);
    });
});




// Service modal open/close function
const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");
serviceCardWithModals.forEach((serviceCardWithModal) => {
    const serviceCard = serviceCardWithModal.querySelector(".service-card");
    const serviceBackDrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
    const serviceModal = serviceCardWithModal.querySelector(".service-modal");
    const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");
    serviceCard.addEventListener("click", () => {
        serviceBackDrop.style.display = "flex";
        setTimeout(() => {
            serviceBackDrop.classList.add("active");
        }, 100);

        setTimeout(() => {
            serviceModal.classList.add("active");
        }, 300);
    });
    modalCloseBtn.addEventListener("click", () => {
        setTimeout(() => {
            serviceBackDrop.style.display = "none";
        }, 500);
        setTimeout(() => {
            serviceBackDrop.classList.remove("active");
            serviceModal.classList.remove("active");
        }, 100);
    });

});


// Portfolio modals, tabs and cards //

// Filter portfolio cards according to portfolio tabs.
document.addEventListener("DOMContentLoaded", () => {
    const portfolioTabs = document.querySelector(".portfolio-tabs");
    const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
    const cardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");
    portfolioTabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {

            const filter = tabBtn.getAttribute("data-filter");
            cardsWithModals.forEach((cardWithModal) => {
                if (filter === "all" || cardWithModal.classList.contains(filter)) {
                    cardWithModal.style.opacity = "1";
                    cardWithModal.classList.remove("hidden");

                    setTimeout(() => {
                        cardWithModal.style.opacity = "1";
                        cardWithModal.style.transition = ".5s ease";
                    }, 1);

                }
                else {
                    cardWithModal.classList.add("hidden");

                    setTimeout(() => {
                        cardWithModal.style.opacity = "0";
                        cardWithModal.style.transition = ".5s ease";
                    }, 1);

                }
            });
            // Add active class to the clicked tab button.
            portfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
            tabBtn.classList.add("active");


        });
    });
});


// Open/Close Portfolio modals.
const portfolioCardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");
portfolioCardsWithModals.forEach((portfolioCardWithModal) => {
    const portfolioCard = portfolioCardWithModal.querySelector(".portfolio-card");
    const portfolioBackdrop = portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
    const portfolioModal = portfolioCardWithModal.querySelector(".portfolio-modal");
    const modalCloseBtn = portfolioCardWithModal.querySelector(".modal-close-btn");

    portfolioCard.addEventListener("click", () => {
        portfolioBackdrop.style.display = "flex";

        setTimeout(() => {
            portfolioBackdrop.classList.add("active");
        }, 200);
        setTimeout(() => {
            portfolioModal.classList.add("active");
        }, 200);
    });


    modalCloseBtn.addEventListener("click", () => {
        setTimeout(() => {
            portfolioBackdrop.style.display = "none";
        }, 500);
        setTimeout(() => {
            portfolioBackdrop.classList.remove("active");
            portfolioModal.classList.remove("active");
        }, 100);
    });

});

// testimonials swipper
var swiper = new Swiper(".dr-client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// Send the message from the email form
(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "hFrNm3XDp2pxj6OtW",
    });
})();


drContactForm = document.getElementById("dr-contact-form");
drContactFormAlert = document.querySelector(".contact-form-alert");
drContactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('service_f7fz87m', 'template_965xjpo', '#dr-contact-form').then(() => {
        // console.log('SUCCESS!');
        drContactFormAlert.innerHTML = "<span>Your message sent successfully!</span><i class='ri-checkbox-circle-fill'></i>";
        drContactForm.reset();
        setTimeout(() => {
            drContactFormAlert.innerHTML = "";
        }, 3000);
    }, (error) => {
        // console.log('FAILED...', error);
        drContactFormAlert.innerHTML = "<span>Message not sent!</span><i class='ri-error-warning-fill'></i>";
        drContactFormAlert.title = error;
    });
});

// Shrink the height of the header on scroll
window.addEventListener("scroll", () => {
    const drHeader = document.querySelector(".dr-header");
    drHeader.classList.toggle("shrink", window.scrollY > 0);
});


// Each bottom navigation menu items active on page scroll.
window.addEventListener("scroll", () => {
    const navMenuSections = document.querySelectorAll(".nav-menu-section");
    const scrollY = window.pageYOffset;

    navMenuSections.forEach((navMenuSection) => {
        let sectionHeight = navMenuSection.offsetHeight;
        let sectionTop = navMenuSection.offsetTop - 50;
        let id = navMenuSection.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.add("current");
        } else {
            document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.remove("current");
        }
    });
});


// Javascript to show bottom navigation menu on home (page Load).
window.addEventListener("DOMContentLoaded", () => {
    const bottomNav = document.querySelector(".bottom-nav");
    bottomNav.classList.toggle("active", window.scrollY < 10);
});



// Javascript to show/hide bottom navigation menu on home (scroll).
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;
window.addEventListener("scroll", () => {
    bottomNav.classList.add("active");
    menuShowBtn.classList.remove("active");
    if (window.scrollY < 10) {
        menuHideBtn.classList.remove("active");

        function scrollStopped() {
            bottomNav.classList.add("active");
        }
        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 1500);
    }


    if (window.scrollY > 10) {
        menuHideBtn.classList.add("active");

        function scrollStopped() {
            bottomNav.classList.remove("active");
            menuShowBtn.classList.add("active");
        }
        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 1500);
    }
});


// Hide bottom navigation menu on click menu-hide-btn.
menuHideBtn.addEventListener("click", () => {
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.toggle("active");
    menuShowBtn.classList.toggle("active");
});

//Show bottom navigation menu on click menu-show-btn.
menuShowBtn.addEventListener("click", () => {
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.add("active");
    menuShowBtn.classList.toggle("active");
});

// To-top-button with scroll indicator bar
window.addEventListener("scroll", () => {
    const toTopBtn = document.querySelector(".to-top-btn");
    toTopBtn.classList.toggle("active", window.scrollY > 0);


    // Scroll indicator bar
    const scrollIndicatorBar = document.querySelector(".scroll-indicator-bar");
    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = (pageScroll / height) * 100;
    scrollIndicatorBar.style.height = scrollValue + "%";

});


// Customized cursor on mousemove
// const cursor = document.querySelector(".cursor-symbol");
// const cursorDot = cursor.querySelector(".cursor-dot");
// const cursorCircle = cursor.querySelector(".cursor-circle");
// document.addEventListener("mousemove", (e) => {
//     let x = e.clientX;
//     let y = e.clientY;
//     cursorDot.style.top = y + "px";
//     cursorDot.style.left = x + "px";
//     cursorCircle.style.top = y + "px";
//     cursorCircle.style.left = x + "px";
// });



// // Cursor effects on hover website elements.
// const cursorHoverlinks = document.querySelectorAll("body a, .theme-btn, .dr-main-btn, .portfolio-card, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet, .service-card, .contact-social-links li, .contact-form .submit-btn, .menu-show-btn, .menu-hide-btn");


// cursorHoverlinks.forEach((cursorHoverlink) => {
//     cursorHoverlink.addEventListener("mouseover", () => {
//     cursorDot.classList.add("large");
//     cursorCircle.style.display = "none";
//     });
// });

// cursorHoverlinks.forEach((cursorHoverlink) => {
//     cursorHoverlink.addEventListener("mouseout", () => {
//     cursorDot.classList.remove("large");
//     cursorCircle.style.display = "block";
//     });
// });



// Test code for the custom cursor 
(function () {
    // Locate cursor element (support both .cursor-symbol and .cursor)
    const cursor =
        document.querySelector(".cursor-symbol") ||
        document.querySelector(".cursor");
    if (!cursor) return; // nothing to do

    // Ensure cursor is appended to body (prevents isdrs if parent uses CSS transform)
    if (cursor.parentElement !== document.body)
        document.body.appendChild(cursor);

    const cursorDot = cursor.querySelector(".cursor-dot");
    const cursorCircle = cursor.querySelector(".cursor-circle");
    if (!cursorDot || !cursorCircle) return;

    // Smooth follow variables
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetX = mouseX;
    let targetY = mouseY;

    // Update target on pointer move (works for mouse + touch pen)
    document.addEventListener(
        "pointermove",
        (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        },
        { passive: true }
    );

    // Render loop (easing for smooth trailing)
    function animate() {
        // easing factor (0 < f < 1) — smaller = smoother/laggier
        const f = 0.35;
        mouseX += (targetX - mouseX) * f;
        mouseY += (targetY - mouseY) * f;

        // apply transforms (translate3d for GPU acceleration)
        const isLarge = cursorDot.classList.contains("large");
        cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) ${isLarge ? "scale(12)" : "scale(1)"
            }`;
        cursorCircle.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    // Hover target selector (same as your original list)
    const hoverSelector =
        "body a, .theme-btn, .dr-main-btn, .portfolio-card, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet, .service-card, .contact-social-links li, .contact-form .submit-btn, .menu-show-btn, .menu-hide-btn";

    // Use event delegation so dynamic elements or newly-rendered sections are handled
    document.addEventListener("pointerover", (e) => {
        if (e.target.closest(hoverSelector)) {
            cursorDot.classList.add("large");
            cursorCircle.style.display = "none";
        }
    });

    document.addEventListener("pointerout", (e) => {
        // only remove if the pointer didn't immediately land on another hover target
        // (relatedTarget may be null in some cases)
        const toEl = e.relatedTarget;
        if (!toEl || !toEl.closest || !toEl.closest(hoverSelector)) {
            cursorDot.classList.remove("large");
            cursorCircle.style.display = "block";
        }
    });

    // small polish: hide if pointer leaves the window
    document.addEventListener("mouseleave", () => {
        cursorDot.style.opacity = "0";
        cursorCircle.style.opacity = "0";
    });
    document.addEventListener("mouseenter", () => {
        cursorDot.style.opacity = "1";
        cursorCircle.style.opacity = "0.6";
    });
})();


// Change theme on click of the theme button. The site always starts
// on the dark theme; light mode applies only for the current visit,
// so a fresh page load (or refresh) is always dark again.
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    themeBtn.classList.toggle("active-sun-icon");
    document.body.classList.toggle("light-theme");
});

// Scroll Reveal JS
// Common reveal options to create reveal animations.
ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

// Target elements and specify options to create reveal animations.
ScrollReveal().reveal('.avatar-img', { delay: 100, origin: 'top' });
ScrollReveal().reveal('.avatar-info, .section-title', { delay: 300, origin: 'top' });
ScrollReveal().reveal('.home-social, .home-scroll-btn, .copy-right', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.about-img', { delay: 700, origin: 'top' });
ScrollReveal().reveal('.about-info, .dr-footer .dr-logo', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.pro-card, .about-buttons, .dr-main-btn, .resume-tabs .tab-btn, .portfolio-tabs .tab-btn', { delay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('#resume .section-content', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.service-card, .portfolio-card, .contact-item, .contact-social-links li, .footer-menu .menu-item', { delay: 300, origin: 'bottom', interval: 300 });
ScrollReveal().reveal('.dr-client-swiper, .contact-form-body', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.contact-info h3', { delay: 100, origin: 'bottom', interval: 300 });





// AIR Bubbles

const container = document.querySelector('.bubble-container');

function createBubble() {
    const bubble = document.createElement('div');
    const size = Math.random() * 40 + 10; // size between 10px and 50px
    const duration = Math.random() * 10 + 5; // duration between 5s and 15s
    const left = Math.random() * 100; // position from 0% to 100%

    bubble.className = 'bubble';
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.animationDuration = `${duration}s`;

    container.appendChild(bubble);

    // Remove bubble after animation ends
    setTimeout(() => {
        container.removeChild(bubble);
    }, duration * 1000);
}

// Generate a new bubble every 300ms
setInterval(createBubble, 300);


// AIR Bubbles end


// Music player
const audio = document.getElementById('bg-music');
const muteBtn = document.getElementById('mute-btn');

let userInteracted = false;

function tryPlayAudio() {
    if (!userInteracted) {
        userInteracted = true;

        // Set volume initially low
        audio.volume = 0.05;
        audio.muted = false;

        // Attempt to play
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    // Gradually raise volume
                    const targetVolume = 0.30;
                    const step = 0.02;
                    const interval = setInterval(() => {
                        if (audio.volume < targetVolume && !audio.muted) {
                            audio.volume = Math.min(audio.volume + step, targetVolume);
                        } else {
                            clearInterval(interval);
                        }
                    }, 200);
                })
                .catch(error => {
                    console.log("Playback blocked:", error);
                });
        }
    }
}

// Detect first real interaction
document.addEventListener("click", tryPlayAudio, { once: true });
document.addEventListener("keydown", tryPlayAudio, { once: true });
document.addEventListener("scroll", tryPlayAudio, { once: true });

muteBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;

    const icon = muteBtn.querySelector("i");

    if (audio.muted) {
        icon.classList.remove("ri-volume-up-fill");
        icon.classList.add("ri-volume-mute-fill");
    } else {
        icon.classList.remove("ri-volume-mute-fill");
        icon.classList.add("ri-volume-up-fill");
    }
});

// Progress bar
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const progressBar = document.getElementById('scroll-progress');
    progressBar.style.width = scrollPercent + '%';

    // Dynamic color animation (optional)
    const hue = scrollPercent * 3.6; // changes color as you scroll
    progressBar.style.backgroundColor = `hsl(${hue}, 80%, 50%)`;
});

// update the year at the footer automatically

document.getElementById("year").textContent = new Date().getFullYear();

// This has to be implemented later. The main target of this idea is to change the picture while I change the theme color.

// Portfolio image changing logic while changing the theme.
// const themeButton = document.querySelector(".theme-btn");
// const avatarImg = document.getElementById("avatar-imgImg");

//   // Image paths
// const lightImage = "assets/images/avatarImages/colourful.webp";
// const darkImage = "assets/images/avatarImages/blacky.webp";

// themeButton.addEventListener("click", () => {
//     document.body.classList.toggle("light-theme");

//     // Check if we're in light theme
// if (document.body.classList.contains("light-theme")) {
//     avatarImg.src = lightImage;
//     } else {
//     avatarImg.src = darkImage;
//     }
// });


// ==================== Ambient Particle Field ====================
// On first load, tiny dots burst outward from the center, decelerate
// under friction, and settle into a slow permanent drift — like dust
// motes / a faint starfield — that keeps going for as long as the
// page is open. Particles wrap around screen edges instead of dying.
// Pure canvas + rAF, no dependencies.
(function () {
    const canvas = document.getElementById("particle-field");
    if (!canvas || !canvas.getContext) return;

    // Respect reduced-motion preference: skip the animated field
    // entirely rather than running a perpetual animation.
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        canvas.remove();
        return;
    }

    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    function sizeCanvas() {
        dpr = window.devicePixelRatio || 1;
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    sizeCanvas();
    window.addEventListener("resize", sizeCanvas);

    const particleCount = 140;
    const friction = 0.965; // slows the initial burst down quickly
    const ambientJitter = 0.02; // tiny constant nudge that keeps them softly drifting forever
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.6 + Math.random() * 5; // px per frame, before friction
        particles.push({
            x: width / 2,
            y: height / 2,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            radius: 1 + Math.random() * 2,
            baseAlpha: 0.35 + Math.random() * 0.55,
            twinkleSpeed: 0.4 + Math.random() * 0.8,
            twinklePhase: Math.random() * Math.PI * 2,
        });
    }

    function tick(t) {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            // Friction pulls the initial burst speed down toward zero;
            // the small random jitter keeps replacing it so particles
            // never fully stop — they end up gently wandering forever.
            p.vx = p.vx * friction + (Math.random() - 0.5) * ambientJitter;
            p.vy = p.vy * friction + (Math.random() - 0.5) * ambientJitter;
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around edges instead of disappearing, so the field
            // stays evenly populated indefinitely.
            if (p.x < -20) p.x = width + 20;
            if (p.x > width + 20) p.x = -20;
            if (p.y < -20) p.y = height + 20;
            if (p.y > height + 20) p.y = -20;

            const twinkle = 0.55 + 0.45 * Math.sin(t * 0.001 * p.twinkleSpeed + p.twinklePhase);
            const alpha = p.baseAlpha * twinkle;

            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);

    // Soft fade-in once the field starts drawing, instead of popping
    // in at full opacity.
    requestAnimationFrame(() => {
        canvas.classList.add("particle-field-ready");
    });
})();

