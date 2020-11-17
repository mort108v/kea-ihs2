let jsonBestyrelse;

let temp = document.querySelector("template");

let listPointer = document.querySelector("#container");
let filter = "alle-bestyrelse";

document.addEventListener("DOMContentLoaded", hentdata);

const link = "http://nobisnet.dk/kea/09_wordpress/ihs/wordpress-5.5.3/wordpress/wp-json/wp/v2/bestyrelse";

async function hentdata() {
    const respons = await fetch(link);
    jsonBestyrelse = await respons.json();
    show();
}

function show() {
    console.log(listPointer)

    listPointer.innerHTML = "";

    //løb igennem array "fag"
    jsonBestyrelse.forEach(medlem => {
        if (filter == "alle-bestyrelse" || filter == medlem.name[0]) {
            console.log(filter);

            const klon = temp.cloneNode(true).content;

            klon.querySelector(".billede-kort").src = medlem.billede.guid;
            klon.querySelector(".linked-in").src = medlem.linked_in.guid;
            klon.querySelector(".navn").textContent = medlem.navn;
            klon.querySelector(".stilling").textContent = medlem.stilling;

            jsonBestyrelse.reverse();

            listPointer.appendChild(klon);
        }
    })
}


hentdata();
