function submitForm() {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const course = document.getElementById("course").value;

  fetch("https://enrollmentworker.q2296439.workers.dev/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password, name, email, phone, course })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      document.getElementById("successMsg").innerText = "✅ Enrolled successfully!";
    }
  });
}

function goBack() {
  window.location.href = "index.html";
}
