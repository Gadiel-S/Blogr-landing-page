const button = document.querySelector("header .hamburger");
const menu = document.querySelector("header .mobile-menu");
const links = document.querySelectorAll("header .info-title");
const infos = document.querySelectorAll("header .info");
const arrows = document.querySelectorAll("header .arrow");

button.addEventListener("click", () => {
    if(menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        button.setAttribute("src", "./images/icon-close.svg");
    } else {
        menu.classList.add("hidden");
        button.setAttribute("src", "./images/icon-hamburger.svg");
    }
    let hideinfo = document.querySelectorAll("header .info");
    hideinfo.forEach((info) => {
        if(info.classList.contains("active")) {
             info.classList.add("hidden");
             info.classList.remove("active");
       }
   })
})

links.forEach((link, index) => {
    link.addEventListener("click", () => {
        infos[index].classList.toggle("hidden");
        infos[index].classList.toggle("active");
        let activeinfos = document.querySelectorAll("header .active");
        activeinfos.forEach((info) => {
            if(activeinfos.length>1 && info!=infos[index] && info.classList.contains("active")) {
                info.classList.add("hidden");
                info.classList.remove("active");
            }
        })
        let allinfos = document.querySelectorAll("header .info");
        allinfos.forEach((info, index) => {
            if(info.classList.contains("active")) {
                arrows[index].classList.add("rotate");
            } else {
                arrows[index].classList.remove("rotate");
            }
        })
    })
})