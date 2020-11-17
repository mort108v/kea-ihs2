document.addEventListener("DOMContentLoaded", start);

const url = "http://nobisnet.dk/kea/09_wordpress/ihs/wordpress-5.5.3/wordpress/wp-json/wp/v2/pages/13";


async function start() {
    const resspons = await fetch(url);
    const json = await resspons.json();
    vis(json);
}

function vis(data) {
    console.log(data);
    document.querySelector(".navn").textContent = data.title.rendered;
    document.querySelector("#beskrivelse").innerHTML = data.content.rendered;
}
