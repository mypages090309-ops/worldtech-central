// AOS
AOS.init({
  duration: 1000,
  once: true
});

// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#38bdf8" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 1.5
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});
