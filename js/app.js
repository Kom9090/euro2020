//hovers

const body = document.querySelector("body");
window.addEventListener("load", function () {
    let isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
    if (isMobile) {
        body.classList.add("_touch");
    } else {
        body.classList.add("_pc");
    }
});

//burger

let burgerChange = document.querySelector(".header__menu-icon");
burgerChange.addEventListener("click", function (e) {
    let newChange = document.querySelector(".header__menu-icon");
    newChange.classList.toggle("_active-burger");
});
burgerChange.addEventListener("click", function (e) {
    let menuStart = document.querySelector(".menu__list");
    menuStart.classList.toggle("_active-nav");
});
document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest(".header__menu-icon")) {
        let burg_menu = document.querySelector(".header__menu-icon");
        burg_menu.classList.remove("_active-burger");
    }
});
document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest(".header__menu-icon")) {
        let burg_menu = document.querySelector(".menu__list");
        burg_menu.classList.remove("_active-nav");
    }
});

//popap

const popupLinks = document.querySelectorAll(".popup-link");
const lockPadding = document.querySelectorAll(".locck-padding");
let unlock = true;
const timeout = 300;
if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute("href").replace("#", "");
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll("._close-popup");
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function (e) {
            popupClose(el.closest(".popup"));
            e.preventDefault();
        });
    }
}
function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector(".popup.open");
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add("open");
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest(".popup__window")) {
                popupClose(e.target.closest(".popup"))
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove("open");
        if (doUnlock) {
            bodyUnLock();
        }
    }
}
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector(".content").offsetWidth + "px";
    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.getElementsByClassName.paddingRight = lockPaddingValue;
        }
    }

    body.style.paddingRight = lockPaddingValue;
    body.classList.add("lock");
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
function bodyUnLock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = "0px";
        }
        body.style.paddingRight = "0px";
        body.classList.remove("lock");
    }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
document.addEventListener("keydown", function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector(".popup.open");
        popupClose(popupActive);
    }
});

//input focus

let input = document.querySelectorAll(".form__input");
for (let k = 0; k < input.length; k++) {
    input[k].addEventListener("focus", function (e) {
        input[k].previousElementSibling.classList.add("_focus-input");
    });
    input[k].addEventListener("blur", function (e) {
        if (input[k].value == "") {
            input[k].previousElementSibling.classList.remove("_focus-input");
        }
    });
}

//show password

let passF = document.querySelectorAll(".password-input");
for (let l = 0; l < passF.length; l++) {
    passF[l].addEventListener("focus", function (e) {
        let showBtn = passF[l].parentElement.querySelector(".show-password-btn");
        showBtn.classList.add("_focus-btn");
    });
    passF[l].addEventListener("blur", function (e) {
        if (passF[l].value == "") {
            let showBtn = passF[l].parentElement.querySelector(".show-password-btn");
            showBtn.classList.remove("_focus-btn");
        }
    });
}
let view = document.querySelectorAll(".show-password-btn")
for (let r = 0; r < view.length; r++) {
    view[r].addEventListener("click", function (e) {
        view[r].classList.toggle("_active-show");
        let inputPd = view[r].parentElement.querySelector(".password-input");
        if (inputPd.getAttribute("type") === "password") {
            inputPd.setAttribute("type", "text");
        } else {
            inputPd.setAttribute("type", "password");
        }
    });
}

//content top

let contentTop = document.querySelector(".content");
let headerHeight = document.querySelector(".header__wrapper").offsetHeight + "px";
if (headerHeight !== "74px") {
    window.addEventListener("load", function (e) {
        contentTop.style.paddingTop = String(headerHeight);
    });
}

//swiper sub-menu

new Swiper(".sub-menu__swiper", {
    navigation: {
        nextEl: ".sub-menu__inner .swiper-button-next",
        prevEl: ".sub-menu__inner .swiper-button-prev"
    },
    initialSlide: 0,

    breakpoints: {
        280: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
        },
        470: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
        },
        600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        670: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        880: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1100: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
        1400: {
            slidesPerView: 6,
            slidesPerGroup: 6,
        }
    },
    spaceBetween: 40,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    }
});

// swiper news

new Swiper(".column__swiper", {
    navigation: {
        nextEl: ".column .swiper-button-next",
        prevEl: ".column .swiper-button-prev"
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