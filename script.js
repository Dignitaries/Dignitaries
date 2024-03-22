

const hambergerButton = document.querySelector(".hambergerButton");
const hambergerDiv = document.querySelector(".header-icon");
const mobileNav = document.querySelector(".mobile-nav");

hambergerButton.addEventListener("click", toggleMobileNav);

function toggleMobileNav() {
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }
}
