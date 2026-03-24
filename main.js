// Initialize animations
AOS.init({
  duration: 1000,
  once: true
});

// Smooth scroll
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// CTA button
document.querySelector(".cta").addEventListener("click", () => {
  alert("Enrollment system coming soon 🚀");
});
