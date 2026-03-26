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
  leaderboardList.innerHTML = `
    <div class="text-center">Loading leaderboard...</div>
  `;

  try {
    const res = await fetch("http://localhost:5000/result");
    const data = await res.json();

    renderLeaderboard(data);
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

  // sort highest score first
  users.sort((a, b) => b.score - a.score);

  leaderboardList.innerHTML = users
    .map((user, index) => {
      let medal = "";
      if (index === 0) medal = "🥇";
      else if (index === 1) medal = "🥈";
      else if (index === 2) medal = "🥉";

      return `
        <div class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span class="fw-bold">${index + 1}. ${medal}</span>
            <span class="ms-2">${user.username}</span>
          </div>
          <span class="badge bg-primary rounded-pill">
            ${user.score} pts
          </span>
        </div>
      `;
    })
    .join("");
}
