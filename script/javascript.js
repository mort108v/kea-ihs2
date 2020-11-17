// HEAD

const lang = document.querySelector("#lang");

const langUK = document.querySelector(".langUK");
const langDK = document.querySelector(".langDK");

langUK.classList.add("hide");
langDK.classList.add("show");

lang.addEventListener("click", () => {
    langUK.classList.toggle("hide");
    langDK.classList.toggle("hide");
})


//NAVIGATION STARTER HER
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links (forEach går i gennem hvert link/Element)
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            //(hvis der allerede er en animation så fjernes den)
            link.style.animation = ''
        } else {
            //(hvis der ikke er en animation, så tilføjes den
            link.style.animation = `navLinkFade 0.5s ease forwards ${(index / 15)+.3}s`;
        }
    });
    //Burger Animation (her fjernes eller påsættes toggle-klassen fra css)
    burger.classList.toggle('toggle');
});

//NAVIGATION SLUTTER HER
