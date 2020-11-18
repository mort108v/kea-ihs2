let jsonTeam;

let temp = document.querySelector("template");

let listPointer = document.querySelector("#container");
let filter = "alle-teams";

document.addEventListener("DOMContentLoaded", hentdata);

const link = "http://nobisnet.dk/kea/09_wordpress/ihs/wordpress-5.5.3/wordpress/wp-json/wp/v2/teambuilding";

async function hentdata() {
    const respons = await fetch(link);
    jsonTeam = await respons.json();
    show(jsonTeam);
}

function show(jsonTeam) {
    console.log(listPointer)

    listPointer.innerHTML = "";

    //løb igennem array "fag"
    jsonTeam.forEach(teamkurser => {
        if (filter == "alle-teams" || filter == teamkurser.name[0]) {
            console.log(filter);

            const klon = temp.cloneNode(true).content;

            klon.querySelector(".billede-kort").src = teamkurser.billede.guid;
            klon.querySelector(".navn").textContent = teamkurser.title.rendered;

            listPointer.appendChild(klon);
        }
    })
}
    hentdata();
