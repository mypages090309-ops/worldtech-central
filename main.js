// AOS
AOS.init({
  duration: 1000,
  once: true
});

// Mobile menu
document.getElementById("hamburger").onclick = () => {
  document.getElementById("navLinks").classList.toggle("active");
};

// Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    color: { value: "#38bdf8" },
    size: { value: 3 },
    move: { speed: 1.5 }
  }
});

// 3D tilt effect
VanillaTilt.init(document.querySelectorAll(".course-card"), {
  max: 15,
  speed: 400
});
