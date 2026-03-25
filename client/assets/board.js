document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "login.html";
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/users/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById("welcomeMessage").textContent =
        "Welcome, " + data.name + "!";
    } else {
      console.error(data);
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }
});