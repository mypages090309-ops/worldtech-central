if (result.success) {

  // 🔥 SAVE USER DATA (IMPORTANT!)
  localStorage.setItem("user", JSON.stringify(result.user));

  document.getElementById("message").innerText =
    "✅ Login successful! Redirecting...";

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1500);
}
