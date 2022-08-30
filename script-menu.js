let statusMenu = false

function openAndCloseMenu () {
    const btn = document.querySelector (".content-menu");
    const btnMenu = document.querySelector (".btn-menu");

    if (!statusMenu){
        btn.style = "display: flex";
        statusMenu = true;
        btnMenu.innerHTML = `<i class="fa-solid fa-xmark"></i>`

    } else {
        btn.style = "display: none";
        statusMenu = false;
        btnMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
}