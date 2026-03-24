document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please enter username and password.");
    return;
  }

  try {
    const res = await fetch("https://loginworker.q2296439.workers.dev/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const result = await res.json();

    if (result.success) {

      document.getElementById("message").innerText =
        "✅ Login successful! Redirecting...";

      // OPTIONAL: save user locally (basic session)
      localStorage.setItem("user", JSON.stringify(result.user));

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);

    } else {
      document.getElementById("message").innerText =
        "❌ Invalid username or password.";
    }

  } catch (error) {
    console.error(error);
    alert("⚠️ Server error. Try again.");
  }
});
