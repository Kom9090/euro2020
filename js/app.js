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
burgerChange.addEventListener("click", function (e) {
    body.classList.toggle("_lock");
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
document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest(".header__menu-icon")) {
        body.classList.remove("_lock");
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
                _slideToggle(spollerTitle.nextElementSibling, 500);
            }
            e.preventDefault();
        }
    }
    function hideSpollersBody(spollersBlock) {
        const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._close-spr");
        if (spollerActiveTitle) {
            spollerActiveTitle.classList.remove("_close-spr");
            _slideUp(spollerActiveTitle.nextElementSibling, 300);
        }
    }
}

let _slideUp = (target, duration = 300) => {
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
let _slideDown = (target, duration = 300) => {
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
let _slideToggle = (target, duration = 300) => {
    if (target.hidden) {
        return _slideDown(target, duration);
    } else {
        return _slideUp(target, duration);
    }
}

// динамический адаптив

"use strict";

function DynamicAdapt(type) {
    this.type = type;
}

DynamicAdapt.prototype.init = function () {
    const _this = this;
    // массив объектов
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    // массив DOM-элементов
    this.nodes = document.querySelectorAll("[data-da]");

    // наполнение оbjects объктами
    for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        const data = node.dataset.da.trim();
        const dataArray = data.split(",");
        const оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector(dataArray[0].trim());
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects);

    // массив уникальных медиа-запросов
    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
        return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
    });

    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    for (let i = 0; i < this.mediaQueries.length; i++) {
        const media = this.mediaQueries[i];
        const mediaSplit = String.prototype.split.call(media, ',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];

        // массив объектов с подходящим брейкпоинтом
        const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
            return item.breakpoint === mediaBreakpoint;
        });
        matchMedia.addListener(function () {
            _this.mediaHandler(matchMedia, оbjectsFilter);
        });
        this.mediaHandler(matchMedia, оbjectsFilter);
    }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.moveTo(оbject.place, оbject.element, оbject.destination);
        }
    } else {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            if (оbject.element.classList.contains(this.daClassname)) {
                this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        }
    }
};

// Функция перемещения
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

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
        parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
        parent.insertAdjacentElement('beforeend', element);
    }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
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

// прокрутка к якорю




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
//кнопка наверх
const showAn = document.querySelector(".scroll-top");
window.onscroll = () => {
    if (window.scrollY > 700) {
        showAn.classList.remove("_show-top");
    }
    else {
        showAn.classList.add("_show-top");
    }
};

// video

new Swiper(".videos__swiper", {
    navigation: {
        nextEl: ".videos__inner .swiper-button-next",
        prevEl: ".videos__inner .swiper-button-prev"
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        780: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
    spaceBetween: 30,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    }
});

//tooltip
tippy("[data-tippy-content]", {
    followCursor: 'horizontal',
    maxWidth: 350,
    theme: "light-border",
    delay: [300, 0],
});

const gameLinkArr = document.querySelectorAll(".game__link");
const firstTeam = document.querySelectorAll("[data-goalf]");
const secondTeam = document.querySelectorAll("[data-goals]");
for (let i = 0; i < gameLinkArr.length; i++) {
    gameLinkArr[i].addEventListener("mouseover", function (e) {
        let goallf = firstTeam[i].dataset.goalf;
        let goalls = secondTeam[i].dataset.goals;
        let lineClass = goallf == "" || goalls == "" ? "" : "tooltip-line";

        tippy(gameLinkArr[i], {
            content: `<div class="tooltip__team">
                    <div class="tooltip__event">
                        <span class="tooltip__name">${goallf}</span>
                    </div>
                </div>
                <div class="${lineClass}"></div>
                <div class="tooltip__team">
                    <div class="tooltip__event">
                        <span class="tooltip__name">${goalls}</span>
                    </div>
                </div>`,
            placement: 'bottom',
            maxWidth: 220,
            delay: 200,
            theme: "light-border",
            allowHTML: true,
        });
    });
}






//валидация

document.addEventListener("DOMContentLoaded", () => {

    const form = document.forms[0];
    const inputs = form.elements;

    for (let i = 0; i < inputs.length; i++) {

        let input = inputs[i];
        let err = document.querySelector(`.${input.classList} + span.errors`);

        //проверка после потери фокуса
        input.addEventListener("blur", function () {
            if (input.validity.valid || input.validity.valueMissing) {
                err.textContent = "";
                err.className = "errors";
                input.classList.remove("_active");
            } else {
                showErrorBlur(input, err);
            }
        });

        //проверка после произведенных изминений
        input.addEventListener("input", function () {
            if (input.validity.valid) {
                input.classList.add("_valid");
            } else {
                err.textContent = "";
                err.className = "errors";
                input.classList.remove("_valid");
            }
        });

        //проверка по отправке формы
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            if (!input.validity.valid) {
                showErrorSubmit(input, err);
            }
            else {
                submit();
            }
        });
    }

    //функция отображения ошибок после потери фокуса
    function showErrorBlur(input, err) {
        //проверка на длину заполненного поля
        if (input.validity.tooShort) {
            err.textContent = `Введите минимум ${input.minLength} символов.`;
        }
        //проверка на тип введенных даных
        else if (input.validity.typeMismatch) {
            err.textContent = 'Не соотвествие формату поля';
        }
        //проверка на соответствие паттерну, если он есть в поле
        else if (input.validity.patternMismatch) {
            err.textContent = 'Не соотвествие формату поля';
        }
        //добавляем красную рамку полю и статус ошибки
        err.className = 'errors _null';
        input.classList.add("_active");
    }

    //функция отображения ошибок при попытке отправить форму
    function showErrorSubmit(input, err) {
        //проверка на то, заполненно ли поле
        if (input.validity.valueMissing) {
            err.textContent = 'Поле не должно быть пустым';
        }
        //проверка на соответсвие данных паттерну
        else if (input.validity.patternMismatch) {
            err.textContent = 'Не соотвествие формату поля';
        }
        //проверка на длинну введенных символов
        else if (input.validity.tooShort) {
            err.textContent = `Введите минимум ${input.minLength} символов.`;
        }
        //проверка на тип введенных даных
        else if (input.validity.typeMismatch) {
            err.textContent = 'Не соотвествие формату поля';
        }

        //добавляем красную рамку полю и статус ошибки
        err.className = 'errors _null';
        input.classList.add("_active");
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

