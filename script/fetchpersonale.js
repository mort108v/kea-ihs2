let jsonPersonale;

let temp = document.querySelector("template");

let listPointer = document.querySelector("#container");
let filter = "alle-personer";

document.addEventListener("DOMContentLoaded", hentdata);

const link = "http://nobisnet.dk/kea/09_wordpress/ihs/wordpress-5.5.3/wordpress/wp-json/wp/v2/personale/";

async function hentdata() {
    const respons = await fetch(link);
    jsonPersonale = await respons.json();
    show();
}

function show() {
    console.log(listPointer)

    listPointer.innerHTML = "";

    //løb igennem array "fag"
    jsonPersonale.forEach(person => {
        if (filter == "alle-personer" || filter == person.name[0]) {
            console.log(filter);

            const klon = temp.cloneNode(true).content;

            klon.querySelector(".stilling").textContent = person.stilling;
            klon.querySelector(".billede-kort").src = person.billede.guid;
            klon.querySelector(".navn").textContent = person.navn;


            listPointer.appendChild(klon);
        }
    })
}


hentdata();
