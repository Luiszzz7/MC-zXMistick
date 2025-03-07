# MC-zXMistick
Página oficial de zXMistick server
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mc zXMistick</title>
    <link rel="stylesheet" href="styles.css"> <!-- Conectar CSS -->
</head>
<body>

    <!-- Menú hamburguesa -->
    <div class="menu-container" id="menu-container">
        <div class="menu-icon" onclick="toggleMenu()">☰</div>
        <div class="menu" id="menu">
            <a href="#" onclick="mostrarIP()">Servidor IP</a>
            <a href="#" onclick="mostrarTienda()">Tienda MC</a>
            <a href="https://chat.whatsapp.com/La2nOndsGpx68TOJbkUkvo" target="_blank">Contacto WhatsApp</a>
            <button onclick="toggleMenu()" class="volver-menu">Volver</button>
        </div>
    </div>

    <!-- Título -->
    <h1>Mc zXMistick</h1>

    <!-- Cuadro de Servidor IP -->
    <div id="info-ip" class="info-cuadro">
        <h2>Mc zXMistick</h2>
        <p><strong>IP:</strong> MczXMistick.axenthost.me</p>
        <p><strong>Puerto:</strong> 5468</p>
        <p>COMPATIBLE CON JAVA Y BEDROCK</p>
        <button onclick="cerrarIP()" class="volver-btn">Volver</button>
    </div>

    <!-- Menú de la Tienda -->
    <div id="menu-tienda" class="info-cuadro">
        <h2>Tienda zXMistick</h2>
        <div class="tienda-opciones">
            <div class="opcion">
                <img src="espada.png" alt="Espada de Diamante">
                <p class="kits">Kits</p>
            </div>
            <div class="opcion">
                <img src="steve.png" alt="Steve con Corona">
                <p class="rangos">Rangos</p>
            </div>
        </div>
        <button onclick="cerrarTienda()" class="volver-btn">Volver</button>
    </div>

    <script src="script.js"></script> <!-- Conectar JavaScript -->
</body>
</html>

/* Fondo con textura de bedrock */
body {
    background-color: #2b2b2b;
    background-image:  
        linear-gradient(0deg, #3a3a3a 25%, transparent 25%, transparent 50%, #3a3a3a 50%, #3a3a3a 75%, transparent 75%),
        linear-gradient(90deg, #3a3a3a 25%, transparent 25%, transparent 50%, #3a3a3a 50%, #3a3a3a 75%, transparent 75%);
    background-size: 100px 100px;
    opacity: 0.9;
    color: white;
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
}

/* Título con dorado y gradiente rojo debajo */
h1, h2 {
    font-size: 50px;
    color: gold;
    text-shadow: 2px 2px 5px red, 4px 4px 10px darkred;
}

/* Menú hamburguesa */
.menu-container {
    position: absolute;
    top: 10px;
    left: 10px;
}

/* Icono del menú */
.menu-icon {
    font-size: 30px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 5px;
}

/* Estilo del menú expandido */
.menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    padding-top: 50px;
    text-align: center;
}

/* Enlaces del menú */
.menu a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 15px;
    font-size: 24px;
}

.menu a:hover {
    background: darkred;
}

/* Botón "Volver" en el menú */
.volver-menu {
    background: red;
    color: white;
    border: none;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
    width: 80%;
    font-size: 18px;
    border-radius: 5px;
    display: block;
    margin: 20px auto;
    text-align: center;
}

.volver-menu:hover {
    background: darkred;
}

/* Cuadro de información (Servidor IP y Tienda) */
.info-cuadro {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 80%;
    max-width: 400px;
}

/* Botón "Volver" */
.volver-btn {
    background: red;
    color: white;
    border: none;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    border-radius: 5px;
}

.volver-btn:hover {
    background: darkred;
}

/* Opciones de la tienda */
.tienda-opciones {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

/* Estilos para cada opción */
.opcion {
    width: 120px;
    height: 150px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

/* Imágenes dentro de las opciones */
.opcion img {
    width: 60px;
    height: 60px;
}

/* Texto de cada opción */
.kits {
    color: navy;
    font-size: 18px;
    margin-top: 10px;
}

.rangos {
    color: purple;
    font-size: 18px;
    margin-top: 10px;
}

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

