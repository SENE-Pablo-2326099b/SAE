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