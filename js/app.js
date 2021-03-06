const body = document.querySelector("body");

//hovers
window.addEventListener("load", function () {
    let isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
    if (isMobile) {
        body.classList.add("_touch");
    } else {
        body.classList.add("_pc");
    }
});

//burger
document.querySelector(".header__menu-icon").addEventListener("click", function () {
    const burgerIcon = document.querySelector(".header__menu-icon");
    const menuBurger = document.querySelector(".menu__list");
    burgerIcon.classList.toggle("_active-burger");
    menuBurger.classList.toggle("_active-nav");
    if (burgerIcon.classList.contains("_active-burger")) {
        bodyLock();
        document.documentElement.addEventListener("click", function (e) {
            if (!e.target.closest(".header__menu-icon")) {
                burgerIcon.classList.remove("_active-burger");
                menuBurger.classList.remove("_active-nav");
                bodyUnLock();
            }
        });
    } else {
        bodyUnLock();
    }
});


//popap
const frame = document.querySelector(".video__wrapper iframe");
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
            if (popupActive.classList.contains("popup__video")) {

                frame.setAttribute("src", "");
            }
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
    document.querySelector(".header__wrapper").style.paddingRight = lockPaddingValue;
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
        document.querySelector(".header__wrapper").style.paddingRight = "0px";
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

//label-top
document.addEventListener("DOMContentLoaded", () => {
    let input = document.querySelectorAll(".form__input");
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener("focus", function (e) {
            input[i].previousElementSibling.classList.add("_focus-input");
        });
        input[i].addEventListener("blur", function (e) {
            if (input[i].value == "") {
                input[i].previousElementSibling.classList.remove("_focus-input");
            }
        });
    }
});
//show password
document.addEventListener("DOMContentLoaded", () => {
    let passwordInput = document.querySelectorAll(".password-input");
    for (let i = 0; i < passwordInput.length; i++) {
        let showPass = passwordInput[i].parentElement.querySelector(".show-password-btn");
        passwordInput[i].addEventListener("focus", function () {
            showPass.classList.add("_focus-btn");
        });
        passwordInput[i].addEventListener("blur", function () {
            if (passwordInput[i].value == "") {
                showPass.classList.remove("_focus-btn");
            }
        });
    }
    let view = document.querySelectorAll(".show-password-btn");
    for (let i = 0; i < view.length; i++) {
        view[i].addEventListener("click", function () {
            view[i].classList.toggle("_active-show");
            let inputPd = view[i].parentElement.querySelector(".password-input");
            if (inputPd.getAttribute("type") === "password") {
                inputPd.setAttribute("type", "text");
            } else {
                inputPd.setAttribute("type", "password");
            }
        });
    }
});

//content top

