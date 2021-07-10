const body = document.querySelector("body");
window.addEventListener("load", function () {
    let isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
    if (isMobile) {
        body.classList.add("_touch");
    } else {
        body.classList.add("_pc");
    }
});
//подгрузка json

//------------------------------
new Swiper(".result-block", {
    navigation: {
        nextEl: ".sub-menu__inner .swiper-button-next",
        prevEl: ".sub-menu__inner .swiper-button-prev"
    },
    initialSlide: 0,
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        470: {
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
    navigation: {
    nextEl: ".video__inner .swiper-button-next",
    prevEl: ".video__inner .swiper-button-prev"
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
    freeMode: true,
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
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - (document.querySelector(".header__wrapper").offsetHeight + 20);
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
/*--------------------------*/
let spollerI = document.querySelector(".cart__title");
spollerI.addEventListener("click", function (e) {
    let sIco = document.querySelector(".icon-next");
    sIco.classList.toggle("_close-icon");    
});
spollerI.addEventListener("click", function (e) {
    let sArr = document.querySelectorAll(".wrapper__city-cart");
     for (let i = 1; i < sArr.length; i++) {
        sArr[i].classList.toggle("_spoller-active");
    }
});
document.querySelectorAll(".name-table").forEach((item) =>
    item.addEventListener("click", () => {
        const parent = item.nextElementSibling; 
        if (parent.classList.contains("_gr-active")) {
            parent.classList.remove("_gr-active");
            item.classList.remove("_name-table");
        } else {
            document.querySelectorAll(".team__gr")
            .forEach((child) => child.classList.remove("_gr-active"))
            parent.classList.add("_gr-active");
            item.classList.add("_name-table");
        }   
    })      
)
//header
let contentP = document.querySelector(".content");
window.addEventListener("load", function (e) {
    let headerH = document.querySelector(".header__wrapper").offsetHeight + "px";
    contentP.style.paddingTop = String(headerH);
});
/*потрібно доробити
window.addEventListener("resize", function (e) {
    let headerH = document.querySelector(".header__wrapper").offsetHeight + "px";
    contentP.style.paddingTop = String(headerH);
});*/
let teamTitle = document.querySelector(".team-section__title");
if (teamTitle) {
    let teams = document.querySelector(".teams-list");
    teamTitle.addEventListener("click", () => {
        teamTitle.classList.toggle("_close-icon");
        teams.classList.toggle("_close-teams");
    });
}



/*
async function getNews() {
    const file = "json/slidenew.json";
    let response = await fetch(file, {
        method: "GET"
    });
     
    if (response.ok) {
        let result = await response.json();
        loadNews(result);
    } else {
        console.log("Ошибка");
    }
}
function loadNews(data) {
    data.news.forEach(item => {
        const newsId = .id;
        const newsUrl = .url;
        const newsImg = .img;
        const newsDate = .date;
        const newsName = .name;
    });
}*/
const popupLinks = document.querySelectorAll(".popup-link");
const lockPadding = document.querySelectorAll(".locck-padding");
let unlock = true;
const timeout = 800;
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
            popupClose(el.closest(".sign-menu"));
            e.preventDefault();
        });
    }
}
function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector(".sign-menu.open");
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add("open");
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest(".sign-menu__window")) {
                popupClose(e.target.closest(".sign-menu"))
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
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.getElementsByClassName.paddingRight = lockPaddingValue;
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
/*------------------videoplayer */
document.querySelector(".play").onclick = play;
document.querySelector(".pause").onclick = pause;
document.querySelector(".stop").onclick = stop;
document.querySelector(".speed-up").onclick = speedUp;
document.querySelector(".speed-down").onclick = speedDown;
document.querySelector(".speed-normal").onclick = speedNormal;
document.querySelector(".volume").oninput = videoVolume;

let video;
let display;
let progress;

video = document.querySelector(".video-player");
progress = document.querySelector(".progress");
video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;

function play() {
    video.play();
 }
function pause() {
     video.pause();
 }
function stop() {
    video.pause();
    video.currentTime = 0;
 }
function speedUp() {
    video.play();
    video.playbackRate = 2;
 }
function speedDown() {
    video.play();
    video.playbackRate = 0.5;
 }
function speedNormal() {
    video.play();
    video.playbackRate = 1;
 }
function videoVolume() {
    let v = this.value;
    video.volume = v / 100;
}
function progressUpdate() {
    let d = video.duration;
    let c = video.currentTime;
    progress.value = (100 * c) / d;
}
function videoRewind() {
    let w = this.offsetWidth;
    let o = event.offsetX;
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o / w);
    video.play();
}






