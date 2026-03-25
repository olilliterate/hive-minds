document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let isValid = true;

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    // Clear errors
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    email.classList.remove("is-invalid");
    password.classList.remove("is-invalid");

    // Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|ac\.uk)$/;

    if (!email.value.trim()) {
      setError(email, "Email is required");
      isValid = false;
    } else if (!emailPattern.test(email.value)) {
      setError(email, "Enter valid email (.com or .ac.uk)");
      isValid = false;
    }

    if (!password.value.trim()) {
      setError(password, "Password is required");
      isValid = false;
    } else if (password.value.length < 6) {
      setError(password, "Password must be at least 6 characters");
      isValid = false;
    }

    if (isValid) {
      try {
        const response = await fetch("http://localhost:5000/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.value.trim(),
            password: password.value.trim(),
          }),
        });

        const data = await response.json();

        if (response.status === 200) {
          localStorage.setItem("token", data.token);

          alert("Login successful");

          window.location.href = "dashboard.html";
        } else {
          alert(data.err || "Login failed");
        }
      } catch (error) {
        console.error(error);
        alert("Server error");
      }
    }
  });

  function setError(input, message) {
    input.classList.add("is-invalid");
    document.getElementById(input.id + "Error").innerText = message;
  }
});
