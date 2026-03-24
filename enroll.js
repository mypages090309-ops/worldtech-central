document.getElementById("enrollForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    course: document.getElementById("course").value
  };

  try {
    const res = await fetch("https://enrollmentworker.q2296439.workers.dev/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (result.success) {
      document.getElementById("successMsg").innerText =
        "✅ Successfully enrolled!";
      document.getElementById("enrollForm").reset();
    } else {
      alert("Something went wrong.");
    }

  } catch (err) {
    alert("Error connecting to server.");
    console.error(err);
  }
});

// CLOSE BUTTON
function goBack() {
  window.location.href = "index.html";
}
