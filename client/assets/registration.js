document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;

    // Inputs (ELEMENTS, not values)
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const school = document.getElementById("school");
    const className = document.getElementById("className");

    // Values
    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const schoolVal = school.value.trim();
    const classVal = className.value.trim();

    // Clear previous errors
    document
      .querySelectorAll(".invalid-feedback")
      .forEach((el) => (el.innerText = ""));
    document.querySelectorAll(".form-control").forEach((input) => {
      input.classList.remove("is-invalid", "is-valid");
    });

    // ===== VALIDATION =====

    if (firstNameVal === "") {
      setError(firstName, "First name is required");
      isValid = false;
    } else setSuccess(firstName);

    if (lastNameVal === "") {
      setError(lastName, "Last name is required");
      isValid = false;
    } else setSuccess(lastName);

    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|ac\.uk)$/;
    if (!emailPattern.test(emailVal)) {
      setError(email, "Enter a valid email (.com or .ac.uk)");
      isValid = false;
    } else setSuccess(email);

    if (passwordVal === "") {
      setError(password, "Password is required");
      isValid = false;
    } else if (passwordVal.length < 6) {
      setError(password, "Password must be at least 6 characters");
      isValid = false;
    } else setSuccess(password);

    if (schoolVal === "") {
      setError(school, "School name is required");
      isValid = false;
    } else setSuccess(school);

    if (classVal === "") {
      setError(className, "Class / Year is required");
      isValid = false;
    } else setSuccess(className);

    // Role
    const role = document.querySelector('input[name="role"]:checked');
    if (!role) {
      alert("Please select a role");
      isValid = false;
    }

    // If all validations pass, save user to localStorage
    if (isValid) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const newUser = {
        firstName: firstNameVal,
        lastName: lastNameVal,
        email: emailVal,
        password: passwordVal,
        school: schoolVal,
        className: classVal,
        role: role.value,
      };

      // Check if user exists
      const existingUser = users.find((u) => u.email === emailVal);
      if (existingUser) {
        setError(email, "User already exists");
        return;
      }

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful - you can now log in!");

      //connect with backend here in future

      form.reset();
    }
  });

  // HELPER FUNCTIONS FOR SETTING ERRORS AND SUCCESS STATES

  function setError(input, message) {
    input.classList.add("is-invalid");
    document.getElementById(input.id + "Error").innerText = message;
  }

  function setSuccess(input) {
    input.classList.add("is-valid");
  }
});
