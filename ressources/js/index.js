// Menu on mobile
const toggleMenuBtn = document.querySelectorAll(".toggle-menu");
const mobileNav = document.querySelector("#mobile-nav");

toggleMenuBtn.forEach(el => {
    el.addEventListener("click", () => {
        mobileNav.classList.toggle("menu-active");
        if(document.body.style.position == 'fixed') {
            document.body.style.position = 'initial';
        }else {
            document.body.style.position = 'fixed';
        }
        console.log("toggeled");
    });
});


// Modals
const connexionBtns = document.querySelectorAll("#connexion-btn");
const inscriptionBtns = document.querySelectorAll("#inscription-btn");
const connexionModal = document.querySelector("#connexion-modal");
const inscriptionModal = document.querySelector("#inscription-modal");
const modals = document.querySelectorAll(".modal-container");
const closeModalBtns = document.querySelectorAll(".modal-close");


connexionBtns.forEach(connexionBtn => {
    connexionBtn.addEventListener("click", () => {
        connexionModal.classList.add("modal-active");
        document.body.style.position = 'fixed';
    });
});

inscriptionBtns.forEach(inscriptionBtn => {
    inscriptionBtn.addEventListener("click", () => {
        inscriptionModal.classList.add("modal-active");
        document.body.style.position = 'fixed';
    });
});



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
