// FORM SUBMIT
document.getElementById("enrollForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  // GET VALUES
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;

  // VALIDATION
  if (!username || !password || !name || !email || !phone || !course) {
    alert("⚠️ Please fill out all fields.");
    return;
  }

  if (password.length < 6) {
    alert("⚠️ Password must be at least 6 characters.");
    return;
  }

  const data = {
    username,
    password,
    name,
    email,
    phone,
    course
  };

  try {
    // SEND TO WORKER
    const res = await fetch("https://enrollmentworker.q2296439.workers.dev/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (result.success) {

      let seconds = 5;

      const msg = document.getElementById("successMsg");

      const interval = setInterval(() => {
        msg.innerText =
          `✅ Successfully enrolled! Welcome, ${username} | Redirecting in ${seconds}s...`;

        seconds--;

        if (seconds < 0) {
          clearInterval(interval);
          window.location.href = "login.html";
        }
      }, 1000);

      // RESET FORM
      document.getElementById("enrollForm").reset();

    } else {
      alert("❌ Failed to save data.");
    }

  } catch (error) {
    console.error(error);
    alert("⚠️ Server error. Please try again.");
  }
});


// CLOSE BUTTON (❌)
function goBack() {
  window.location.href = "index.html";
}
