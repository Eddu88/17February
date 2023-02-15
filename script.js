const container = document.getElementById("particle-container");

for (let i = 1; i <= 50; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    particle.style.opacity = `${Math.floor(Math.random() * 70) / 100}`;
    const size = Math.floor(Math.random() * 3) + 5;
    particle.style.setProperty("--particle-size", `${size}px`);
    particle.style.setProperty("--random-opacity", Math.random());

    // generate random values for the x, y, and z axes
    const randomX = Math.random();
    const randomY = Math.random();
    const randomZ = Math.random();
    particle.style.setProperty("--random-x", randomX);
    particle.style.setProperty("--random-y", randomY);
    particle.style.setProperty("--random-z", randomZ);

    particle.style.animationDelay = `-${i * 0.2}s`;
    container.appendChild(particle);
}

// Se utiliza const para declarar button y date
const button = document.querySelector(".invitation");
const date = document.querySelector(".invitation-date");

button.addEventListener("mouseover", function () {
    date.style.display = "none";
});

button.addEventListener("mouseout", function () {
    date.style.display = "block";
});

// Obtenemos el elemento HTML de la clase "invitation"
const invitation = document.querySelector(".invitation");

// Obtenemos el elemento HTML de audio
const miMusica = document.getElementById("miMusica");

// Agregamos un evento al hacer clic en la clase "invitation"
invitation.addEventListener("click", function () {
    // Si la música está pausada, la reproducimos
    if (miMusica.paused) {
        miMusica.play();
    }
    // Si la música está reproduciendo, la pausamos
    else {
        miMusica.pause();
    }
});