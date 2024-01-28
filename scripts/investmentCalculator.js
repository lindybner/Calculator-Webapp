// investmentCalculator.js

document.addEventListener("DOMContentLoaded", function () {
  // Get elements from the DOM
  const calculateButton = document.getElementById("calculate-investment");
  const resultParagraph = document.getElementById("investment-result");

  // Add click event listener to the Calculate button
  calculateButton.addEventListener("click", function () {
    // Get user inputs
    const initialInvestment = parseFloat(
      document.getElementById("initial-investment").value
    );
    const contributionAmount = parseFloat(
      document.getElementById("contribution-amount").value
    );
    const contributionFrequency = document.getElementById(
      "contribution-frequency"
    ).value;
    const annualInterestRate = parseFloat(
      document.getElementById("annual-interest-rate").value
    );
    const investmentPeriod = parseInt(
      document.getElementById("investment-period").value
    );

    // Calculate investment based on frequency
    let periodsPerYear;
    switch (contributionFrequency) {
      case "quarterly":
        periodsPerYear = 4;
        break;
      case "semiannual":
        periodsPerYear = 2;
        break;
      case "annual":
        periodsPerYear = 1;
        break;
      default:
        periodsPerYear = 12; // Monthly
    }

    const totalPeriods = investmentPeriod * periodsPerYear;
    const annualInterestRateDecimal = annualInterestRate / 100;
    const interestRatePerPeriod = annualInterestRateDecimal / periodsPerYear;

    // Calculate future value
    const futureValue = calculateFutureValue(
      initialInvestment,
      contributionAmount,
      interestRatePerPeriod,
      totalPeriods
    );

    // Display result
    resultParagraph.textContent = `The future value of your investment is: $${futureValue.toFixed(
      2
    )}`;
  });

  // Function to calculate future value
  function calculateFutureValue(
    initialInvestment,
    contributionAmount,
    interestRatePerPeriod,
    totalPeriods
  ) {
    let futureValue = initialInvestment;

    for (let i = 0; i < totalPeriods; i++) {
      futureValue =
        futureValue * (1 + interestRatePerPeriod) + contributionAmount;
    }

    return futureValue;
  }
});
