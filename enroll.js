// FORM SUBMIT
document.getElementById("enrollForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const course = document.getElementById("course").value;

  if (!username || !password || !name || !email || !phone || !course) {
    alert("Please fill out all fields.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  document.getElementById("successMsg").innerText =
    "✅ Account created! Welcome " + username;

  document.getElementById("enrollForm").reset();
});

// CLOSE BUTTON
function goBack() {
  window.location.href = "index.html";
}
