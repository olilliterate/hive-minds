document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let isValid = true;

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const school = document.getElementById("school");
    const className = document.getElementById("className");

    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const schoolVal = school.value.trim();
    const classVal = className.value.trim();

    // Clear errors
    document
      .querySelectorAll(".invalid-feedback")
      .forEach((el) => (el.innerText = ""));
    document.querySelectorAll(".form-control").forEach((input) => {
      input.classList.remove("is-invalid", "is-valid");
    });

    // Validation
    if (!firstNameVal) {
      setError(firstName, "First name is required");
      isValid = false;
    } else setSuccess(firstName);

    if (!lastNameVal) {
      setError(lastName, "Last name is required");
      isValid = false;
    } else setSuccess(lastName);

    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|ac\.uk)$/;
    if (!emailPattern.test(emailVal)) {
      setError(email, "Enter a valid email (.com or .ac.uk)");
      isValid = false;
    } else setSuccess(email);

    if (!passwordVal) {
      setError(password, "Password is required");
      isValid = false;
    } else if (passwordVal.length < 6) {
      setError(password, "Password must be at least 6 characters");
      isValid = false;
    } else setSuccess(password);

    if (!schoolVal) {
      setError(school, "School name is required");
      isValid = false;
    } else setSuccess(school);

    if (!classVal) {
      setError(className, "Class / Year is required");
      isValid = false;
    } else setSuccess(className);

    const role = document.querySelector('input[name="role"]:checked');
    if (!role) {
      alert("Please select a role");
      isValid = false;
    }

    if (isValid) {
      const newUser = {
        firstName: firstNameVal,
        lastName: lastNameVal,
        email: emailVal,
        password: passwordVal,
        school: schoolVal,
        yearGroup: classVal,
        role: role.value,
      };

      try {
        const response = await fetch("http://localhost:5000/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });

        const data = await response.json();

        if (response.status === 201) {
          alert("Registration successful");
          window.location.assign("login.html");
        } else {
          alert(data.err || "Registration failed");
        }
      } catch (error) {
        console.error(error);
        alert("Server error. Please try again later.");
      }

      form.reset();
    }
  });

  function setError(input, message) {
    input.classList.add("is-invalid");
    document.getElementById(input.id + "Error").innerText = message;
  }

  function setSuccess(input) {
    input.classList.add("is-valid");
  }
});
