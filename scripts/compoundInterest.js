// compound-interest.js

function calculateCompoundInterest(principal, rate, time, compoundsPerYear) {
  // Your compound interest calculation logic here
  // Formula: A = P(1 + r/n)^(nt)
  const compoundInterest =
    principal *
    Math.pow(1 + rate / (compoundsPerYear * 100), compoundsPerYear * time);
  return compoundInterest.toFixed(2);
}
