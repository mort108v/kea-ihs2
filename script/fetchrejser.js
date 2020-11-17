let jsonRejser;

let temp = document.querySelector("template");

let listPointer = document.querySelector("#container");
let filter = "alle-rejser";

document.addEventListener("DOMContentLoaded", hentdata);

const link = "http://nobisnet.dk/kea/09_wordpress/ihs/wordpress-5.5.3/wordpress/wp-json/wp/v2/rejser";

async function hentdata() {
    const respons = await fetch(link);
    jsonRejser = await respons.json();
    show(jsonRejser);
}

function show(jsonRejser) {
    console.log(listPointer)

    listPointer.innerHTML = "";

    //løb igennem array "fag"
    jsonRejser.forEach(rejser => {
        if (filter == "alle-rejser" || filter == rejser.name[0]) {
            console.log(filter);

            const klon = temp.cloneNode(true).content;

            klon.querySelector(".billede-kort").src = rejser.billede_kort.guid;
            klon.querySelector(".navn").textContent = rejser.title.rendered;

            listPointer.appendChild(klon);
        }
    })
}
    hentdata();
