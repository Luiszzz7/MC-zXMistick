function toggleMenu() {
    let menu = document.getElementById("menu");
    let menuContainer = document.getElementById("menu-container");

    if (menu.style.display === "block") {
        menu.style.display = "none";  // Cierra el menú
        menuContainer.style.display = "block"; // Muestra el icono de 3 barras
    } else {
        menu.style.display = "block"; // Abre el menú
        menuContainer.style.display = "block"; // Asegura que el icono está visible
    }
}

function mostrarIP() {
    document.getElementById("info-ip").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu-container").style.display = "none";
}

function cerrarIP() {
    document.getElementById("info-ip").style.display = "none";
    document.getElementById("menu-container").style.display = "block";
}

function mostrarTienda() {
    document.getElementById("menu-tienda").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu-container").style.display = "none";
}

function cerrarTienda() {
    document.getElementById("menu-tienda").style.display = "none";
    document.getElementById("menu-container").style.display = "block";
}
