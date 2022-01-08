const toggleMenuBtn = document.querySelectorAll(".toggle-menu");
const mobileNav = document.querySelector("#mobile-nav")

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
})