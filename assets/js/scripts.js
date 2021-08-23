// MENU SHOW AND HIDDEN
const navMenu = document.querySelector('#nav-menu'),
    navToggle = document.querySelector('#nav-toggle'),
    navClose = document.querySelector('#nav-close');

// MENU SHOW
// Validade if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
};

// MENU HIDDEN
// Validade if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
};

// REMOVE MENU MOBILE
const navLinks = document.querySelectorAll('.nav__link');
function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLinks.forEach((link) => {
    link.addEventListener('click', linkAction);
});


// ACCORDION SKILLS
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(e) {
    e.currentTarget.parentNode.classList.toggle('skills__close')
    e.currentTarget.parentNode.classList.toggle('skills__open')
};
skillsHeader.forEach((item) => {
    item.addEventListener('click', toggleSkills);
});

// QUALIFICATION TABS
const tabs = document.querySelectorAll('.qualification__button'),
    tabContents = document.querySelectorAll('.qualification__content');

function activeTab(tab, index) {
    tabContents.forEach((tabContents) => {
        tabContents.classList.remove('qualification__active');
    });
    tabs.forEach((tab) => {
        tab.classList.remove('qualification__active');
    });
    tabContents[index].classList.add('qualification__active');
    tab.classList.add('qualification__active');
};

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        activeTab(tab, index);
    });
});

// SERVICES MODAL
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

// CLOSE MODAL IF CLICKOUTSIDE
// window.addEventListener('click', (e) => {
//     if (e.target.classList.contains('active-modal')) {
//         modalViews.forEach((modalView) => {
//             modalView.classList.remove('active-modal');
//         });
//     }
// });

// PORTFOLIO SWIPER
// Initializer
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// TESTIMONIAL SWIPER
// Initializer
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    },
});

// SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
        } else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
        };
    });
};
window.addEventListener('scroll', scrollActive);

//CHANGE BG HEADER
function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    };
};
window.addEventListener('scroll', scrollHeader);

// SHOW SCROLLUP
function scrollUp() {
    const nav = document.getElementById('scroll-up');
    if (this.scrollY >= 560) {
        nav.classList.add('show-scroll');
    } else {
        nav.classList.remove('show-scroll');
    };
};
window.addEventListener('scroll', scrollUp);

// DARK/LIGHT THEME
const themeButton = document.getElementById('theme-button'),
    darkTheme = 'dark-theme',
    iconTheme = 'uil-sun',

    // Previously selected topic (if user selected)
    selectedTheme = localStorage.getItem('selected-theme'),
    selectedIcon = localStorage.getItem('selected-icon'),

    // Obtain the current theme that the interface has by validating the dark-theme class
    getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light',
    getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil sun';

// Validade if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
};

// Activate  / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Save the theme snd the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
