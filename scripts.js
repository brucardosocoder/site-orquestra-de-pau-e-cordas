// Código para o scroll automático
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector("header").offsetHeight,
            behavior: "smooth"
        });
    }
});