let headerHeight = document.querySelector(".header__wrapper").offsetHeight + "px";
if (headerHeight !== "74px") {
    window.addEventListener("load", function (e) {
        let contentTop = document.querySelector(".content");
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
            slidesPerView: 1.4,
            slidesPerGroup: 1,
        },
        470: {
            slidesPerView: 2.4,
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

//swiper game-page

new Swiper(".stages__swiper", {
    navigation: {
        nextEl: ".stages__inner .swiper-button-next",
        prevEl: ".stages__inner .swiper-button-prev"
    },
    initialSlide: 0,
    centeredSlides: true,
    initialSlide: 6,
    breakpoints: {
        280: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        380: {
            slidesPerView: 1.3,
            slidesPerGroup: 1,
        },
        500: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        670: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        880: {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        1100: {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        1400: {
            slidesPerView: 6,
            slidesPerGroup: 1,
        }
    },
    spaceBetween: 0,
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
    simulateTouch: false,
    touchRatio: 0,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    virtual: {
        slides: (function () {
            const slides = [`<div class="swiper-slide">
                                            <a href="#" class="column__link">
                                                <div class="column__block-img">
                                                    <picture>
                                                        <source srcset="./images/belg.webp" type="image/webp">
                                                        <img src="./images/belg.jpg" alt="belg" class="column__img">
                                                    </picture>
                                                </div>
                                                <div class="column__text">
                                                    <span class="column__time">12.06, 10:00</span>
                                                    <span class="column__name">?????????????? ???? ????????: ???????????? ???? ????-????????????
                                                        ???????????????????????????? ?? ???????????????????? ???????????</span>
                                                </div>
                                            </a>
                                            <a href="#" class="column__link">
                                                <div class="column__block-img">
                                                    <picture>
                                                        <source srcset="./images/avnew.webp" type="image/webp">
                                                        <img src="./images/avnew.jpeg" alt="belg" class="column__img">
                                                    </picture>
                                                </div>
                                                <div class="column__text">
                                                    <span class="column__time">12.06, 10:00</span>
                                                    <span class="column__name">?????????????? ???? ????????: ???????????? ???? ????-????????????
                                                        ???????????????????????????? ?? ???????????????????? ???????????</span>
                                                </div>
                                            </a>
                                            <a href="#" class="column__link">
                                                <div class="column__block-img">
                                                    <picture>
                                                        <source srcset="./images/fra.webp" type="image/webp">
                                                        <img src="./images/fra.jpg" alt="belg" class="column__img">
                                                    </picture>
                                                </div>
                                                <div class="column__text">
                                                    <span class="column__time">12.06, 10:00</span>
                                                    <span class="column__name">?????????????? ???? ????????: ???????????? ???? ????-????????????
                                                        ???????????????????????????? ?? ???????????????????? ???????????</span>
                                                </div>
                                            </a>
                                            <a href="#" class="column__link">
                                                <div class="column__block-img">
                                                    <picture>
                                                        <source srcset="./images/eng.webp" type="image/webp">
                                                        <img src="./images/eng.jpg" alt="belg" class="column__img">
                                                    </picture>
                                                </div>
                                                <div class="column__text">
                                                    <span class="column__time">12.06, 10:00</span>
                                                    <span class="column__name">?????????????? ???? ????????: ???????????? ???? ????-????????????
                                                        ???????????????????????????? ?? ???????????????????? ???????????</span>
                                                </div>
                                            </a>
                                            <a href="#" class="column__link">
                                                <div class="column__block-img">
                                                    <picture>
                                                        <source srcset="./images/belg.webp" type="image/webp">
                                                        <img src="./images/belg.jpg" alt="belg" class="column__img">
                                                    </picture>
                                                </div>
                                                <div class="column__text">
                                                    <span class="column__time">12.06, 10:00</span>
                                                    <span class="column__name">?????????????? ???? ????????: ???????????? ???? ????-????????????
                                                        ???????????????????????????? ?? ???????????????????? ???????????</span>
                                                </div>
                                            </a>
                                        </div>`];

            let src = "./images/belg.jpg";
            let ds = "?????????? ???????????? ??, ???????????????????? ?? ?????????????? ????????????";
            for (var i = 0; i < 600; i += 1) {
                slides.push(`<div class="swiper-slide">
                                            <a href="#" class="column__link">
                                                <div class="column__block-img">
                                                    <picture>
                                                        <source srcset=${src} type="image/webp">
                                                        <img src=${src} alt="belg" class="column__img">
                                                    </picture>
                                                </div>
                                                <div class="column__text">
                                                    <span class="column__time">${i}1.06.2021</span>
                                                    <span class="column__name">${ds}</span>
                                                </div>
                                            </a>
                                            <a href="#" class="column__link">
                                                <div class="column__block-img">
                                                    <picture>
                                                        <source srcset=${src} type="image/webp">
                                                        <img src=${src} alt="belg" class="column__img">
                                                    </picture>
                                                </div>
                                                <div class="column__text">
                                                    <span class="column__time">${i}1.06.2021</span>
                                                    <span class="column__name">${ds}</span>
                                                </div>
                                            </a>
                                            <a href="#" class="column__link">
                                                <div class="column__block-img">
                                                    <picture>
                                                        <source srcset=${src} type="image/webp">
                                                        <img src=${src} alt="belg" class="column__img">
                                                    </picture>
                                                </div>
                                                <div class="column__text">
                                                    <span class="column__time">${i}1.06.2021</span>
                                                    <span class="column__name">${ds}</span>
                                                </div>
                                            </a>
                                            <a href="#" class="column__link">
                                                <div class="column__block-img">
                                                    <picture>
                                                        <source srcset=${src} type="image/webp">
                                                        <img src=${src} alt="belg" class="column__img">
                                                    </picture>
                                                </div>
                                                <div class="column__text">
                                                    <span class="column__time">${i}1.06.2021</span>
                                                    <span class="column__name">${ds}</span>
                                                </div>
                                            </a>
                                            <a href="#" class="column__link">
                                                <div class="column__block-img">
                                                    <picture>
                                                        <source srcset=${src} type="image/webp">
                                                        <img src=${src} alt="belg" class="column__img">
                                                    </picture>
                                                </div>
                                                <div class="column__text">
                                                    <span class="column__time">${i}1.06.2021</span>
                                                    <span class="column__name">${ds}</span>
                                                </div>
                                            </a>
                                        </div>`);
            }
            return slides;
        })(),
    },
});

//spollers 

"use strict"

const spollersArray = document.querySelectorAll("[data-spollers]");
if (spollersArray.length > 0) {
    const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
        return !item.dataset.spollers.split(",")[0];
    });
    if (spollersRegular.length > 0) {
        initSpollers(spollersRegular);
    }
    const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
        return item.dataset.spollers.split(",")[0];
    });

    if (spollersMedia.length > 0) {
        const breakpointsArray = [];
        spollersMedia.forEach(item => {
            const params = item.dataset.spollers;
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });

        let mediaQueries = breakpointsArray.map(function (item) {
            return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
        });
        mediaQueries = mediaQueries.filter(function (item, index, self) {
            return self.indexOf(item) === index;
        });

        mediaQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(",");
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);

            const spollersArray = breakpointsArray.filter(function (item) {
                if (item.value === mediaBreakpoint && item.type === mediaType) {
                    return true;
                }
            });

            matchMedia.addListener(function () {
                initSpollers(spollersArray, matchMedia);
            });
            initSpollers(spollersArray, matchMedia);
        });
    }

    function initSpollers(spollersArray, matchMedia = false) {
        spollersArray.forEach(spollersBlock => {
            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
            if (matchMedia.matches || !matchMedia) {
                spollersBlock.classList.add("_init");
                initSpollerBody(spollersBlock);
                spollersBlock.addEventListener("click", setSpollerAction);
            } else {
                spollersBlock.classList.remove("_init");
                initSpollerBody(spollersBlock, false);
                spollersBlock.removeEventListener("click", setSpollerAction);
            }
        });
    }

    function initSpollerBody(spollersBlock, hideSpollerBody = true) {
        const spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
        if (spollerTitles.length > 0) {
            spollerTitles.forEach(spollerTitle => {
                if (hideSpollerBody) {
                    spollerTitle.removeAttribute("tabindex");
                    if (!spollerTitle.classList.contains("_close-spr")) {
                        spollerTitle.nextElementSibling.hidden = true;
                    }
                } else {
                    spollerTitle.setAttribute("tabindex", "-1");
                    spollerTitle.nextElementSibling.hidden = false;
                }
            });
        }
    }
    function setSpollerAction(e) {
        const el = e.target;
        if (el.hasAttribute("data-spoller") || el.closest("[data-spoller]")) {
            const spollerTitle = el.hasAttribute("data-spoller") ? el : el.closest("[data-spoller]");
            const spollersBlock = spollerTitle.closest("[data-spollers]");
            const oneSpoller = spollersBlock.hasAttribute("data-one-spoller") ? true : false;
            if (!spollersBlock.querySelectorAll("._slide").length) {
                if (oneSpoller && !spollerTitle.classList.contains("_close-spr")) {
                    hideSpollersBody(spollersBlock);
                }
                spollerTitle.classList.toggle("_close-spr");
                _slideToggle(spollerTitle.nextElementSibling, 0);
            }
            e.preventDefault();
        }
    }
    function hideSpollersBody(spollersBlock) {
        const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._close-spr");
        if (spollerActiveTitle) {
            spollerActiveTitle.classList.remove("_close-spr");
            _slideUp(spollerActiveTitle.nextElementSibling, 0);
        }
    }
}

