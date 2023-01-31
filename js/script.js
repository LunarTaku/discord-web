window.onload = function () {
    const menuBtn = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-nav")

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle("is-active");
        mobileMenu.classList.toggle("is-active");
    })
}