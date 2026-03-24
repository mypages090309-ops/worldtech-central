// AOS animation init
AOS.init({
  duration: 1000,
  once: true
});

// Smooth scroll
document.querySelectorAll(".nav-links a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// CTA
document.querySelector(".cta").addEventListener("click", () => {
  alert("Enrollment system coming soon 🚀");
});
