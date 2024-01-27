const calculateSavings = document.getElementById("calculate-savings");

function calculateAndDisplayCompoundInterest() {
  // Fetch input values
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("years").value);
  const compoundsPerYear = parseFloat(
    document.getElementById("compounds").value
  );

  // Calculate compound interest using the imported function
  const compoundInterestResult = calculateCompoundInterest(
    principal,
    rate,
    time,
    compoundsPerYear
  );

  // Display the result
  document.getElementById(
    "result"
  ).innerHTML = `<strong>Total: $${compoundInterestResult}</strong><br>Interest: $${(
    compoundInterestResult - principal
  ).toFixed(2)}`;
}

function calculateCompoundInterest(principal, rate, time, compoundsPerYear) {
  // Your compound interest calculation logic here
  // Formula: A = P(1 + r/n)^(nt)
  const compoundInterest =
    principal *
    Math.pow(1 + rate / (compoundsPerYear * 100), compoundsPerYear * time);
  return compoundInterest.toFixed(2);
}

// eventlistener
calculateSavings.addEventListener("click", calculateAndDisplayCompoundInterest);
