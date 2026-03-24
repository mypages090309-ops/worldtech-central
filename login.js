document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("https://enrollmentworker.q2296439.workers.dev/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const result = await res.json();

    if (result.success) {
      document.getElementById("message").innerText = "✅ Login successful!";
      
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);

    } else {
      document.getElementById("message").innerText = "❌ Invalid login.";
    }

  } catch (err) {
    console.error(err);
    alert("Server error.");
  }
});