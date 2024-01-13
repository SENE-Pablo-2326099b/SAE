
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

// changement de contenu

let contents = {
    "defilerCod": {
        "h_change": "Adapt your mod to your needs",
        "p_change": "You can add your own custom functions, create and imagine your own vision of the game.",
        "h_change2": "Built for simplicity",
        "p_change2": "With our Lua Scripting API, you can create your own mod in a few lines of code."
    },
    "defilerRev": {
        "h_change": "Explore the game functions in depth",
        "p_change": "Pick up the game's functions and learn how to use them to create your own mod.",
        "h_change2": "Built for simplicity",
        "p_change2": "With our personnalized Reverse Engineering API, you can explore the game's functions in depth. You can also use what you discover from the game's code in your own mod."
    },
    "defilerDes": {
        "h_change": "Create your own UI",
        "p_change": "Create your own UI and add it to the game.",
        "h_change2": "Built for simplicity",
        "p_change2": "With our UI API, you can create your own UI in a few lines of code."
    },
    "defilerPik": {
        "h_change": "Pick from already existing mods, games and UIs",
        "p_change": "You can pick from already existing mods, games and UIs and add them to your mod. or you can create your own.",
        "h_change2": "Built for simplicity",
        "p_change2": "With our marketplace, you decide what's best for you."
    }
};

let buttons = ["defilerCod", "defilerRev", "defilerDes", "defilerPik"];

for (let button_name of buttons) {
    let button = document.getElementsByClassName(button_name)[0];
    let current_selected = document.getElementById("current_selected");
    button.addEventListener("click", function(e) {

        current_selected.id = "";
        button.id = "current_selected";
        document.getElementById("h_change").innerHTML = contents[button_name]["h_change"];
        document.getElementById("p_change").innerHTML = contents[button_name]["p_change"];
    });
}


// changement de style

let white_button = document.getElementById("white");
let dark_button = document.getElementById("dark");

let old_link;

function addStyleSheet(url) {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    document.getElementsByTagName('HEAD')[0].appendChild(link);
    return link;
 }

white_button.addEventListener("click", function(e){
    if (old_link) {
        old_link.remove();
    }
    let href = document.styleSheets[0].href;
    // changement de style
    let new_href = href.slice(0, href.lastIndexOf('/')+1) + "styleBlanc.css";
    old_link = addStyleSheet(new_href);
})

dark_button.addEventListener("click", function(e){
    if (old_link) {
        old_link.remove();
    }
    let href = document.styleSheets[0].href;
    // changement de style
    let new_href = href.slice(0, href.lastIndexOf('/')+1) + "styleNoir.css";
    old_link = addStyleSheet(new_href);
})

// ... document.styleSheets[0].href = "dossier/styleblanc.css"; 
