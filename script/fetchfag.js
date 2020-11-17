let json;

let temp = document.querySelector("template");

let filter = "alle-fag";

let listPointer = document.querySelector("#container");

let buttonActive = document.querySelector("button.filter.active");
console.log(buttonActive);

document.addEventListener("DOMContentLoaded", hentdata);

const link = "http://nobisnet.dk/kea/09_wordpress/ihs/wordpress-5.5.3/wordpress/wp-json/wp/v2/fag?per_page=100";

async function hentdata() {
    const respons = await fetch(link);
    json = await respons.json();
    addEventListenerToButtons();
    show(json);
}

function show() {


    listPointer.innerHTML = "";

    //løb igennem array "fag"
    json.forEach(fag => {

        if (filter == "alle-fag" || filter == fag.categories[0]) {
            console.log(filter);

            const klon = temp.cloneNode(true).content;

            klon.querySelector(".billede-kort").src = fag.billede_kort.guid;
            klon.querySelector(".navn").textContent = fag.title.rendered;
            klon.querySelector(".indhold").addEventListener("click", function () {
                fagClick(fag.id)
            });

            listPointer.appendChild(klon);
        }
    })

}

function fagClick(id) {
    console.log("ID", id);
    window.location.href = "singleview_fag.html?id=" + id;
}

function addEventListenerToButtons() {
    document.querySelectorAll(".filter").forEach((btn) => {
        btn.addEventListener("click", filterBTNs);
    });
}

function filterBTNs() {
    filter = this.dataset.fag;
    document.querySelector("h1").textContent = this.innerHTML;
    document.querySelectorAll(".filter").forEach((btn) => {
        btn.classList.remove("active");
    })
    this.classList.add("active");

    buttonActive = document.querySelector("button.filter.active");

    show(json);
}

hentdata();
