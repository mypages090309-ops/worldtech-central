// Smooth scroll for navigation
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// CTA button action
document.querySelector(".cta").addEventListener("click", () => {
  alert("Enrollment feature coming soon!");
});