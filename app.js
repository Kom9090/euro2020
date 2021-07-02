const body = document.querySelector("body");
window.addEventListener("load", function () {
    let isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
    if (isMobile) {
        body.classList.add("_touch");
    } else {
        body.classList.add("_pc");
    }
});
new Swiper(".result-block", {
    navigation: {
        nextEl: ".sub-menu__inner .swiper-button-next",
        prevEl: ".sub-menu__inner .swiper-button-prev"
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        470: {
            slidesPerView: 2,
        },
        670: {
            slidesPerView: 3,
        },
        880: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 6,
        }
    },   
    spaceBetween: 50,
    freeMode: true,
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    }
});
new Swiper(".new-swipe", {
    navigation: {
    nextEl: ".news__news-bar .swiper-button-next",
    prevEl: ".news__news-bar .swiper-button-prev"
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        760: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 1,
        }
    },   
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
});
new Swiper(".video__block", {
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true
    },
    slidesPerView: 4,
    freeMode: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    }
});
/*--------------------------------------------*/
const menuLinks = document.querySelectorAll(".menu__list-link[data-goto]");
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - (document.querySelector("header").offsetHeight + 20);
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
/*-----------------------------*/
let burgerChange = document.querySelector(".menu-icon");
burgerChange.addEventListener("click", function (e) {
    let newChange = document.querySelector(".menu-icon");
    newChange.classList.toggle("active-burger");
});
burgerChange.addEventListener("click", function (e) {
    let menuStart = document.querySelector(".menu__list");
    menuStart.classList.toggle("_active-nav");
});
document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest(".menu-icon")) {
        let burg_menu = document.querySelector(".menu-icon");
        burg_menu.classList.remove("active-burger");
    }
});
document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest(".menu-icon")) {
        let burg_menu = document.querySelector(".menu__list");
        burg_menu.classList.remove("_active-nav");
    }
});
/*-------------------------------------*/
const showA = document.querySelector(".scroll-top");
window.onscroll = () => {
    if (window.scrollY > 700) {
        showA.classList.remove("_show-btn");
    }
    else {
        showA.classList.add("_show-btn");
    }
};
showA.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};