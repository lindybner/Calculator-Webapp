// main.js

function showCalculator() {
  document.getElementById("calculator").classList.remove("hidden");
  document.getElementById("tally").classList.add("hidden");
  document.getElementById("compound-interest").classList.add("hidden");
}

function showTallyCounter() {
  document.getElementById("tally").classList.remove("hidden");
  document.getElementById("calculator").classList.add("hidden");
  document.getElementById("compound-interest").classList.add("hidden");
}

function showCompoundInterestCalculator() {
  document.getElementById("compound-interest").classList.remove("hidden");
  document.getElementById("calculator").classList.add("hidden");
  document.getElementById("tally").classList.add("hidden");
}

// Show calculator by default
showCalculator();

// Event listeners for navbar links
document
  .getElementById("calculator-link")
  .addEventListener("click", showCalculator);
document
  .getElementById("tally-link")
  .addEventListener("click", showTallyCounter);
document
  .getElementById("compound-interest-link")
  .addEventListener("click", showCompoundInterestCalculator);
