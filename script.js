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

// Función musica"
const invitation = document.querySelector(".invitation");

const idMusica = document.getElementById("id-musica");

idMusica.play();

invitation.addEventListener("click", function () {
    if (idMusica.paused) {
        idMusica.play();
    }
    else {
        idMusica.pause();
    }
});
