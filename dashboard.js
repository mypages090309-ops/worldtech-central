// GET USER
const user = JSON.parse(localStorage.getItem("user"));

// PROTECT PAGE
if (!user) {
  window.location.href = "login.html";
}

// DISPLAY USER DATA
document.getElementById("username").innerText = user.username;
document.getElementById("name").innerText = user.name;
document.getElementById("course").innerText = user.course;

// LOGOUT
function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}
