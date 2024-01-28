// main.js

function showCalculator() {
  document.getElementById("calculator").classList.remove("hidden");
  document.getElementById("tally").classList.add("hidden");
  document.getElementById("compound-interest").classList.add("hidden");
  document.getElementById("investment-calculator").classList.add("hidden"); // Hide investment calculator
}

function showTallyCounter() {
  document.getElementById("tally").classList.remove("hidden");
  document.getElementById("calculator").classList.add("hidden");
  document.getElementById("compound-interest").classList.add("hidden");
  document.getElementById("investment-calculator").classList.add("hidden"); // Hide investment calculator
}

function showCompoundInterestCalculator() {
  document.getElementById("compound-interest").classList.remove("hidden");
  document.getElementById("calculator").classList.add("hidden");
  document.getElementById("tally").classList.add("hidden");
  document.getElementById("investment-calculator").classList.add("hidden"); // Hide investment calculator
}

function showInvestmentCalculator() {
  document.getElementById("investment-calculator").classList.remove("hidden");
  document.getElementById("calculator").classList.add("hidden");
  document.getElementById("tally").classList.add("hidden");
  document.getElementById("compound-interest").classList.add("hidden");
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
document
  .getElementById("investment-calculator-link")
  .addEventListener("click", showInvestmentCalculator);
