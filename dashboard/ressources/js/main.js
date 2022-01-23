const sideMenu = document.querySelector("#side-menu");
const burgerMenuBtn = document.querySelector("#burger-menu");

burgerMenuBtn.onclick = (e) => {
    sideMenu.classList.toggle("menu-hidden");
}

function hideMenuSmallScreen() {
    let width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    if(width <= 768) {
        if(!sideMenu.classList.contains("menu-hidden")) {
            sideMenu.classList.add("menu-hidden");
        }
    }
}
hideMenuSmallScreen();
window.onresize = hideMenuSmallScreen;


// Modals
const modals = document.querySelectorAll(".modal-container");
const closeModalBtns = document.querySelectorAll(".modal-close");

function closeModal(modal) {
    modal.classList.remove("modal-active");
    document.body.style.position = 'initial';
}

modals.forEach(modal => {
    modal.addEventListener("click", e => {
        if(e.target.classList.contains("modal-container")) {
            closeModal(e.target);
        }
    });
})

closeModalBtns.forEach(e => {
    e.addEventListener("click", (e) => {
        closeModal(e.target.parentNode.parentNode.parentNode);
    });
});


// Ajouter class active au lien automatiquement
const page = location.href.split("/")[location.href.split("/").length - 1].split(".")[0]
const sideNav = document.querySelector("#side-nav")
sideNav.querySelectorAll("li").forEach(el => {
    let link = el.querySelector("a").href.split("/")[el.querySelector("a").href.split("/").length - 1]
    console.log(link)
    if(link.includes(page)) {
        el.classList.add("active");
    }
    if(location.pathname[location.pathname.length - 1] === "/") {
        if(location.href.split("/")[location.href.split("/").length - 2] === "dashboard") {
            el.classList.remove("active");
            sideNav.querySelectorAll("li")[0].classList.add("active")
        }
    }
})

document.querySelector(".side-nav-bottom-element").querySelector("li").classList.remove("active")
