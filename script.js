function glitchEffect() {
    const vhs = document.getElementById("vhs");

    vhs.classList.add("glitch");

    setTimeout(() => {
        vhs.classList.remove("glitch");
    }, 120);
}

function loopGlitch() {
    glitchEffect();
    const time = 3000 + Math.random() * 2000; // entre 3 y 5 segundos
    setTimeout(loopGlitch, time);
}

loopGlitch();
