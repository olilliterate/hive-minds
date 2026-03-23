document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    // Clear previous errors
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    email.classList.remove("is-invalid");
    password.classList.remove("is-invalid");

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|ac\.uk)$/;

    if (!email.value.trim()) {
      email.classList.add("is-invalid");
      document.getElementById("emailError").innerText = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(email.value)) {
      email.classList.add("is-invalid");
      document.getElementById("emailError").innerText =
        "Enter a valid email (.com or .ac.uk)";
      isValid = false;
    }

    // Password validation
    if (!password.value.trim()) {
      password.classList.add("is-invalid");
      document.getElementById("passwordError").innerText =
        "Password is required";
      isValid = false;
    } else if (password.value.length < 6) {
      password.classList.add("is-invalid");
      document.getElementById("passwordError").innerText =
        "Password must be at least 6 characters";
      isValid = false;
    }

    // If valid (frontend only)
    if (isValid) {
      // 🔹 Placeholder for backend API

      // 🔹 Frontend-only mock (localStorage check)
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        (u) => u.email === email.value && u.password === password.value,
      );

      if (!user) {
        alert("Invalid credentials - please try again");
        return;
      }

      alert("Login successful");

      // Redirect based on role
      if (user.role === "teacher") {
        window.location.href = "teacher-dashboard.html";
      } else {
        window.location.href = "student-dashboard.html";
      }
    }
  });
});
