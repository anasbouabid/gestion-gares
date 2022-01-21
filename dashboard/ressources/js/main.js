const sideMenu = document.querySelector("#side-menu");
const burgerMenuBtn = document.querySelector("#burger-menu");

burgerMenuBtn.onclick = (e) => {
    sideMenu.classList.toggle("menu-hidden");
}