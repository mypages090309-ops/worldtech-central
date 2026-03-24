document.getElementById("enrollForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  document.getElementById("successMsg").innerText =
    "✅ Successfully enrolled, " + name + " (" + course + ")";

  this.reset();
});