// GET USER DATA
const user = JSON.parse(localStorage.getItem("user"));

// PROTECT PAGE
if (!user) {
  alert("Please login first.");
  window.location.href = "login.html";
}

// DISPLAY DATA
document.getElementById("username").innerText = user.username;
document.getElementById("name").innerText = user.name;
document.getElementById("course").innerText = user.course;

// LOGOUT FUNCTION
function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}