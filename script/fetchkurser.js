let jsonKurser;

let temp = document.querySelector("template");

let listPointer = document.querySelector("#container");
let filter = "alle-kurser";

document.addEventListener("DOMContentLoaded", hentdata);

const link = "http://nobisnet.dk/kea/09_wordpress/ihs/wordpress-5.5.3/wordpress/wp-json/wp/v2/ugekurser/";

async function hentdata() {
    const respons = await fetch(link);
    jsonKurser = await respons.json();
    show(jsonKurser);
}

function show(jsonKurser) {
    console.log(listPointer)

    listPointer.innerHTML = "";

    //løb igennem array "kurser"
    jsonKurser.forEach(kurser => {
        if (filter == "alle-kurser" || filter == kurser.name[0]) {
            console.log(filter);

            const klon = temp.cloneNode(true).content;

            klon.querySelector(".billede-kort").src = kurser.billede.guid;
            klon.querySelector(".navn").textContent = kurser.title.rendered;

            listPointer.appendChild(klon);
        }
    })
}
    hentdata();