let _slideUp = (target, duration = 0) => {
    if (!target.classList.contains("_slide")) {
        target.classList.add("_slide");
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + "ms";
        target.style.height = target.offsetHeight + "px";
        target.offsetHeight;
        target.style.overflow = "hidden";
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.hidden = true;
            target.style.removeProperty("height");
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            target.style.removeProperty("overflow");
            target.style.removeProperty("transition-duration");
            target.style.removeProperty("transition-property");
            target.classList.remove("_slide");
        }, duration);
    }
}
let _slideDown = (target, duration = 0) => {
    if (!target.classList.contains("_slide")) {
        target.classList.add("_slide");
        if (target.hidden) {
            target.hidden = false;
        }
        let height = target.offsetHeight;
        target.style.overflow = "hidden";
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + "ms";
        target.style.height = height + "px";
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        window.setTimeout(() => {
            target.style.removeProperty("height");
            target.style.removeProperty("overflow");
            target.style.removeProperty("transition-duration");
            target.style.removeProperty("transition-property");
            target.classList.remove("_slide");
        }, duration);
    }
}
let _slideToggle = (target, duration = 0) => {
    if (target.hidden) {
        return _slideDown(target, duration);
    } else {
        return _slideUp(target, duration);
    }
}

// ???????????????????????? ??????????????

