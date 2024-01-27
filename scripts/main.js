// main.js

function showCalculator() {
  document.getElementById("calculator").classList.remove("hidden");
  document.getElementById("tally").classList.add("hidden");
}

function showTallyCounter() {
  document.getElementById("tally").classList.remove("hidden");
  document.getElementById("calculator").classList.add("hidden");
}

// Show calculator by default
showCalculator();
