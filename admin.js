// LOAD STUDENTS
async function loadStudents() {
  try {
    const res = await fetch("https://adminworker.q2296439.workers.dev/students");
    const data = await res.json();

    const table = document.getElementById("studentTable");
    table.innerHTML = ""; // clear first

    data.forEach(student => {
      const row = `
        <tr>
          <td>${student.username}</td>
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.course}</td>
          <td>
            <button onclick="deleteStudent(${student.id})" class="delete-btn">
              Delete
            </button>
          </td>
        </tr>
      `;
      table.innerHTML += row;
    });

  } catch (error) {
    console.error("Error loading students:", error);
  }
}

loadStudents();


// DELETE STUDENT
async function deleteStudent(id) {
  const confirmDelete = confirm("Are you sure you want to delete this student?");
  if (!confirmDelete) return;

  try {
    const res = await fetch("https://adminworker.q2296439.workers.dev/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    });

    const result = await res.json();

    if (result.success) {
      alert("✅ Student deleted!");
      loadStudents(); // refresh table
    }

  } catch (error) {
    console.error("Delete error:", error);
  }
}


// LOGOUT
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}