"use strict";

function DynamicAdapt(type) {
    this.type = type;
}

DynamicAdapt.prototype.init = function () {
    const _this = this;
    // ???????????? ????????????????
    this.??bjects = [];
    this.daClassname = "_dynamic_adapt_";
    // ???????????? DOM-??????????????????
    this.nodes = document.querySelectorAll("[data-da]");

    // ???????????????????? ??bjects ????????????????
    for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        const data = node.dataset.da.trim();
        const dataArray = data.split(",");
        const ??bject = {};
        ??bject.element = node;
        ??bject.parent = node.parentNode;
        ??bject.destination = document.querySelector(dataArray[0].trim());
        ??bject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        ??bject.place = dataArray[2] ? dataArray[2].trim() : "last";
        ??bject.index = this.indexInParent(??bject.parent, ??bject.element);
        this.??bjects.push(??bject);
    }

    this.arraySort(this.??bjects);

    // ???????????? ???????????????????? ??????????-????????????????
    this.mediaQueries = Array.prototype.map.call(this.??bjects, function (item) {
        return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
    });

    // ?????????????????????? ?????????????????? ???? ??????????-????????????
    // ?? ?????????? ?????????????????????? ?????? ???????????? ??????????????
    for (let i = 0; i < this.mediaQueries.length; i++) {
        const media = this.mediaQueries[i];
        const mediaSplit = String.prototype.split.call(media, ',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];

        // ???????????? ???????????????? ?? ???????????????????? ????????????????????????
        const ??bjectsFilter = Array.prototype.filter.call(this.??bjects, function (item) {
            return item.breakpoint === mediaBreakpoint;
        });
        matchMedia.addListener(function () {
            _this.mediaHandler(matchMedia, ??bjectsFilter);
        });
        this.mediaHandler(matchMedia, ??bjectsFilter);
    }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, ??bjects) {
    if (matchMedia.matches) {
        for (let i = 0; i < ??bjects.length; i++) {
            const ??bject = ??bjects[i];
            ??bject.index = this.indexInParent(??bject.parent, ??bject.element);
            this.moveTo(??bject.place, ??bject.element, ??bject.destination);
        }
    } else {
        for (let i = 0; i < ??bjects.length; i++) {
            const ??bject = ??bjects[i];
            if (??bject.element.classList.contains(this.daClassname)) {
                this.moveBack(??bject.parent, ??bject.element, ??bject.index);
            }
        }
    }
};

// ?????????????? ??????????????????????
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
        destination.insertAdjacentElement('beforeend', element);
        return;
    }
    if (place === 'first') {
        destination.insertAdjacentElement('afterbegin', element);
        return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
}

