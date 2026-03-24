// FORM SUBMIT
document.getElementById("enrollForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const course = document.getElementById("course").value;

  // Simple validation
  if (!name || !email || !phone || !course) {
    alert("Please fill out all fields.");
    return;
  }

  // SUCCESS MESSAGE
  document.getElementById("successMsg").innerText =
    "✅ Successfully enrolled, " + name + " (" + course + ")";

  // CLEAR FORM
  document.getElementById("enrollForm").reset();
});


// CLOSE BUTTON FUNCTION (❌)
function goBack() {
  window.location.href = "index.html";
}
