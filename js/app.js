
//Menu hamburger animations
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")
const body = document.body;

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
    body.classList.toggle('menu-open');
})

//Bouton scrollToUp
const scrltoUp = document.querySelector('.scrltoUp');

scrltoUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

//PopUp

let btn = document.getElementById("btn");
let content = document.getElementById("popup-content");

let btn_fermer = document.getElementById("btn-fermer");

btn.addEventListener("click", myFunction);

btn_fermer.addEventListener("click", function(){
    content.style.display = 'none';
})

function myFunction() {
    if (content.style.display == "block") {
        content.style.display = "none";
    }
    else {
        content.style.display = "block";
    }
}