const sideMenu = document.querySelector("#side-menu");
const burgerMenuBtn = document.querySelector("#burger-menu");

burgerMenuBtn.onclick = (e) => {
    sideMenu.classList.toggle("menu-hidden");
}




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
        console.log(e.target.parentNode.parentNode.parentNode)
    });
});