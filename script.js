$(document).ready(function () {

    // --- RELOJ ---
    function clock() {
        let hour = new Date().toLocaleTimeString();
        $("#clock").text("HORA DEL INCIDENTE: " + hour);
    }

    setInterval(clock, 1000);
    clock();


    // --- CHAT ALIENÍGENA DESPLEGABLE ---
    let open = false;

    $("#alien-button").on("click", function () {
        open = !open;

        if (open) {
            $("#alien-chat").show().css("animation", "popup 0.4s ease-out");
        } else {
            $("#alien-chat").hide();
        }
    });

});

// --- GLITCH LINES  ---
function spawnThinGlitchLine() {
    const container = document.querySelector(".glitch-lines");
    if (!container) return;

    const line = document.createElement("div");
    line.classList.add("glitch-line");


    line.style.top = (Math.random() * 100) + "%";

 
    const duration = 150 + Math.random() * 300;

    line.style.animation = `glitchDown ${duration}ms linear`;

    container.appendChild(line);


    setTimeout(() => line.remove(), duration);
}

// generar una nueva línea cada 40-120ms
setInterval(() => {
    spawnThinGlitchLine();
}, 40 + Math.random() * 80);