// ?????????????? ????????????????
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
        parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
        parent.insertAdjacentElement('beforeend', element);
    }
}

// ?????????????? ?????????????????? ?????????????? ???????????? ????????????????
DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
};

// ?????????????? ???????????????????? ?????????????? ???? breakpoint ?? place 
// ???? ?????????????????????? ?????? this.type = min
// ???? ???????????????? ?????? this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return -1;
                }

                if (a.place === "last" || b.place === "first") {
                    return 1;
                }

                return a.place - b.place;
            }

            return a.breakpoint - b.breakpoint;
        });
    } else {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return 1;
                }

                if (a.place === "last" || b.place === "first") {
                    return -1;
                }

                return b.place - a.place;
            }

            return b.breakpoint - a.breakpoint;
        });
        return;
    }
};

const da = new DynamicAdapt("min");
da.init();


// ?????????????????? ?? ??????????

const menuLinks = document.querySelectorAll(".anchors[data-goto]");
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - (document.querySelector(".header__wrapper").offsetHeight);
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

//???????????? ????????????
const scrollTop = document.querySelector(".scroll-top");

window.onscroll = () => {
    if (window.scrollY > 700) {
        scrollTop.classList.remove("_show-top");
    }
    else {
        scrollTop.classList.add("_show-top");
    }
};

// video swiper

new Swiper(".videos__swiper", {
    navigation: {
        nextEl: ".videos__inner .swiper-button-next",
        prevEl: ".videos__inner .swiper-button-prev"
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
        },
        300: {
            slidesPerView: 1.5,
        },
        500: {
            slidesPerView: 2,
        },
        580: {
            slidesPerView: 2.5,
        },
        780: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
    spaceBetween: 30,
    freeMode: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
});

//tooltips

tippy(document.querySelectorAll(".tippy"), {
    followCursor: 'horizontal',
    maxWidth: 350,
    theme: "light-border",
    delay: [300, 0],
    touch: false,
});
tippy(document.querySelectorAll(".helper-text"), {
    followCursor: 'horizontal',
    maxWidth: 350,
    theme: "light-border",
    delay: [300, 0],
    touch: true,
});

tippy(document.querySelectorAll(".game__link"), {
    placement: 'bottom',
    maxWidth: 220,
    delay: 200,
    theme: "light-border",
    allowHTML: true,
});




//??????????????????

