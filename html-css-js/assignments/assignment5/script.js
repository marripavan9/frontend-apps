document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const localScoreElement = document.getElementById("local-score");
  const sessionScoreElement = document.getElementById("session-score");
  const incrementButton = document.getElementById("increment-btn");

  // Load scores from storage or set to 0 if not present
  let localScore = parseInt(localStorage.getItem("localScore")) || 0;
  let sessionScore = parseInt(sessionStorage.getItem("sessionScore")) || 0;

  // Update score elements with initial values
  localScoreElement.textContent = localScore;
  sessionScoreElement.textContent = sessionScore;

  // Increment scores on button click
  incrementButton.addEventListener("click", function () {
    localScore++;
    sessionScore++;

    // Update score elements
    localScoreElement.textContent = localScore;
    sessionScoreElement.textContent = sessionScore;

    // Save scores to storage
    localStorage.setItem("localScore", localScore);
    sessionStorage.setItem("sessionScore", sessionScore);
  });
});
