// Année automatique dans le footer
const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} Eskander Setti | Built with HTML, CSS & JavaScript`;

// Animation de la navbar au scroll
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.1)";
        header.style.background = "rgba(255,255,255,.95)";
        header.style.backdropFilter = "blur(12px)";

    }else{

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.05)";
        header.style.background = "#fff";
        header.style.backdropFilter = "none";

    }

});
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});