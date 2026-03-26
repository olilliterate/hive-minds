const leaderboardBtn = document.getElementById("leaderboard");
const leaderboardSection = document.getElementById("leaderboardSection");
const leaderboardList = document.getElementById("leaderboardList");
const closeLeaderboard = document.getElementById("closeLeaderboard");

leaderboardBtn.addEventListener("click", async () => {
  document.querySelector(".game-board").classList.add("d-none");
  leaderboardSection.classList.remove("d-none");

  await loadLeaderboard();
});

closeLeaderboard.addEventListener("click", () => {
  leaderboardSection.classList.add("d-none");
});

async function loadLeaderboard() {
  //  Spinner inside function
  leaderboardList.innerHTML = `
    <div class="text-center">
      <div class="spinner-border text-primary"></div>
    </div>
  `;

  try {
    const res = await fetch("http://localhost:5000/result");
    if (!res.ok) {
      throw new Error("Server error");
    }
    const result = await res.json();

    renderLeaderboard(result.data);
  } catch (err) {
    leaderboardList.innerHTML = `
      <div class="text-danger text-center">
        Failed to load leaderboard
      </div>
    `;
  }
}

function renderLeaderboard(users) {
  if (!users || users.length === 0) {
    leaderboardList.innerHTML = `
      <div class="text-center">No leaderboard data</div>
    `;
    return;
  }

  // correct sorting
  users.sort((a, b) => b.streak - a.streak);

  leaderboardList.innerHTML = users
    .map((user, index) => {
      let medal = "";
      if (index === 0) medal = "🥇";
      else if (index === 1) medal = "🥈";
      else if (index === 2) medal = "🥉";

      return `
        <div class="list-group-item leaderboard-item d-flex justify-content-between align-items-center">
          <div>
            <span class="fw-bold">${index + 1}. ${medal}</span>
            <span class="ms-2">${user.first_name}</span>
          </div>
          <span class="badge bg-primary rounded-pill score">
            ${user.streak} pts
          </span>
        </div>
      `;
    })
    .join("");
}