document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    const forms = document.forms;

    for (let n = 0; n < forms.length; n++) {

        const form = forms[n];
        const inputs = form.querySelectorAll("input");

        for (let i = 0; i < inputs.length; i++) {

            let input = inputs[i];
            let err = document.querySelector(`#${input.id} + span.errors`);
            const password = form.querySelector(".password");
            const confirmPassword = form.querySelector(".passwordConfirm");
            let helperChange = document.querySelector(`#${input.id} ~ span.helper-text`);

            if (confirmPassword) {

                input.addEventListener("blur", function () {
                    if (input == confirmPassword) {
                        if (input.validity.valueMissing) {
                            hideError(input, err);
                        }
                        else if (confirmPassword.value !== password.value) {
                            err.textContent = `???????????? ???? ??????????????????.`;
                            showInvalid(input, err);
                        }
                        else if (input.validity.valid || input.validity.valueMissing) {
                            hideError(input, err);
                        } else {
                            showErrorBlur(input, err);
                        }
                    }
                    else if (input.validity.valid || input.validity.valueMissing) {
                        hideError(input, err);
                    } else {
                        showErrorBlur(input, err);
                    }
                });
                input.addEventListener("input", function () {
                    if (input == confirmPassword) {
                        if (confirmPassword.value !== password.value) {
                            err.textContent = `???????????? ???? ??????????????????.`;
                            showInvalid(input, err);
                            input.classList.remove("_valid");
                            helperChange.textName = "helper-check";
                            helperChange.textContent = "?";
                        }
                        else if (input.validity.valid) {
                            input.classList.add("_valid");
                            helperChange.className = "helper-check";
                            helperChange.textContent = "+";
                            err.textContent = "";
                            err.className = "errors";
                        } else {
                            hideValid(input, err, helperChange);
                        }
                    }
                    else if (input.validity.valid) {
                        input.classList.add("_valid");
                        err.textContent = "";
                        if (input !== document.querySelector(".checkbox")) {
                            helperChange.className = "helper-check";
                            helperChange.textContent = "+";
                        }
                    } else {
                        hideValid(input, err, helperChange);
                    }
                });

                form.addEventListener("submit", formSend);
                async function formSend(e) {
                    if (input == confirmPassword) {
                        if (confirmPassword.value !== password.value) {
                            err.textContent = `???????????? ???? ??????????????????.`;
                            showInvalid(input, err);
                            input.classList.remove("_valid");
                            helperChange.textName = "helper-check";
                            helperChange.textContent = "?";
                            e.preventDefault();
                        }
                        else if (!input.validity.valid) {
                            showErrorSubmit(input, err);
                            e.preventDefault();
                        }
                    }
                    else if (!input.validity.valid || confirmPassword.value !== password.value) {
                        showErrorSubmit(input, err);
                        e.preventDefault();
                    }
                    else if (inputs[0].validity.valid && inputs[1].validity.valid && inputs[2].validity.valid && inputs[3].validity.valid && inputs[4].validity.valid && confirmPassword.value == password.value) {
                        e.preventDefault();
                        form.classList.add("_sending");
                        let response = await fetch("sendmail.php", {
                            method: "POST"
                        });
                        if (response.ok) {
                            let result = await response.json();
                            alert(result.message);
                            form.reset();
                            form.classList.remove("_sending");
                        }
                        else {
                            alert("????????????");
                            form.classList.remove("_sending");
                        }
                    }
                }


            }

            else if (input !== document.querySelector(".check-m")) {

                input.addEventListener("blur", function () {
                    if (input.validity.valid || input.validity.valueMissing) {
                        hideError(input, err)
                    } else {
                        showErrorBlur(input, err);
                    }
                });


                input.addEventListener("input", function () {
                    if (input.validity.valid) {
                        input.classList.add("_valid");
                        err.textContent = "";
                    } else {
                        err.textContent = "";
                        err.className = "errors";
                        input.classList.remove("_valid");
                    }
                });


                form.addEventListener("submit", formSend);
                async function formSend(e) {
                    if (!input.validity.valid) {
                        showErrorSubmit(input, err);
                        e.preventDefault();
                    }
                    else if (inputs[0].validity.valid && inputs[1].validity.valid) {
                        e.preventDefault();
                        form.classList.add("_sending");
                        let response = await fetch("serv/server.php", {
                            method: "POST",
                            body: data
                        });
                        if (response.ok) {
                            let result = await response.text();

                            let success = document.createElement("div.succses");
                            document.querySelector(".popap-in").classList.add("_result");
                            success.innerHTML = `<p>?????????????????????? ??????????????. ${result.message}</p> <button>????</button>`;
                            form.replaceWith(success);

                        }
                        else {
                            alert("????????????");
                            form.classList.remove("_sending");
                        }

                    }
                }
            }
        }

        function showErrorBlur(input, err) {

            if (input.validity.tooShort) {
                err.textContent = `?????????????? ?????????????? ${input.minLength} ????????????????.`;
            }

            else if (input.validity.typeMismatch) {
                err.textContent = '???? ?????????????????????? ?????????????? ????????';
            }

            else if (input.validity.patternMismatch) {
                err.textContent = '???? ?????????????????????? ?????????????? ????????, ???????????????? ???????????????????? ?? ??????????????????';
            }

            showInvalid(input, err);
        }


        function showErrorSubmit(input, err) {

            if (input.validity.valueMissing) {
                if (input == document.querySelector(".checkbox")) {
                    err.textContent = '?????????????????????? ???????????????? ???? ?????????????????? ????????????';
                }
                else {
                    err.textContent = '???????? ???? ???????????? ???????? ????????????';
                }
            }

            else if (input.validity.patternMismatch) {
                err.textContent = '???? ?????????????????????? ?????????????? ????????, ???????????????? ???????????????????? ?? ??????????????????';
            }

            else if (input.validity.tooShort) {
                err.textContent = `?????????????? ?????????????? ${input.minLength} ????????????????.`;
            }

            else if (input.validity.typeMismatch) {
                err.textContent = '???? ?????????????????????? ?????????????? ????????';
            }


            showInvalid(input, err);
        }

        function hideError(input, err) {
            err.textContent = "";
            err.className = "errors";
            input.classList.remove("_active");
        }

        function hideValid(input, err, helperChange) {
            err.textContent = "";
            err.className = "errors";
            input.classList.remove("_valid");
            if (input !== document.querySelector(".checkbox")) {
                helperChange.className = "helper-text";
                helperChange.textContent = "?";
            }
        }

        function showInvalid(input, err) {
            err.className = 'errors _null';
            input.classList.add("_active");
        }

    }
});

