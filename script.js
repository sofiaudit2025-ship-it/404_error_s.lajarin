function clock() {
    let hour = new Date().toLocaleTimeString();
    document.getElementById("clock").innerText =
        "HORA DEL INCIDENTE: " + hour;
}

setInterval(clock, 1000);
clock();

