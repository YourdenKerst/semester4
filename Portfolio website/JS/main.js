let lastScrollY = 0; // Huidige scrollpositie
const speed = 2; // Beweging snelheid

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // Bepaal de huidige scrollpositie
  const direction = scrollY > lastScrollY ? 1 : -1; // Scroll richting
  lastScrollY = scrollY;

  document.querySelectorAll(".line").forEach((line, index) => {
    const span = line.querySelector("span");
    const currentTransform = parseFloat(
      getComputedStyle(span).transform.split(",")[4] || 0
    );
    // Beweging: Boven en onder normaal, midden omgekeerd
    const offset =
      currentTransform + (direction * speed * (index === 1 ? -1 : 1));
    span.style.transform = `translateX(${offset}px)`;
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="index.html#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").split("#")[1];
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();

        // Bereken de positie van het element en voeg 20vh toe
        const offset = window.innerHeight * -0.2; // 20vh in pixels
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

        // Smooth scroll naar de aangepaste positie
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});



document.getElementById("animatedButton").addEventListener("click", function () {
  const button = this;
  button.classList.add("animate");
  
  // Wacht tot de animatie is afgelopen voordat je doorgaat naar de nieuwe pagina
  setTimeout(() => {
    window.location.href = "portfolio.html"; // Vervang dit met je gewenste URL
  }, 600); // Dit moet overeenkomen met de animatieduur
});