//video

document.addEventListener("DOMContentLoaded", () => {
    const videoLinkArray = document.querySelectorAll("[data-link]");
    for (let i = 0; i < videoLinkArray.length; i++) {

        let videoLink = videoLinkArray[i];
        videoLink.addEventListener("click", () => {
            videoContent = videoLink.dataset.link.trim();
            frame.setAttribute("src", videoContent);
        });
    }
});

//tabs 

const stageBtnArr = document.querySelectorAll(".stage__btn");
for (let index = 0; index < stageBtnArr.length; index++) {
    let stages = stageBtnArr[index];
    stages.addEventListener("click", function () {
        for (n = 0; n < stageBtnArr.length; n++) {
            stageBtnArr[n].parentElement.classList.remove("_active-tab");
        }
        stages.parentElement.classList.add("_active-tab");
        hideMatches();
        if (document.querySelector(`.tab${index}`)) {
            document.querySelector(`.tab${index}`).style.display = "block";
        }
        else {
            getMatchs(index);
        }
    });
}
function hideMatches() {
    let matchesArr = document.querySelectorAll(".matches__inner");
    matchesArr.forEach(item => {
        item.style.display = "none";

    });
}
async function getMatchs(index) {
    const main = document.querySelector(".main-games");
    main.classList.add("_loading");
    let data = await fetch("json/matches.json", {
        method: "GET",
    });
    if (data.ok) {
        let result = await data.json();
        main.classList.remove("_loading");
        const tabArr = result.st[index];
        const stId = tabArr.id;
        const stContent = tabArr.link;
        let dataCart = await fetch(`${stContent}`, {
            method: "GET",
        });
        let cart = await dataCart.text();
        const div = document.createElement("div");
        div.classList.add("matches__inner");
        div.classList.add(`tab${stId}`);
        div.innerHTML = cart;
        document.querySelector(".matches-container").append(div);

    } else {
        main.classList.remove("_loading");
        alert(`???????????? ???? ???????? ????????????????, ???????????? ${data.status} ${data.statusText}`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let cityLinks = document.querySelectorAll(".cities__link");
    for (let i = 0; i < cityLinks.length; i++) {
        cityLinks[i].addEventListener("mouseover", () => {
            cityLinks[i].nextElementSibling.classList.add("_show-point");
        })
        cityLinks[i].addEventListener("mouseout", () => {
            cityLinks[i].nextElementSibling.classList.remove("_show-point");
        })
    }
});


//forget password
document.querySelector(".form-send").addEventListener("submit", formSend);
async function formSend(e) {
    e.preventDefault();
    document.querySelector(".form-send").classList.add("_sending");
    let response = await fetch("serv/server.php", {
        method: "POST",
        body: data
    });
    if (response.ok) {
        let success = document.querySelector(".forget__text");
        success.innerHTML = `<p>???????????? ?????? ???????????????????????????? ???????????? ???????????????????? ???? ?????? ?????????????????????? ??????????. ???????? ?????????????????? ???? ???????????? ???? ?????????????????????? 10 ??????????, ?????????????????? ?????????????????</p>`;
        document.querySelector(".form-send").reset();
        document.querySelector(".form-send").classList.remove("_sending");
    }
    else {
        alert("????????????");
        document.querySelector(".form-send").classList.remove("_sending");
    }
}